"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Footer, Navbar } from "flowbite-react";
import { BsDiscord, BsGithub } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

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
              alt="Lite-xl themes Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Lite-xl Themes
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link as={Link} href="/" active={current_route === "/" ? true : false}>
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} href="/themes" active={current_route === "/themes" ? true : false}>
              Themes
            </Navbar.Link>
            <Navbar.Link href="https://rohanvashisht1234.github.io/makelitexltheme">Theme designer</Navbar.Link>
            <Navbar.Link href="https://lite-xl.com/en/downloads">Download lite-xl</Navbar.Link>
            <Navbar.Link href="https://github.com/lite-xl/lite-xl-plugin-manager">Download lpm</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        {children}
        <div className="pt-10 bg-slate-900">
          <Footer container>
            <div className="w-full">
              <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div>
                  <Footer.Brand
                    href="/"
                    src="/logo.svg"
                    alt="Lite-xl Themes logo"
                    name="Lite-xl Themes"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                  <div>
                    <Footer.Title title="Lite xl" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="https://lite-xl.com">Lite-xl website</Footer.Link>
                      <Footer.Link href="https://github.com/lite-xl/lite-xl">Lite-xl GitHub Repo</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title="Join us" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="https://github.com/lite-xl">Github</Footer.Link>
                      <Footer.Link href="https://discord.gg/UQKnzBhY5H">Discord</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title="Download" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="https://lite-xl.com/en/downloads">Lite-xl</Footer.Link>
                      <Footer.Link href="https://github.com/lite-xl/lite-xl-plugin-manager">Lpm</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                </div>
              </div>
              <Footer.Divider />
              <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="https://github.com/rohanvashisht1234" by="Rohan Vashisht" year={2024} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <Footer.Icon href="https://github.com/RohanVashisht1234/litexlthemes" icon={BsGithub} />
                  <Footer.Icon href="https://discord.gg/UQKnzBhY5H" icon={BsDiscord} />
                </div>
              </div>
            </div>
          </Footer>
        </div>
      </body>
    </html>
  );
}
