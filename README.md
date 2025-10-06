# WP Suite Blocks - Custom Gutenberg Block Library

A modern, highly optimized, and responsive collection of custom Gutenberg blocks developed to provide powerful, flexible, and consistent content tools for WordPress sites.

This project was built using the official `@wordpress/create-block` scaffolding tool and uses modern best practices, including React, ESNext, and SCSS.

## ✨ Features

This block suite is designed to enhance the editorial experience by offering highly customizable components while strictly controlling the final output for consistency.

### 1. Dynamic Grid Block (`dynamic-grid`)

A flexible container block for showcasing content (e.g., posts, cards, or custom content) in an organized, responsive grid layout.

| Feature                | Implementation Detail                                                                                                                     | Benefit to Client                                                                          |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| **Responsive Control** | Supports 1 to 6 columns. Automatically collapses to a single column on mobile (< 768px).                                                  | Ensures content is readable and beautifully presented on all devices.                      |
| **Full Width Support** | Explicitly overrides theme container constraints using the standard `alignfull` pattern (`width: 100vw; margin-left: calc(50% - 50vw);`). | Allows for modern, edge-to-edge layouts for high-impact sections.                          |
| **Layout Consistency** | Uses CSS Grid with `gap` properties to manage spacing, eliminating the common "margin-collapse" issues seen with older float-based grids. | Guarantees consistent spacing and alignment across the site, regardless of content length. |

### 2. Call to Action (CTA) Block (`cta`)

A powerful component to drive conversions, designed to be highly visible and easily stylable.

| Feature                 | Implementation Detail                                                                                                            | Benefit to Client                                                                          |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| **Custom Styling**      | Custom background styles implemented via `linear-gradient` (e.g., White-to-Blue demo gradient).                                  | Easy application of branded, visually appealing backgrounds without custom CSS.            |
| **CSS Specificity Fix** | Highly specific SCSS selectors implemented to ensure core link styles (`text-decoration: none;`) always win over theme defaults. | Eliminates common visual bugs and maintains clean design across all themes.                |
| **Inner Block Ready**   | Can accept multiple nested blocks (heading, paragraph, button) for flexible content composition.                                 | Allows editors to compose rich CTA content without being restricted to simple text fields. |

---

## 🛠️ Technical Specifications & Setup

This section outlines how to get the project running in a local development environment.

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Local WordPress environment (e.g., Local by Flywheel, Lando, or Docker)

### Installation

1.  **Clone the Repository:**

    ```bash
    git clone [your-repo-url] wp-suite-blocks
    cd wp-suite-blocks
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
