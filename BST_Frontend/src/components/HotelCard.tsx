type Props = { name: string; price: string };

export default function HotelCard({ name, price }: Props) {
  return (
    <div className="hotel-card">
      <h4>{name}</h4>
      <p>{price}</p>
    </div>
  );
}
