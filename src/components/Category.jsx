export default function Category() {
  const categories = [
    "All",
    "Clothes",
    "Electronics",
    "Furniture",
    "Shoes",
    "Miscellaneous",
  ];

  return (
    <aside className="bg-zinc-900 rounded-2xl p-6">
      <h3 className="font-semibold mb-4">Categories</h3>
      <ul className="space-y-3 text-sm text-zinc-400">
        {categories.map((cat) => (
          <li
            key={cat}
            className="cursor-pointer hover:text-white"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}
