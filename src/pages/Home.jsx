import ProductCard from "../components/product/ProductCard";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import ProductSkeleton from "../components/TriangleLoader";
import SearchBar from "../components/SearchBar";


export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadProducts() {
            try {
                await new Promise((resolve) => setTimeout(resolve, 3000));
                const res = await fetch("https://api.escuelajs.co/api/v1/products");
                const data = await res.json();
                setProducts(data);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching products:", error);
            }

        }
        loadProducts();
    }, []);

    if (loading) return (

        <ProductSkeleton />
    );

    return (
        <div className="p-10 space-y-10">

            <SearchBar input />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 p-10">
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                    {products.map((item) => (
                        <ProductCard
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            category={item.category?.name}
                            image={item.images?.[0]}
                            description={item.description}
                        />
                    ))}
                </div>

                <Category />
            </div>
        </div>

    );


}
