// hooks/useSystemTheme.ts
import { useEffect, useState } from "react";

const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    if (mediaQueryList.matches) {
      setSystemTheme("dark");
    }

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  return systemTheme;
};

export default useSystemTheme;
