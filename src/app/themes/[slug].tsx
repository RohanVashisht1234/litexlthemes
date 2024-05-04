import { useRouter } from "next/router";

export default function Page() {
  const data = getData();
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
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
