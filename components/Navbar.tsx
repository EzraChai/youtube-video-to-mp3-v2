"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { setTheme, resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="flex items-center justify-between max-w-5xl px-2 py-2 mx-auto md:px-0 navbar">
        <div className="text-xl font-bold navbar-title">TubeToMP3</div>
        <div className="navbar-links">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size={"sm"}
                className="flex items-center justify-center"
                variant="ghost"
              >
                {resolvedTheme === "dark" && (
                  <>
                    <Moon width={16} height={16} className="mr-1" /> Dark
                  </>
                )}
                {resolvedTheme === "light" && (
                  <>
                    <Sun width={16} height={16} className="mr-2" />
                    Light
                  </>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[140px]">
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon width={16} height={16} className="mr-2" />
                Dark
                {theme === "dark" && (
                  <DropdownMenuShortcut>
                    <Check width={16} height={16} />
                  </DropdownMenuShortcut>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun width={16} height={16} className="mr-2" />
                Light
                {theme === "light" && (
                  <DropdownMenuShortcut>
                    <Check width={16} height={16} />
                  </DropdownMenuShortcut>
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Monitor width={16} height={16} className="mr-2" />
                System
                {theme === "system" && (
                  <DropdownMenuShortcut>
                    <Check width={16} height={16} />
                  </DropdownMenuShortcut>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <hr />
    </>
  );
}
