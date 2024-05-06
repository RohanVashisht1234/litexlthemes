"use client";
import Image from "next/image";
import { Key } from "react";
import Link from "next/link";
import { Badge, Card, FloatingLabel } from "flowbite-react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ReactDOM from "react-dom/client";

var global_data: any | null = null;
var compiled_data = <></>;

function on_search() {
    var data = global_data;
    let x = document.getElementById("content") as HTMLElement;
    let search_box = document.getElementById("default-search") as HTMLInputElement;
    let search_box_contents = search_box.value;
    compiled_data = <></>;
    const root = ReactDOM.createRoot(document.getElementById('content'));
    for (let i = 0; i < data.addons.length; i++) {
        if (data.addons[i].id.includes(search_box_contents)) {
            var addon = data.addons[i];
            compiled_data = (
                <>
                {compiled_data}
                <Card
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
                </>
            );
        }
    }
    root.render(compiled_data);

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

