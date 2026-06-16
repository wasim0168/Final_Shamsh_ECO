"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderLink {
  title: string;
  href: string;
}

const Header = () => {
  const headerLinks: HeaderLink[] = [
    { title: "Home", href: "/" },
    { title: "Facilities", href: "/facilities" },
    { title: "Process", href: "/process" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contactUs" },
  ];

  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* ✅ Logo (Fixed + Bigger) */}
        <Link href="/">
          <Image
            src="/logo_shamsh.png"
            alt="SHAMSH Eco Recycling"
            width={200}   // 🔥 increase size here
            height={70}
            priority
            className="object-contain rounded-[20px]"
          />
        </Link>

        {/* ================= Desktop Nav ================= */}
        <div className="hidden md:flex items-center gap-8">
          {headerLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`text-sm font-bold relative transition-colors ${
                  isActive
                    ? "text-green-300"
                    : "text-green-400 hover:text-green-300"
                }`}
              >
                {item.title}

                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-300 rounded-full" />
                )}
              </Link>
            );
          })}

          <Link href="https://wa.me/916261196163" target="_blank">
            <Button
              size="sm"
              className="h-8 rounded-full bg-green-600 hover:bg-green-700 px-5 text-sm font-bold"
            >
              Get Quote
            </Button>
          </Link>
        </div>

        {/* ================= Mobile Menu ================= */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-black/90 backdrop-blur border-white/10"

            >
              <SheetHeader>
                <SheetTitle className="text-white">
                  {/* ✅ Mobile Logo Fix */}
                  <Image
                    src="/logo_shamsh.png"
                    alt="SHAMSH Eco Recycling"
                    width={160}
                    height={60}
                    className="object-contain"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-6 px-8">
                {headerLinks.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`text-lg font-bold ${
                        isActive
                          ? "text-green-300 underline underline-offset-4"
                          : "text-green-400 hover:text-green-300"
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}

                <Link href="https://wa.me/916261196163" target="_blank">
                  <Button className="mt-4 rounded-full bg-green-600 hover:bg-green-700 font-bold">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;