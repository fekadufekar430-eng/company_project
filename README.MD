🚀 Company Multi-Page Web Project
Welcome to the official repository for our collaborative web project! This repository contains a modern, responsive multi-page website built using HTML, CSS, and JavaScript, structured modular for easy teamwork.

📂 Project Directory Structure
To keep our codebase clean, maintainable, and free of merge conflicts, each page of the website has its own dedicated folder containing its specific HTML, CSS, and JavaScript files.


my-company-website/
│
├── index.html                  <-- Main Landing Page
├── assets/                     <-- Global resources (Shared CSS, JS, Images)
│   ├── css/
│   │   └── global.css          
│   ├── js/
│   │   └── main.js             
│   └── images/
│
├── home/
│   ├── home.html
│   ├── home.css
│   └── home.js
│
├── about/
│   ├── about.html
│   ├── about.css
│   └── about.js
│
├── service/
│   ├── service.html
│   ├── service.css
│   └── service.js
│
├── portfolio/
│   ├── portfolio.html
│   ├── portfolio.css
│   └── portfolio.js
│
├── pricing/
│   ├── pricing.html
│   ├── pricing.css
│   └── pricing.js
│
├── blog/
│   ├── blog.html
│   ├── blog.css
│   └── blog.js
│
└── contact/
    ├── contact.html
    ├── contact.css
    └── contact.js
👥 Team Workflow & Contribution Guidelines
To ensure smooth collaboration and prevent confusion between team members, we follow a Modular Ownership Strategy:

Independent Page Ownership: Instead of having different people split the HTML, CSS, and JavaScript of the same file (which often leads to integration errors and miscommunications), one developer is fully responsible for a specific page/folder from start to finish.

Complete Implementation: The assigned developer writes the HTML structure, styles it with CSS, and handles the DOM manipulation/JavaScript functionality entirely for that specific module.

Pushing Code: Once a page or section is fully completed and tested locally, the developer pushes the complete, self-contained work to the repository.

🛠️ Technologies Used
HTML5 (Semantic markup)

CSS3 (Modern layouts, Flex box/Grid, responsive design)

JavaScript (ES6+) (DOM manipulation and interactive elements)