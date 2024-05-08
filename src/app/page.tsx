import Image from "next/image";
import Link from "next/link";
import { Button, Carousel } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-800">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 inline-block text-transparent bg-clip-text">
                View Lite XL
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                themes,
              </span>{" "}
              <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-pink-400 inline-block text-transparent bg-clip-text">
                Make it look as you like
              </span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Search 25+ Lite XL themes that suits your needs, want to make a
              new one? check the{" "}
              <a
                className="text-blue-200"
                href="https://rohanvashisht1234.github.io/makelitexltheme"
              >
                Lite XL designer
              </a>
            </p>
            <Button
              as={Link}
              href={"/themes"}
              color={"none"}
              size={4}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 font-semibold"
            >
              View themes
              <HiOutlineArrowRight className="ml-2 h-6 w-5" />
            </Button>
            <a
              href="https://rohanvashisht1234.github.io/makelitexltheme"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Make your own theme
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="https://raw.githubusercontent.com/RohanVashisht1234/litexlthemes/main/parsers/images/justperfect.svg"
              alt="lite-xl"
              width={1500}
              height={1500}
            ></Image>
          </div>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 dark:bg-gray-900">
          <br></br>
          <Carousel
            slideInterval={1000}
            className="relative w-full max-w-2xl mx-auto border border-gray-300 shadow-2xl rounded-3xl dark:border-gray-700"
          >
            <Image
              className="w-full h-full p-4"
              width={1500}
              height={1500}
              src="https://raw.githubusercontent.com/RohanVashisht1234/litexlthemes/main/parsers/images/ayu-mirage.svg"
              alt="..."
            />
            <Image
              className="w-full h-full p-4"
              width={1500}
              height={1500}
              src="https://raw.githubusercontent.com/RohanVashisht1234/litexlthemes/main/parsers/images/vscode-dark.svg"
              alt="..."
            />
            <Image
              className="w-full h-full p-4"
              width={1500}
              height={1500}
              src="https://raw.githubusercontent.com/RohanVashisht1234/litexlthemes/main/parsers/images/dracula.svg"
              alt="..."
            />
            <Image
              className="w-full h-full p-4"
              width={1500}
              height={1500}
              src="https://raw.githubusercontent.com/RohanVashisht1234/litexlthemes/main/parsers/images/catppuccin-macchiato.svg"
              alt="..."
            />
            <Image
              className="w-full h-full p-4"
              width={1500}
              height={1500}
              src="https://raw.githubusercontent.com/RohanVashisht1234/litexlthemes/main/parsers/images/monokai.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </section>
    </>
  );
}
