import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "12px 24px" }}>
        
        {/* Logo - Left */}
        <Link to="/">
          <img src="/climent.png" alt="Climent logo" className="h-14" />
        </Link>

        {/* Theme Toggle - Right */}
        <div
          style={{ cursor: "pointer", transition: "transform 0.5s", transform: isDark ? "rotate(180deg)" : "rotate(0deg)" }}
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-500" />
          ) : (
            <Moon className="h-6 w-6 text-blue-400" />
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;