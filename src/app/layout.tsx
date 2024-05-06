"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Footer, Navbar } from "flowbite-react";
import { BsDribbble, BsGithub } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

function toggle_nav_display() {
  let mine = document.getElementById("mobile-menu") as HTMLElement;
  mine.style.cssText = "display:none;";
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const current_route = usePathname();
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} href="/">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite React
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/" active={current_route === "/" ? true : false}>
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} href="/">
              About
            </Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        {children}
        <div className="pt-10 bg-slate-900">
          <Footer container>
            <div className="w-full">
              <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div>
                  <Footer.Brand
                    href="https://flowbite.com"
                    src="https://flowbite.com/docs/images/logo.svg"
                    alt="Flowbite Logo"
                    name="Flowbite"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                  <div>
                    <Footer.Title title="about" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="#">Flowbite</Footer.Link>
                      <Footer.Link href="#">Tailwind CSS</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title="Follow us" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="#">Github</Footer.Link>
                      <Footer.Link href="#">Discord</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title="Legal" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="#">Privacy Policy</Footer.Link>
                      <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                </div>
              </div>
              <Footer.Divider />
              <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <Footer.Icon href="#" icon={BsGithub} />
                  <Footer.Icon href="#" icon={BsDribbble} />
                </div>
              </div>
            </div>
          </Footer>
        </div>
      </body>
    </html>
  );
}
