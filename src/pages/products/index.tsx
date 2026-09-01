import { ProductCard } from "@/app/components";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import styles from "./home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export type Product = {
    id: number;
    name: string;
    price?: number;
    oldPrice?: number;
    badge?: string;
    image: string;
};

const api = axios.create({
    baseURL: "http://localhost:8000/",
});

export const fallbackProducts: Product[] = [
    {
        id: 1,
        name: "Base Líquida HD",
        price: 89.90,
        oldPrice: 119.90,
        badge: "Bestseller",
        image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        name: "Paleta de Sombras Nude",
        price: 149.90,
        badge: "Novo",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        name: "Batom Matte Longa Duração",
        price: 39.90,
        oldPrice: 49.90,
        badge: "Promoção",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        name: "Sérum Vitamina C",
        price: 79.90,
        badge: "Vegano",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 5,
        name: "Perfume Floral Feminino",
        price: 199.90,
        badge: "Exclusivo",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 6,
        name: "Kit Pincéis Profissionais",
        price: 129.90,
        oldPrice: 159.90,
        badge: "Kit",
        image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&auto=format&fit=crop&q=80"
    },
];

interface ProductsProps {
    standalone?: boolean;
}

export function ProductsSection() {
    const [products, setProducts] = useState<Product[]>(fallbackProducts);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    async function fetchProducts() {
        try {
            // Nota: adicionando a barra final para compatibilidade com FastAPI
            const response = await api.get("/products/?page=1&size=6");

            if (response.data && response.data.data && response.data.data.length > 0) {
                const mapped: Product[] = response.data.data.map((p: any, idx: number) => {
                    const fallback = fallbackProducts[idx % fallbackProducts.length];
                    return {
                        id: p.id,
                        name: p.name,
                        price: p.price ?? fallback.price,
                        oldPrice: fallback.oldPrice,
                        badge: fallback.badge,
                        image: p.image || fallback.image,
                    };
                });
                setProducts(mapped);
            }
        } catch (error) {
            console.warn("API offline ou inacessível no momento, exibindo produtos de demonstração.");
            setProducts(fallbackProducts);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section id="destaques" className={styles.section}>
            <div className={styles.container}>
                {/* Cabeçalho da Seção */}
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Produtos em Destaque</h2>
                    <p className={styles.sectionSubtitle}>
                        Descubra nossa seleção especial de produtos de beleza mais amados pelas nossas clientes
                    </p>
                </div>

                {/* Grid de Cards */}
                <div className={styles.productGrid}>
                    {products.map((p) => (
                        <ProductCard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            price={p.price}
                            oldPrice={p.oldPrice}
                            badge={p.badge}
                            image={p.image}
                        />
                    ))}
                </div>

                {/* Botão Ver Todos os Produtos */}
                <div className={styles.actionWrapper}>
                    <Link href="/products" className={styles.viewAllBtn}>
                        Ver Todos os Produtos
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function ProductsPage() {
    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.mainContent}>
                <ProductsSection />
            </main>
            <Footer />
        </div>
    );
}