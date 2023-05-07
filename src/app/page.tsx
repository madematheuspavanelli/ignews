import { Woman } from "@/components/assets/icons/woman";
import { SubscribeButton } from "@/components/widgets/atoms/SubscribeButton";
import { stripe } from "@/libs/stripe";

export default async function Home() {
  const price = await stripe.prices.retrieve("price_1N5BNFDJjN5SJyQZ0N3GoRZp");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
  };

  return (
    <div className="container max-w-screen-lg px-5 mx-auto h-[calc(100vh-5rem)]  flex justify-between items-center">
      <div className="text-ignews-gray-title">
        <p className="font-bold text-2xl mb-10">Hey, welcome!</p>
        <h1 className="font-bold text-7xl mb-6">
          News about
          <br /> the <span className="text-ignews-blue">React</span> world
        </h1>
        <p className="text-2xl mb-10">
          Get acess to all the publications
          <br />
          <span className="text-ignews-blue font-bold">
            for {product.amount} month
          </span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </div>
      <Woman />
    </div>
  );
}
