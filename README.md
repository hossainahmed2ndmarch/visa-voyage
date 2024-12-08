VisaVoyage
Live Site URL <!-- Replace `#` with the actual live site URL -->

VisaVoyage is a modern visa management platform designed to simplify visa applications and streamline user interactions. From applying for visas to tracking their statuses, VisaVoyage makes the process efficient and user-friendly.

✨ Features
User Authentication: Secure login and registration functionality for users to manage their visa-related activities.
Dark/Light Mode Toggle: A responsive theme toggle for a personalized user experience.
Visa Management System:
Users can add visas, view all visas, and track their visa applications.
Features exclusive views for user-specific activities like "My Visas" and "My Applications."
Dynamic Navigation Bar:
Shows personalized options based on user authentication status.
Includes responsive tooltips for a better UX.
Mobile-Friendly Design: Fully responsive UI/UX optimized for desktop and mobile users.
📦 Key Technologies & NPM Packages Used
React: Frontend framework for building a responsive, dynamic SPA.
React Router: For efficient navigation across the app’s pages.
React Icons: Provides SVG-based icons for visual elements.
Tailwind CSS: For responsive and clean UI designs.
React Tooltip: Adds interactive tooltips for an improved user experience.
Toastify: For notifications (e.g., logout success messages).
Firebase: For user authentication and secure database integration.
React Lottie: Used to integrate dynamic animations during loading screens.


📖 Struggles Overcome During Development
Authentication & Authorization: Setting up Firebase and ensuring secure navigation for authenticated users took some trial and error.
Dynamic Tooltips: Learning and integrating the updated react-tooltip package required adjusting import styles and syntax.
Responsive Design: Balancing desktop and mobile-friendly layouts using Tailwind's utility classes took extensive testing.
Animation Integration: Initially struggled with loading Lottie animations dynamically via URLs, resolved by managing JSON files locally.
State Management: Handling user states and implementing functionality like LogOut and Profile View required efficient context management.
🛠️ Directory Structure
plaintext
Copy code
src/
├── assets/              # Images, animations (e.g., user icons, Lottie files)
├── components/          # Reusable UI components (Navbar, Footer, etc.)
├── provider/            # Context providers (AuthContext, ThemeProvider)
├── pages/               # Application pages (Home, AddVisa, etc.)
├── styles/              # Tailwind styles and custom CSS
├── App.js               # Main application file
├── index.js             # Entry point
📬 Feedback & Contribution
If you encounter issues or want to suggest improvements, feel free to open an issue or submit a pull request. Your contributions are welcome!

🌟 Live Preview
VisaVoyage Live Site <!-- Replace `#` with the actual live site URL -->

