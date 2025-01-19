// components/Layout.js

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">{children}</main>
      <footer className="bg-gray-900 text-white text-center py-3">
        <p>© 2025 SRINI Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}
