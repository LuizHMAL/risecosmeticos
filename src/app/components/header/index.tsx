import Image from "next/image";
import styles from "./header.module.css";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                className={styles.logo}
                src="/logo.svg"
                alt="logo"
                width={200}
                height={120}
            />

            <div className={styles.searchBox}>
                <MagnifyingGlass className={styles.icon} size={18} />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Search for products..."
                />
            </div>
        </header>
    );
}