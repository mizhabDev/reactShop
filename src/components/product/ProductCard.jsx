import { useNavigate } from "react-router-dom";

export default function ProductCard({ id,title, price, image, category, description}) {
  const navigate = useNavigate();
  console.log(id)
  console.log(title)

  return (
    <div className="bg-zinc-900 p-4 rounded-2xl shadow cursor-pointer" onClick={() => navigate(`/product/${id}`)}>
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-xl mb-3"
      />

      <h3 className="font-semibold">{title}</h3>
      <p className="text-xs text-zinc-400 mb-3">{category}</p>
      <p>{description}</p>

      <div className="flex items-center justify-between">
        <span className="font-bold">$ {price}</span>
        <button className="px-4 py-2 bg-violet-600 rounded-lg text-sm hover:bg-violet-500">
          Add To Cart
        </button>
      </div>
    </div>
  );
}






