import styles from "./header.module.css";
import { MagnifyingGlass, Heart, User, ShoppingBag } from "@phosphor-icons/react";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                {/* Logo & Marca com animação no hover */}
                <Link href="/" className={styles.logoLink} aria-label="Rise Sousa Beauty">
                    <div className={styles.logoBadge}>
                        <img
                            src="/logo.svg"
                            alt="Rise Sousa Beauty"
                            className={styles.logoImg}
                        />
                        <span className={styles.logoText}>Rise Sousa Beauty</span>
                    </div>
                </Link>

                {/* Categorias de navegação */}
                <nav className={styles.navMenu}>
                    <Link href="/products" className={styles.navLink}>
                        Maquiagem
                    </Link>
                    <Link href="/products" className={styles.navLink}>
                        Cuidado com a Pele
                    </Link>
                    <Link href="/products" className={styles.navLink}>
                        Perfumes
                    </Link>
                    <Link href="/products" className={styles.navLink}>
                        Acessórios
                    </Link>
                </nav>

                {/* Barra de Pesquisa */}
                <div className={styles.searchBox}>
                    <MagnifyingGlass className={styles.searchIcon} size={18} weight="regular" />
                    <input
                        className={styles.searchInput}
                        type="text"
                        placeholder="Buscar produtos..."
                    />
                </div>

                {/* Ações / Ícones à direita */}
                <div className={styles.actions}>
                    <button className={styles.actionBtn} aria-label="Favoritos" type="button">
                        <Heart size={20} weight="regular" />
                    </button>
                    <button className={styles.actionBtn} aria-label="Minha Conta" type="button">
                        <User size={20} weight="regular" />
                    </button>
                    <button className={styles.actionBtn} aria-label="Carrinho de Compras" type="button">
                        <ShoppingBag size={20} weight="regular" />
                        <span className={styles.badge}>2</span>
                    </button>
                    <div className={styles.discountBadge}>
                        <span>80%</span>
                    </div>
                </div>
            </div>
        </header>
    );
}