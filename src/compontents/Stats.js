export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list ✈</em>
      </p>
    );
  const numItems = items.length;
  const itemsPacked = Math.round(
    (items.filter((item) => item.packed).length / numItems) * 100
  );
  return (
    <footer className="stats">
      <em>
        {itemsPacked === 100
          ? `You have everything packed 🛴`
          : ` You have ${numItems} items on your list and you already packed
          ${itemsPacked}%`}
      </em>
    </footer>
  );
}
