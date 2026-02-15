# Communication Dashboard - Frontend

A modern, responsive web application built with Next.js for managing and monitoring multi-channel communications including Emails, SMS, and WhatsApp messages.

## 🚀 Features

- **Multi-Channel Support**: Seamlessly switch between Email, SMS, and WhatsApp tracking.
- **Dynamic Forms**: Clean, intuitive forms for composing and sending messages.
- **Communication History**: Real-time table view of sent messages with timestamps.
- **Responsive Design**: Fully optimized for various screen sizes using Tailwind CSS.
- **Status Notifications**: Immediate feedback on message delivery status.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API Client**: [Axios](https://axios-http.com/)
- **Icons**: Emoji based for simplicity and performance.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: v18.17 or later
- **Backend Service**: The Django backend should be running on `http://localhost:8000`.

## ⚙️ Getting Started

1. **Clone the repository** (if you haven't already).
2. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. **Open the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

- `src/app`: Next.js App Router pages and global styles.
- `src/components`: Reusable UI components (`CommunicationForm`, `CommunicationTable`).
- `src/services`: API abstraction layer using Axios.

## 🔗 API Integration

The frontend connects to the following Django REST endpoints:
- `GET/POST /api/emails/`
- `GET/POST /api/sms/`
- `GET/POST /api/whatsapp/`

Configuration can be found in `src/services/api.js`.