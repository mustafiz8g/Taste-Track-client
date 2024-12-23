
## Taste Track(Restaurant Management Website)

# Project Description
This project is a Restaurant Management Website named Taste Track developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform is designed to enhance the restaurant's online presence, streamline internal processes, and improve customer interaction.

# Live Website
🔗 https://taste-track-5d237.web.app/

# Key Features
# General
Fully responsive design (mobile, tablet, and desktop).
Theme toggle (light/dark mode).
Secured Firebase and MongoDB credentials using environment variables.
# Authentication
Login: Supports email/password and Google/GitHub login.
Register: Includes password validation (uppercase, lowercase, and minimum 6 characters).
JWT-based authentication for private routes.
# Pages
# Home Page
Banner Section: Includes a slider with heading, description, and a button redirecting to "All Foods."
Top Foods Section: Displays 6 top-selling foods with details and a "See All" button.
Extra Sections: Two additional relevant sections.
# All Foods Page
Displays all foods from the database.
Search functionality to find foods by name.
# Single Food Page
Shows detailed information about a selected food item.
Includes a purchase button (restricted if the item is unavailable).
# Food Purchase Page (Private)
A form to purchase food, prefilled with logged-in user details.
Purchase restrictions based on available quantity.
# My Foods Page (Private)
Displays all foods added by the logged-in user.
Update functionality for user-added food items.
# Add Food Page (Private)
A form for adding new food items, with user information prefilled.
# My Orders Page (Private)
Displays all orders made by the logged-in user.
Includes delete functionality for orders.
# Gallery Page
Showcases a static image gallery with hover overlays and lightbox functionality.
# Technologies Used
# Frontend
React.js: Core framework.
Tailwind CSS: Styling.
DaisyUI: Component library.
React Router DOM: Routing.

# Backend
Node.js: Server environment.
Express.js: Server framework.
MongoDB: Database.
JWT: Authentication.
