type Props = { type: string; price: string };

export default function TransportCard({ type, price }: Props) {
  return (
    <div className="transport-card">
      <h4>{type}</h4>
      <p>{price}</p>
    </div>
  );
}
