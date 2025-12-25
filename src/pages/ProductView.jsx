import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react"; // Optional: for the back icon

export default function ProductView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-10 text-white">Loading...</p>;

  const images = product.images || [];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-sans">
      {/* Main Card Container */}
      <div className="bg-[#121212] w-full max-w-5xl rounded-[32px] p-8 md:p-12 relative shadow-2xl">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-8 right-8 flex items-center gap-1 text-zinc-400 border border-zinc-700 rounded-full px-4 py-1 hover:bg-zinc-800 transition-colors text-sm"
        >
          <ChevronLeft size={16} /> Back
        </button>

        <div className="flex flex-col md:flex-row gap-10 mt-8">
          
          {/* 1. Vertical Thumbnails Column */}
          <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all ${
                  index === activeIndex ? "border-violet-500 scale-105" : "border-transparent opacity-50"
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* 2. Main Image Section (Light Gray Box) */}
          <div className="flex-1 bg-[#d1d1d1] rounded-[32px] flex items-center justify-center p-8 order-1 md:order-2">
            <img
              src={images[activeIndex]}
              alt={product.title}
              className="max-h-[400px] w-full object-contain mix-blend-multiply" 
            />
          </div>

          {/* 3. Product Details Section */}
          <div className="flex-1 flex flex-col justify-center text-white order-3">
            <h1 className="text-4xl font-semibold mb-3 lowercase">{product.title}</h1>
            
            {/* Category Tag */}
            <div className="mb-8">
              <span className="bg-zinc-800 text-zinc-300 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-700">
                {product.category?.name || "Clothes"}
              </span>
            </div>

            <p className="text-zinc-500 text-lg mb-10 leading-relaxed lowercase">
              {product.description}
            </p>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-zinc-500 text-sm mb-1">Price</p>
                <p className="text-3xl font-bold">
                  $ {product.price?.toLocaleString()}
                </p>
              </div>

              <button className="bg-[#6344fd] hover:bg-[#5235e5] text-white px-8 py-3 rounded-2xl font-medium transition-all transform active:scale-95 shadow-lg shadow-violet-900/20">
                Add To Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}