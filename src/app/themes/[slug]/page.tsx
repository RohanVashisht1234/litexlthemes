import { redirect } from "next/navigation";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SiLua} from "react-icons/si";
import { FaCheck } from "react-icons/fa";
import Script from 'next/script';
import { Toast, ToastToggle} from "flowbite-react";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData();
  var correct_addon: string = "404";
  var addon_data = { id: "", version: "", path: "", remote: "" };
  data.addons.forEach(
    (addon: { id: string; path: string; remote: string; version: string }) => {
      if (addon.id === params.slug) {
        correct_addon = addon.id;
        addon_data = addon;
      }
    }
  );
  if (correct_addon === "404") {
    redirect("/PLUGIN_NOT_FOUND");
  }
  const url =
    "https://raw.githubusercontent.com/RohanVashisht1234/litexlthemes/main/colors/" +
    addon_data.id +
    ".lua";
  var codeString = "";
  await fetch(url)
    .then((response) => {
      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the JSON data in the response
      return response.text();
    })
    .then((source_code) => {
      codeString = source_code;
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("There was a problem with the fetch operation:", error);
    });
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
      <Toast id="my_toast" className="flex absolute hidden">
        <div className="flex items-center">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <FaCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Coppied to Clipboard</div>
          <ToastToggle />
          </div>
        </Toast>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white capitalize">
              {correct_addon}
            </h1>
            <div className="w-full max-w-[16rem] mb-5">
              <div className="relative">
                <label htmlFor="copy-text" className="sr-only">Label</label>
                <input id="copy-text" type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={"lpm install " + addon_data.id} disabled={false} readOnly={false} />
                <button id="copy-button" className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
                  <span id="default-message" className="inline-flex items-center">
                    <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                      <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                    </svg>
                    <span className="text-xs font-semibold">Copy</span>
                  </span>
                  <span id="success-message" className="hidden inline-flex items-center">
                    <svg className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
              <a
                href={
                  addon_data.path
                    ? "https://github.com/lite-xl/lite-xl-colors/tree/master/" +
                    addon_data.path
                    : addon_data.remote.split(":")[1].replace(".git", "")
                }
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                View source code
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
              <button
                 id="download_lua_file"
                className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Download Source code
              </button>
            </div>
          </div>
          <div>
            <Image
              alt={correct_addon}
              width={100}
              height={100}
              className="mx-auto w-auto lg:max-w-xl h-36 sm:h-80 bg-black"
              style={{ boxShadow: "10px 10px 10px black" }}
              src={
                "https://raw.githubusercontent.com/RohanVashisht1234/litexlthemes/main/parsers/images/" +
                correct_addon +
                ".svg"
              }
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="block">
            <div className="flex space-x-2">
              <h4 className="flex bg-[#2b2b2b] p-4 w-fit rounded"><SiLua className="h-6 w-6 mr-1" /><span id="get_filename_from_here">{correct_addon}.lua</span></h4>
              <button id="copy_lua_file" className="capitalize bg-[#2b2b2b] p-4 w-fit rounded">Copy to clipboard</button>
            </div>
            <SyntaxHighlighter language="lua" className="relative w-full max-w-4xl mx-auto rounded-3xl dark:border-gray-700 yt-video" style={a11yDark}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
        <div id="get_data_from_here" className="hidden">{codeString}</div>
      </section>
      <Script strategy="lazyOnload" src="/copy_to_clipboard.js"></Script>
    </>
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
