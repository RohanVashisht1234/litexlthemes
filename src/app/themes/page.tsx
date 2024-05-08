"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Badge, Card, FloatingLabel } from "flowbite-react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Themes() {
  const [globalData, setGlobalData] = useState<any>(null);
  const [compiledData, setCompiledData] = useState<any>(null);

  async function fetchData() {
    const res = await fetch(
      "https://raw.githubusercontent.com/lite-xl/lite-xl-colors/master/manifest.json"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    setGlobalData(data);
    setCompiledData(
      <div
        id="content"
        className="flex flex-wrap justify-center"
        style={{ gap: "1rem" }}
      >
        {data.addons.map(
          (
            addon: { id: string; version: string | null; tags: Array<string> },
            index: number
          ) => (
            <Card
              key={index}
              className="min-w-64 sm:min-w-96"
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
                  Theme type:{" "}
                  <span className="capitalize">{addon.tags[0]}</span>
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
  }

  useEffect(() => {
    fetchData();
  }, []);

  function onSearch() {
    const searchBox = document.getElementById(
      "default-search"
    ) as HTMLInputElement;
    const searchBoxContents = searchBox.value.toLowerCase();
    const filteredData = globalData.addons.filter(
      (addon: { id: string; version: string | null; tags: Array<string> }) =>
        addon.id.toLowerCase().includes(searchBoxContents)
    );
    setCompiledData(
      <div
        id="content"
        className="flex flex-wrap justify-center"
        style={{ gap: "1rem" }}
      >
        {filteredData.map(
          (
            addon: { id: string; version: string | null; tags: Array<string> },
            index: number
          ) => (
            <Card
              key={index}
              className="min-w-64 sm:min-w-96"
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
                  Theme type:{" "}
                  <span className="capitalize">{addon.tags[0]}</span>
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
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <h1 className="text-center text-5xl font-extrabold dark:text-white p-10">
        Browse themes
      </h1>
      <div className="flex justify-center w-full">
        <FloatingLabel
          id="default-search"
          onInput={onSearch}
          className="mb-10"
          variant="outlined"
          label="Click here to browse"
        />
      </div>
      <div>{compiledData}</div>
    </div>
  );
}
