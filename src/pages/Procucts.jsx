import ProductCard from "../components/product/ProductCard";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import TriangleLoader from "../components/TriangleLoader";
import { useSearchParams } from "react-router-dom";






export default function Procucts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();


    const category = searchParams.get("category") || "all";
    const search = searchParams.get("search") || "";




    useEffect(() => {
        async function loadProducts() {
            try {
                const url =
                    category === "all"
                        ? "https://api.escuelajs.co/api/v1/products"
                        : `https://api.escuelajs.co/api/v1/products/?categorySlug=${category}`;


                const res = await fetch(url);
                const data = await res.json();
                setProducts(data);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching products:", error);
            }

        }
        loadProducts();
    }, [category]);

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );


    if (loading) return (

        <TriangleLoader />
    );

    return (
        <div className="p-10 space-y-10">

            <SearchBar
                value={search}
                onChange={(e) => {
                    const value = e.target.value;

                    const params = new URLSearchParams(searchParams);

                    value
                        ? params.set("search", value)
                        : params.delete("search");

                    setSearchParams(params);
                }}
            />


            <div className="grid w-full grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8 p-10">

                {/* Products */}
                <div className="grid w-full gap-8 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map(item => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            category={item.category?.name}
                            image={item.images?.[0]}
                            description={item.description}
                        />
                    ))}
                </div>

                <Category
                    selected={category}
                    onSelect={(value) => {
                        const params = new URLSearchParams(searchParams);
                        value === "all"
                            ? params.delete("category")
                            : params.set("category", value);

                        setSearchParams(params);
                    }}
                />

            </div>
        </div>

    );


}
