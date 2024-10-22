// import "./globals.css";
'use client'
import NavBar from "./Components/NavBar";
import { Provider } from "react-redux";
import { store } from "./Reduxx/store";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "AliceBlue" }}>
        <Provider store={store}>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
