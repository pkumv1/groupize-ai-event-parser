# Groupize.ai Event Document Parser with Aime

## AI-Powered Event Document Analysis

This application uses **Aime**, Groupize.ai's AI assistant for meetings & events planning, to automatically extract and analyze information from event contracts, BEOs, and other event documents.

### Features

- 📄 **PDF & Word Document Support**: Upload PDF or DOCX files
- 🤖 **AI-Powered Extraction**: Aime uses advanced AI to extract event details
- 📊 **Structured Data Output**: Get organized information about:
  - Event details and dates
  - Meeting room configurations
  - Sleeping room blocks
  - Food & beverage arrangements
  - Audio/visual requirements
  - Financial terms and totals
- 💾 **Export Options**: Download extracted data as JSON
- 🎨 **Modern UI**: Clean, intuitive interface powered by Groupize.ai

### Technology Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **AI**: Groq API with Llama 3.3 70B model
- **Document Processing**: pdf-parse, Mammoth.js
- **Deployment**: Vercel

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env.local` file with your Groq API key
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

### About Groupize.ai

Groupize.ai is revolutionizing the meetings and events industry with AI-powered solutions. Aime, our AI assistant, helps event professionals save time and reduce errors in document processing.

---

© 2025 Groupize.ai - Powered by Aime 🤖