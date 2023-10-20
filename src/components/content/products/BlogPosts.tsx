import React, {useEffect, useState} from "react";
import './BlogPosts.scss';


// const blogPosts = [
//     { id: 1, name: 'Product 1', price: '$10', image: '/logo192.png' },
//     { id: 2, name: 'Product 2', price: '$15', image: '/logo192.png' },
//     { id: 3, name: 'Product 3', price: '$20', image: '/logo192.png' },
// ];

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    image: string;
}

interface ImageData {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const BlogPosts = () => {
    const [blogPosts, setBlogPosts] = useState<Post[]>([]);
    const [postsToShow, setPostsToShow] = useState(4);
    const [showAsColumn, setShowAsColumn] = useState(false);

    useEffect(() => {
        // Fetch the latest 10 posts from the API when the component mounts
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
            .then((response) => response.json())
            .then((data: Post[]) => {
                // Fetch the corresponding images from the 'photos' API
                fetch('https://jsonplaceholder.typicode.com/photos?_limit=8')
                    .then((response) => response.json())
                    .then((imagesData: ImageData[]) => {
                        // Combine posts with images based on their IDs
                        const postsWithImages = data.map((post) => {
                            const image = imagesData.find((imageData) => imageData.id === post.id);
                            return {
                                ...post,
                                image: image ? image.url : '', // Use the image URL if available
                            };
                        });
                        setBlogPosts(postsWithImages);
                    })
                    .catch((error) => console.error('Error fetching images:', error));
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const showMorePosts = () => {
        // Show 6 more posts when the "Show More" button is clicked
        setPostsToShow(postsToShow + 4);
        setShowAsColumn(true);
    };

    const showLessPosts = () => {
        setPostsToShow(4);
    };

    return (
        <div className="blog-container">
            <div className="blog-header">
                <h2>Latest Posts</h2>
            </div>
            <div className={`blog-posts ${showAsColumn ? 'column-layout' : ''}`}>
                {blogPosts.slice(0, postsToShow).map((post) => (
                    <div key={post.id} className="post">
                        <div className="post-image small-image">
                            <img src={post.image} alt={`Image for ${post.title}`} />
                        </div>
                        <div className="post-content">
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-body">{post.body}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button-container">
                {postsToShow < blogPosts.length && (
                    <button onClick={showMorePosts} className="transparent-button">
                        Show More
                    </button>
                )}
                {postsToShow > 4 && (
                    <button onClick={showLessPosts} className="transparent-button">
                        Show Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default BlogPosts;