# Dentnoor 🦷

> Your AI-powered oral health companion - Get instant, intelligent answers to all your dental questions

[Live Demo](https://dentnoor.vercel.app)

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Built With](#️-built-with)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#-usage)
- [Roadmap](#️-roadmap)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## 🎯 About The Project

![Dentnoor Screenshot](public/screenshot.png)

**Dentnoor** is an AI-powered oral health companion that makes dental care information accessible to everyone. Whether you're curious about different types of teeth, seeking advice on dental hygiene, or have questions about oral health conditions, Dentnoor provides instant, accurate, and easy-to-understand responses.

### Why Dentnoor?

- 💡 **Instant Answers** - Get immediate responses to your dental questions
- 🧠 **AI-Powered** - Leverages advanced Groq AI for accurate information
- 📚 **Educational** - Learn about oral health in an engaging way
- 🔒 **Private & Secure** - Your health questions remain confidential
- 🎨 **Beautiful Interface** - Clean, intuitive design with markdown formatting

### What Makes It Different?

Unlike generic AI chatbots, Dentnoor is specifically designed for oral health queries, providing:

- Detailed explanations of dental conditions
- Preventive care recommendations
- Information about dental procedures
- Tips for maintaining optimal oral health

> **Disclaimer**: Dentnoor provides educational information only. Always consult a qualified dentist for medical advice and treatment.

## ✨ Features

- 🚀 **Lightning-Fast Responses** - Powered by Groq's ultra-fast inference
- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations
- 📱 **Mobile Optimized** - Seamless experience across all devices
- 📊 **Rich Formatting** - Beautiful markdown rendering with tables and lists
- 🔐 **Secure Authentication** - Google OAuth integration via NextAuth
- 💾 **Chat History** - Save and revisit your conversations
- 🌐 **Real-Time Responses** - Live AI interaction with streaming support
- ♿ **Accessible** - Built with accessibility best practices

## 🛠️ Built With

### Core Technologies

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling

### Backend & Database

- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[Drizzle](https://orm.drizzle.team/docs/overview)** - Database ORM
- **[Vercel](https://vercel.com/)** - Hosting & deployment

### APIs & Integrations

- **[Groq API](https://groq.com/)** - AI language model (Llama 3.3 70B)
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication
- **[Google Cloud Console](https://console.cloud.google.com/)** - Social login

### UI Libraries

- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Markdown rendering
- **[Remark GFM](https://github.com/remarkjs/remark-gfm)** - GitHub Flavored Markdown
- **[React Icons](https://react-icons.github.io/react-icons)** - Icon library

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

```bash
# Node.js v18 or higher
node --version  # Should be >= 18.0.0

# npm or yarn
npm --version   # or
yarn --version

# Git
git --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Oloniyo-Bolaji/dentnoor.git
cd dentnoor
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up your database**

```bash
# If using Prisma
npx drizzle-kit generate
npx drizzle-kit push
```

4. **Configure environment variables** (see below)

5. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

6. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/dentnoor?schema=public"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"  # Generate: openssl rand -base64 32

# Google OAuth (from Google Cloud Console)
GOOGLE_CLIENT_ID="your-google-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Groq API
GROQ_API_KEY="gsk_your_groq_api_key_here"

# Optional: App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

### Getting API Keys

#### 1. **Groq API Key**

- Visit [console.groq.com](https://console.groq.com)
- Sign up or log in
- Navigate to API Keys
- Create a new API key
- Copy and paste into `.env.local`

#### 2. **Google OAuth Credentials**

- Go to [Google Cloud Console](https://console.cloud.google.com)
- Create a new project or select existing
- Enable Google+ API
- Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
- Application type: **Web application**
- Add authorized JavaScript origins:
  - `http://localhost:3000`
- Add authorized redirect URIs:
  - `http://localhost:3000/api/auth/callback/google`
- Copy Client ID and Client Secret to `.env.local`

#### 3. **NextAuth Secret**

```bash
# Generate a secure random string
openssl rand -base64 32
```

## 💻 Usage

### Basic Chat

1. Open Dentnoor in your browser
2. Sign in with your Google account
3. Type your dental health question
4. Get instant AI-powered responses with beautiful formatting

### Example Questions

- "What are the different types of teeth?"
- "How often should I floss?"
- "What causes tooth sensitivity?"
- "Explain the process of getting a root canal"
- "What are wisdom teeth and why do they need removal?"

## 🗺️ Roadmap

### Completed ✅

- [x] Core chat functionality with Groq AI
- [x] Beautiful markdown rendering with tables
- [x] Google OAuth authentication
- [x] Responsive mobile design
- [x] PostgreSQL database integration
- [x] Chat history persistence

### Planned 📅

- [ ] Appointment booking integration
- [ ] Dentist finder feature


## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

Website: [https://dentnoor.vercel.app](https://dentnoor.vercel.app)

## 🙏 Acknowledgments

Special thanks to these amazing resources:

- **[Groq](https://groq.com/)** - Lightning-fast AI inference engine
- **[Next.js](https://nextjs.org/)** - The React framework for production
- **[Vercel](https://vercel.com/)** - Seamless deployment platform
- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Markdown rendering
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication made simple
