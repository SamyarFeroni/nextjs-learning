// app/layout.js

import './global.css'; // بارگذاری فایل CSS

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
