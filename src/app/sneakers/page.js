import { Header } from "@/components/header";
import { Card } from "@/components/card";
import { Footer } from "@/components/footer";

const apiUrl =
  "https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json";

async function getData() {
  const res = await fetch(apiUrl);
  const products = await res.json();
  return products;
}

export default async function Sneakers() {
  const { sneakers } = await getData();
  return (
    <main>
      <Header />
      <h1 className="px-10 font-bold italic text-4xl py-5">Sneakers</h1>
      <div className="grid grid-cols-5 gap-5 px-10 pb-10">
        {sneakers.map((sneaker) => {
          return <Card key={sneaker.id} {...sneaker} />;
        })}
      </div>
      <Footer />
    </main>
  );
}
