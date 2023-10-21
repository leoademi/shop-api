# Getting Started with Laravel

To start the project in the backend of Laravel (PHP), you will need to follow these steps:

1. **Install PHP and Composer:**
   - First, download and install PHP and Composer.
   - To verify the installation, open your command prompt or terminal and run the following commands:
     ```bash
     php --version
     composer --version
     ```
   - If you don't see version information, please restart your computer.
   - For reference, you can watch this [installation video](https://www.youtube.com/watch?v=mJPAs-RUDyw).

2. **Install MySQL and XAMPP (Optional):**
   - If you prefer to use XAMPP, install it.
   - Create a new database connection with the name specified in the `database.php` configuration file, typically in the root directory (e.g., `shop_api`).
   - Configure the host and other relevant settings.

3. **Optimize and Migrate:**
   - In the terminal, navigate to your project directory.
   - Run the following commands:
     ```bash
     php artisan optimize
     php artisan migrate
     ```
   - Make sure that you have the `server.php` file. In some cases, due to antivirus programs, this file may be removed.

4. **Serve Your Application:**
   - To start your Laravel backend, run:
     ```bash
     php artisan serve
     ```
   - Your backend is now up and running.

By following these steps, you'll have a fully configured Laravel backend ready for your project.
