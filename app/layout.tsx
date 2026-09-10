import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AURA — Discover Your Aura',
  description: 'AURA — luxury beauty discovery and seasonal recommendations',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-aura-900 text-white antialiased">
        <header className="w-full border-b border-white/6">
          <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
            {/* Left Nav */}
            <nav className="hidden md:flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">DISCOVER</a>
            </nav>

            {/* Center wordmark */}
            <div className="text-lg md:text-xl font-display tracking-widest">AURA</div>

            {/* Right Nav */}
            <nav className="hidden md:flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">SHOP</a>
              <a href="#" className="hover:text-white transition-colors">REWARDS</a>
            </nav>

            {/* Mobile: simple menu trigger */}
            <div className="md:hidden text-sm text-gray-300">Menu</div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t border-white/6">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between gap-4">
            <div>© {new Date().getFullYear()} AURA — All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
