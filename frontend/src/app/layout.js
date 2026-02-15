import "./globals.css";

export const metadata = {
    title: "CommDash - Unified Communication Dashboard",
    description: "A centralized dashboard to manage Emails, SMS, and WhatsApp messages.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-sans antialiased">{children}</body>
        </html>
    );
}
