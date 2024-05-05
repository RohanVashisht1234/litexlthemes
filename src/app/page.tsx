import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            View lite-xl themes, Make it look as you like
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Search 50+ lite-xl themes that suits your needs, want to make a new
            one? check the{" "}
            <a
              className="text-blue-200"
              href="https://rohanvashisht1234.github.io/makelitexltheme"
            >
              lite-xl designer
            </a>
          </p>
          <Link
            href={"/themes"}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            View themes
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <a
            href="https://rohanvashisht1234.github.io/makelitexltheme"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Make your own theme
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/lite-xl.png"
            alt="lite-xl"
            width={1500}
            height={1500}
          ></Image>
        </div>
      </div>
      <center>
      <div className="ytp-cued-thumbnail-overlay" data-layer="4">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script>
      </div>
      </center>

<div className="max-w-2xl mx-auto">

	<div id="default-carousel" className="relative" data-carousel="static">

        <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                <Image width={100} height={100} src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="block absolute top-1/2 left-1/2 w-full f-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
            </div>
         
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <Image width={100} height={100} src="/lite-xl.png" className="block absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
            </div>
     
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <Image width={100} height={100} src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="block absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
            </div>
        </div>
     
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
   
        <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="hidden">Previous</span>
            </span>
        </button>
        <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="hidden">Next</span>
            </span>
        </button>
    </div>

	<p className="mt-5">This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn
		more
		by going to the official <a className="text-blue-600 hover:underline"
			href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.
	</p>
    <Script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></Script>
</div>
    </section>
  );
}
