# 🚀 Sourav Kumar Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, featuring animated sections, project showcases, and a working contact form.

## ✨ Features

- 🎨 **Modern UI**: Styled with Tailwind CSS
- 🌀 **Animated Sections**: GSAP & Framer Motion for smooth transitions
- 💼 **Project Showcase**: Live demo ▶️ and GitHub 🐙 links for each project
- 🏆 **Achievements Section**: Highlights coding and contest achievements
- 📬 **Contact Form**: EmailJS integration for direct contact
- 📱 **Responsive Design**: Works on all device sizes

## 🛠️ Tech Stack

- ⚛️ React 18 (Create React App)
- 🌀 GSAP
- 💨 Tailwind CSS
- ✉️ EmailJS
- 🎬 Framer Motion

## 🚦 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd sourav-kumar-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

   The application will open in your browser at [http://localhost:3000](http://localhost:3000) 🌐

### 🏗️ Building for Production

To create a production build:
```bash
npm run build
```
The build files will be created in the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components (UI, sections, etc.)
│   ├── canvas/         # 3D/animated canvas components
│   └── ...
├── constants/          # Data and configuration
├── assets/             # Images and static assets
├── styles.js           # Style utilities
├── utils/              # Utility functions
└── hoc/                # Higher-order components

public/
└── index.html          # HTML template
```

## 📜 Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Creates a production build

## 🔑 Environment Variables

Set up the following in your `.env` file:
- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create a feature branch
3. ✍️ Make your changes
4. 🔄 Submit a pull request

## 📄 License

This project is licensed under the MIT License. 