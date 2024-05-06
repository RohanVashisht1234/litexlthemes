"use client";
import Image from "next/image";
import { Key } from "react";
import Link from "next/link";
import { Badge, Card, FloatingLabel } from "flowbite-react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
              href=${"/themes/" + addon.id}
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
          <Card
            key={index}
            className="min-w-96"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={
              "https://raw.githubusercontent.com/lite-xl/lite-xl-colors/master/previews/" +
              addon.id +
              ".svg"
            }
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {addon.id}
            </h5>
            <div className="flex" style={{ gap: "1rem" }}>
              <Badge
                color="blue"
                className="flex w-24 text-center items-center justify-center"
              >
                Version: {addon.version}
              </Badge>
              <Badge
                color="dark"
                className="flex w-32 text-center items-center justify-center"
              >
                Theme type: {addon.tags[0]}
              </Badge>
            </div>
            <Link
              href={"/themes/" + addon.id}
              className="font-semibold inline-flex items-center px-3 py-2 text-sm w-fit text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Plugin
              <FaArrowUpRightFromSquare className="mr-2 ml-2 h-4 w-4" />
            </Link>
          </Card>
        )
      )}
    </div>
  );
  return (
    <div className="bg-white dark:bg-gray-900">
      <h1 className="text-center text-5xl font-extrabold dark:text-white p-10">
        Browse themes
      </h1>
      <div className="flex justify-center w-full">
        <FloatingLabel
          id="default-search"
          onInput={on_search}
          variant="outlined"
          label="Click here to browse"
        />
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
