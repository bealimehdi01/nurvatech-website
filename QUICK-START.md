# 🚀 Nurvatech Website - Quick Start Guide

## ✅ Installation Complete!

Your Nurvatech website is now ready to run! All dependencies have been installed successfully.

## 🏃‍♂️ How to Start the Development Server

### Option 1: Using the Batch File (Easiest)
Double-click on `start-dev.bat` file in the project folder

### Option 2: Using PowerShell/Command Prompt
1. Open PowerShell or Command Prompt
2. Navigate to the project folder:
   ```cmd
   cd "D:\ali\Projects\Nuravatech"
   ```
3. Add Node.js to PATH (if needed):
   ```powershell
   $env:PATH += ";C:\Program Files\nodejs"
   ```
4. Start the development server:
   ```cmd
   npm run dev
   ```

### Option 3: Using VS Code Terminal
1. Open the project in VS Code
2. Open terminal (Ctrl + `)
3. Run: `npm run dev`

## 🌐 Accessing Your Website

Once the server starts, you'll see:
```
Local:        http://localhost:3000
Network:      http://192.168.x.x:3000
```

Open your browser and go to: **http://localhost:3000**

## 📧 Contact Form Setup (Optional)

To enable the contact form email functionality:

1. Sign up for a free account at [Resend.com](https://resend.com)
2. Get your API key
3. Edit the `.env.local` file and replace:
   ```
   RESEND_API_KEY=your_actual_api_key_here
   ```

## 🛠️ Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run code linting

## 🎨 What You'll See

Your website includes:
- **Modern Hero Section** with animations
- **Services Overview** with hover effects
- **Why Choose Us** section with stats
- **Case Studies** showcase
- **Client Testimonials** carousel
- **Technology Stack** display
- **Contact Form** (with email integration when configured)
- **Responsive Design** (mobile, tablet, desktop)
- **Dark/Light Mode** toggle
- **Professional Navigation** with smooth animations

## 🚀 Deployment

When ready to deploy:
1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Add your environment variables in Vercel dashboard
3. Deploy automatically!

## 📞 Need Help?

If you encounter any issues:
1. Make sure Node.js v18+ is installed
2. Delete `node_modules` and run `npm install` again
3. Check that port 3000 is available
4. Restart your terminal/VS Code

---

**Congratulations! Your professional Nurvatech website is ready! 🎉**
