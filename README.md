# ByteSpace - Next Generation E-Learning Platform

![ByteSpace Banner](public/Logo_Partner.png)

ByteSpace is a modern, high-performance e-learning platform built with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS**. It provides an engaging experience for discovering courses, tracking learning progress, and interacting with content creators.

---

## 🚀 Features

- **🎨 Modern Aesthetic Design**: Pixel-perfect UI with curated color palettes (`#0044FF` cobalt blue, `#D4FF00` electric lime), glassmorphic elements, and smooth micro-interactions.
- **🔍 Advanced Course Discovery & Search**:
  - Live real-time search by keyword, creator, and topic.
  - Multi-category pill filters (Featured, UI/UX, Development, Marketing, Music, etc.).
  - Sort by relevance, highest rating, price, and popularity.
  - Paginated course catalog.
- **📚 Interactive Course Details**:
  - Video preview with seamless blue backdrop wrapper.
  - Floating sticky action card with pricing, enroll button, and course specs.
  - Tabbed interface for **About**, **Lessons/Modules**, and **Reviews Breakdown**.
- **👨‍🏫 Creator Profiles**:
  - Dedicated creator page with bio, stats, followers counter, and creator course catalog.
- **🔐 Secure Authentication**:
  - Clean **Sign In** and **Join Us** pages with interactive password visibility toggles and social login options.
  - Conditional navigation (Navbar/Footer automatically hidden on auth routes).
- **📱 Fully Responsive**: Optimized for Mobile, Tablet (`md` 6-column grid), and Desktop displays.
- **⚡ SEO & Metadata**: Dynamic OpenGraph tags, page titles, and branded favicon support.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: JavaScript (React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Heroicons, Lucide React
- **Fonts**: Geist Sans & Geist Mono

---

## 📦 Getting Started

### Prerequisites

- Node.js (v18.17 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Kabya55/Byte-Space.git

# Navigate to project directory
cd Byte-Space

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.
Open [http://localhost:3000](https://byte-space-beryl.vercel.app) in your browser to see the application.

---

## 📂 Project Structure

```text
byte-space/
├── public/                # Static assets, brand logos, icons
│   ├── icon/              # Category icons (Design, Development, etc.)
│   └── login-icon/        # Auth and card illustrations
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── courses/       # Course catalog & dynamic details [id]
│   │   ├── creators/      # Creator profile page
│   │   ├── signin/        # Sign In page
│   │   ├── joinUs/        # Registration page
│   │   ├── search/        # Search route
│   │   ├── layout.js      # Root layout & global metadata
│   │   └── page.js        # Homepage
│   ├── component/         # Reusable UI components
│   │   ├── Banner.jsx
│   │   ├── CourseCard.jsx
│   │   ├── DiscoverCourses.jsx
│   │   ├── LearningPaths.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── TestimonialSection.jsx
│   │   ├── NavBar.jsx
│   │   └── Footer.jsx
│   └── data/              # Centralized mock data
└── package.json
```

---

## 📄 License

This project is licensed under the MIT License.
