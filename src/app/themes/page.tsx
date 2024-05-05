"use client";
import Image from "next/image";;
import { Key } from "react";
import Link from "next/link";

var global_data: any | null = null;
var compiled_data = <></>;

function on_search() {
  var data = global_data;
  let x = document.getElementById("content") as HTMLElement;
  let value = document.getElementById("default-search") as HTMLInputElement;
  let content_inside_searchbox = value.value;
  x.innerHTML = "";
  for (var i = 0; i < data.addons.length; i++) {
    const addon = data.addons[i];
    if (addon.id.includes(content_inside_searchbox)) {
      x.innerHTML += `
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110 transform">
            <img
              class="rounded-t-lg"
              src=${
                "https://raw.githubusercontent.com/lite-xl/lite-xl-colors/master/previews/" +
                addon.id +
                ".svg"
              }
              alt=""
              style="width: 100%;"
            />
          <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ${addon.id}
              </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                Version: ${addon.version}
              </span>
              <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 capitalize">
                Type: ${addon.tags[0]}
              </span>
            </p>
            <a
              href=${"/themes/"+addon.id}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View plugin
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        `;
    }
  }
  return;
}

export default async function themes() {
  const data = await getData();
  global_data = data;
  compiled_data = (
    <div
      id="content"
      className="flex flex-wrap justify-center"
      style={{ gap: "1rem" }}
    >
      {data.addons.map(
        (addon: { id: string; version: number; tags: string }, index: Key) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110 transform"
          >
              <Image
                width={420}
                height={22}
                className="rounded-t-lg"
                src={
                  "https://raw.githubusercontent.com/lite-xl/lite-xl-colors/master/previews/" +
                  addon.id +
                  ".svg"
                }
                alt=""
              />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {addon.id}
                </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Version: {addon.version}
                </span>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 capitalize">
                  Type: {addon.tags[0]}
                </span>
              </p>
              <Link
                href={"/themes/" + addon.id}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View plugin
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
  return (
    <div className="bg-white dark:bg-gray-900">
      <h1 className="text-center text-5xl font-extrabold dark:text-white p-10">
        Browse themes
      </h1>
      <div className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="mb-10 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            onInput={on_search}
            required
          />
          <button
            id="searchbox"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
      <div>{compiled_data}</div>
    </div>
  );
}

async function getData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/lite-xl/lite-xl-colors/master/manifest.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
