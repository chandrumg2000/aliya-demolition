# Aliya Demolition Website

A modern, high-conversion website for a demolition services company in Chennai, India. Built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Key Features

*   **Modern Design**: Premium, heavy-industry theme with subtle grit textures and strong contrast.
*   **Responsive**: Fully optimised for mobile, tablet, and desktop.
*   **Lead Generation**: Integrated contact forms with Zod validation, WhatsApp CTA, and sticky mobile call bar.
*   **SEO Optimized**: Metadata, basic Schema Markup (LocalBusiness), and semantic HTML.
*   **Performance**: Fast loading with Next.js App Router and optimized images.
*   **Gallery**: Filterable project gallery with lightbox.

## 🛠 Tech Stack

*   **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Forms**: React Hook Form + Zod
*   **Language**: TypeScript

## 📂 Project Structure

```
src/
├── app/                  # App Router pages and API routes
│   ├── api/lead/         # Lead submission API
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── projects/         # Gallery page
│   ├── quote/            # Get a Quote landing page
│   ├── services/         # Services listing page
│   ├── layout.tsx        # Root layout (Navbar, Footer)
│   └── page.tsx          # Homepage
├── components/           # Reusable components
│   ├── features/         # Complex features (Forms, Gallery, Cards)
│   ├── layout/           # Navbar, Footer, MobileBar
│   ├── sections/         # Homepage sections (Hero, Services, etc.)
│   ├── seo/              # Schema markup
│   └── ui/               # Base UI elements (Button, Inputs)
└── lib/                  # Utilities (clsx, tailwind-merge)
```

## ⚡ Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Open locally:**
    Visit [http://localhost:3000](http://localhost:3000)

## 📦 Deployment (Vercel)

This project is deployment-ready for Vercel.

1.  Push his code to a GitHub repository.
2.  Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3.  Import your GitHub repository.
4.  Vercel will automatically detect Next.js.
5.  Click **Deploy**.

## 📝 Lead Management

*   Leads submitted via the form are currently stored in a local JSON file (`data/leads.json`) for development demonstration.
*   **Production Note**: For production, connect the `/api/lead` route to a database (PostgreSQL, MongoDB) or an email service (Resend, SendGrid) to persist data properly, as Vercel's file system is ephemeral.

## 🎨 Customization

*   **Colors/Fonts**: Edit `src/app/globals.css` (Tailwind variables).
*   **Images**: Replace placeholder URLs in components with actual project photos.
*   **Content**: Update text in the individual component files in `src/components/sections`.

---
© 2026 Aliya Demolition Services.
