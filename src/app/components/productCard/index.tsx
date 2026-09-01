import { useState } from "react";
import styles from "./productCard.module.css";
import { Heart, ShoppingBag } from "@phosphor-icons/react";

export type ProductCardProps = {
    id?: number;
    name: string;
    price?: number;
    oldPrice?: number;
    badge?: string;
    image: string;
    onAddToCart?: (id?: number) => void;
    onFavorite?: (id?: number) => void;
};

export function ProductCard({
    id,
    name,
    price = 89.90,
    oldPrice,
    badge,
    image,
    onAddToCart,
    onFavorite,
}: ProductCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
        if (onFavorite) onFavorite(id);
    };

    const handleAddClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onAddToCart) onAddToCart(id);
    };

    const formatPrice = (val: number) => {
        return val.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    return (
        <div className={styles.productCard}>
            {/* Área da imagem com Badge e Favorito */}
            <div className={styles.imageWrapper}>
                <img src={image} alt={name} className={styles.image} />

                {badge && (
                    <span className={`${styles.badge} ${styles[`badge_${badge.toLowerCase()}`] || ""}`}>
                        {badge}
                    </span>
                )}

                <button
                    className={`${styles.favoriteBtn} ${isFavorite ? styles.favorited : ""}`}
                    onClick={handleFavoriteClick}
                    aria-label="Adicionar aos favoritos"
                >
                    <Heart
                        size={16}
                        weight={isFavorite ? "fill" : "regular"}
                        color={isFavorite ? "#ef4444" : "#4b5563"}
                    />
                </button>
            </div>

            {/* Corpo do card */}
            <div className={styles.content}>
                <h3 className={styles.title} title={name}>
                    {name}
                </h3>

                <div className={styles.priceRow}>
                    <span className={styles.price}>{formatPrice(price)}</span>
                    {oldPrice && oldPrice > price && (
                        <span className={styles.oldPrice}>{formatPrice(oldPrice)}</span>
                    )}
                </div>

                <button className={styles.addToCartBtn} onClick={handleAddClick}>
                    <ShoppingBag size={18} weight="regular" />
                    <span>Adicionar ao Carrinho</span>
                </button>
            </div>
        </div>
    );
}