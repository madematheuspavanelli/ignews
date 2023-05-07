type Props = {
  priceId: string;
};

export function SubscribeButton({ priceId }: Props) {
  return (
    <button className="w-64 h-16 bg-ignews-yellow rounded-full font-bold text-xl text-ignews-gray-background hover:brightness-110 transition">
      Subscribe now
    </button>
  );
}
