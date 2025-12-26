import { useEffect, useState } from "react";

export default function Category({
  selected,
  onSelect
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        // prepend "All" manually
        setCategories([
          { id: "all", name: "All", slug: "all", image: null },
          ...data,
        ]);
      })
      .catch((err) => {
        console.error("Failed to load categories", err);
      });
  }, []);

  return (
    <aside className="bg-zinc-900 rounded-2xl p-6 w-72">
      <h3 className="font-semibold mb-4">Categories</h3>

      

      <ul className="space-y-4">
        {categories.map((cat) => (
          <li
            key={cat.id}
            onClick={() => onSelect(cat.slug)}
            className={`cursor-pointer rounded-xl p-2 transition ${
              selected === cat.slug
                ? "bg-zinc-800"
                : "hover:bg-zinc-800/60"
            }`}
          >
            {/* Image */}
            {cat.image && (
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-24 object-cover rounded-lg mb-2"
                loading="lazy"
              />
            )}

            {/* Name */}
            <p
              className={`text-sm text-center ${
                selected === cat.slug
                  ? "text-white font-semibold"
                  : "text-zinc-400"
              }`}
            >
              {cat.name}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
