# AHK Global Solutions - Website Replica

A blazing fast, pixel-perfect replica of the AHK Global Solutions website with additional legal pages (Privacy Policy and Terms of Use).

## 🚀 Features

- **100% Identical Design**: Exact replica of the original AHK Solutions website
- **Legal Pages**: Complete Privacy Policy and Terms of Use pages
- **Blazing Fast Performance**: Optimized for speed with modern React and Vite
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern Tech Stack**: Built with React, Tailwind CSS, and shadcn/ui components
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.7
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Package Manager**: pnpm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ahk-solutions-replica
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
pnpm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the React app and deploy it
4. The `vercel.json` file is already configured for optimal performance

### Deploy to Netlify

1. Build the project: `pnpm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for React Router (already handled in `_redirects` file)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"homepage": "https://yourusername.github.io/ahk-solutions-replica",
"predeploy": "pnpm run build",
"deploy": "gh-pages -d dist"
```
3. Run: `pnpm run deploy`

## 📁 Project Structure

```
ahk-solutions-replica/
├── public/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsOfUse.jsx
│   ├── App.jsx         # Main application component
│   ├── AppRouter.jsx   # React Router configuration
│   ├── App.css         # Global styles
│   └── main.jsx        # Application entry point
├── vercel.json         # Vercel deployment configuration
└── README.md
```

## 🎨 Design Features

- **Modern Gradient Backgrounds**: Beautiful blue gradient backgrounds
- **Interactive Elements**: Hover effects and smooth transitions
- **Professional Typography**: Clean, readable fonts
- **Responsive Layout**: Mobile-first design approach
- **Optimized Images**: WebP format for better performance
- **Accessibility**: Proper ARIA labels and semantic HTML

## 📄 Legal Pages

The website includes two comprehensive legal pages:

1. **Privacy Policy** (`/privacy-policy`): Complete privacy and cookies policy
2. **Terms of Use** (`/terms-of-use`): Comprehensive terms and conditions

Both pages are fully styled and include:
- Professional layout with proper typography
- Easy navigation back to the main site
- Mobile-responsive design
- SEO-optimized content structure

## ⚡ Performance Optimizations

- **Vite Build Tool**: Lightning-fast builds and hot module replacement
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: WebP images with proper compression
- **CSS Optimization**: Tailwind CSS with purging for minimal bundle size
- **Caching Headers**: Optimized caching for static assets
- **Security Headers**: Proper security headers for production

## 🔧 Configuration Files

- `vite.config.js`: Vite configuration with React and Tailwind
- `vercel.json`: Vercel deployment configuration with security headers
- `tailwind.config.js`: Tailwind CSS configuration
- `package.json`: Dependencies and scripts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is created as a replica for demonstration purposes.

## 🚀 Live Demo

The website is optimized for deployment on:
- ✅ Vercel (Recommended)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Any static hosting service

---

**Built with ❤️ using modern web technologies for blazing fast performance.**

