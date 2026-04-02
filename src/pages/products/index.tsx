import { ProductCard } from "@/app/components";
import Header from "@/app/components/header";
import { useRouter } from "next/router";
import styles from "./home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

type Product = {
    id: number;
    name: string;
    image: string;
};

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export default function Products() {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    try {
        const response = await api.get("/products?page=1&size=6");

        console.log("DATA:", response.data);

        const mapped = response.data.data.map((p: any) => ({
            id: p.id,
            name: p.name,
            description: p.description ?? "Sem descrição",
            image: "https://via.placeholder.com/150"
        }));

        setProducts(mapped);

    } catch (error) {
        console.error("Erro:", error);
    }
}

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Products</h1>

            <button onClick={() => router.back()}>
                Voltar
            </button>

            <div className={styles.productCardList}>
                {products.map((p) => (
                    <ProductCard
                        key={p.id}
                        name={p.name}
                        image={p.image}
                    />
                ))}
            </div>
        </>
    );
}