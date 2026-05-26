import { type PropsWithChildren } from "react";
import Header from "./header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }} className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main style={{ flex: 1, maxWidth: "1200px", width: "100%", margin: "0 auto", padding: "32px 16px" }}>
        {children}
      </main>
      <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
        <div style={{ textAlign: "center" }} className="text-gray-200">
          <p>Made By Kaifysh Naaz</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;