import { JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Dalia Wadsworth',
  description: 'Frontend Developer & Designer specializing in web design, frontend development, and graphic design.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
