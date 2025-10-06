# WP Suite Blocks - Custom Gutenberg Block Library

A modern, highly optimized, and responsive collection of custom Gutenberg blocks developed to provide powerful, flexible, and consistent content tools for WordPress sites.

This project was built using the official `@wordpress/create-block` scaffolding tool and uses modern best practices, including React, ESNext, and SCSS.

## ✨ Features

The plugin includes two primary blocks, each highlighting specific, modern WordPress capabilities:

## 1.  Dynamic Content Grid Block (dynamic-grid)

This is the flagship block, designed for displaying live, dynamic content in a structured, responsive grid. It showcases complex back-end integration with a seamless editor experience.

-   **Custom Gateway Integration:** Utilizes React Hooks (useSelect) to fetch real post data via the WordPress REST API, providing a true live preview within the editor canvas.
-   **Server Rendering:**  Final markup is generated securely on the server via a PHP render_callback and WP_Query, ensuring content is always fresh and improving frontend performance.    
-   **Modern Layout:** Employs native CSS Grid with gap properties for spacing, ensuring layout consistency and eliminating common margin-collapse issues.
-   **Full Width Support:** Explicitly integrates the native alignfull pattern, allowing the block to override theme container constraints for modern, edge-to-edge layouts.
  
## 2.  Call to Action (CTA) Block (cta)
   
A versatile and performant block for driving user action, featuring intuitive inline editing and styling controls. 

-   **Inner Block Ready:** Configured to accept multiple nested blocks (e.g., Heading, Paragraph, Button) using the InnerBlocks API for highly flexible content composition.
-   **Inline Editing:**  Utilizes the RichText component for seamless, direct editing of key content (Heading and Body) within the editor canvas.   
-   **Advanced Styling:** Supports custom background styles via CSS linear-gradient and integrates core spacing supports, providing visual appeal without custom CSS. 

---
 
## Installation

### For End-Users (Packaged Plugin)

To install a ready-to-use version of the plugin, download the latest release from the official releases page.

1.  Download the **.zip** file from the latest release: **[Click here to download the latest release](https://github.com/dilipraghavan/wp-gutenberg-block-suite/releases)**.
2.  In the WordPress dashboard, go to **Plugins** → **Add New**.
3.  Click **Upload Plugin**, select the downloaded **.zip** file, and click **Install Now**.
4.  After installation, click **Activate Plugin**.

### For Developers (Standard Git)

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/dilipraghavan/wp-gutenberg-block-suite.git wp-content/plugins/wp-suite-blocks
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
3.  **Build Assets:**

    ```bash
    npm run build
    # or use start for continuous development
    # npm run start
    ```
4.  **Activate Plugin:**
    Upload the `wp-suite-blocks` directory to your WordPress installation's `wp-content/plugins/` folder and activate it from the WordPress admin dashboard.

## 🤝 Contribution

Contributions are welcome! If you find a bug or have a suggestion, please open an issue or submit a pull request on the GitHub repository.

GitHub Repository: https://github.com/dilipraghavan/wp-gutenberg-block-suite.git

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/dilipraghavan/wp-gutenberg-block-suite/blob/main/LICENSE) file for details.

---
