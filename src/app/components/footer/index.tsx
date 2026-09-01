import styles from "./footer.module.css";
import { InstagramLogo, FacebookLogo, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Coluna 1: Marca & Redes */}
                    <div className={styles.col}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                            <img src="/logo.svg" alt="Rise Sousa Beauty" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
                            <h3 className={styles.brandTitle} style={{ margin: 0 }}>Rise Sousa Beauty</h3>
                        </div>
                        <p className={styles.brandDescription}>
                            Sua beleza é nossa paixão. Oferecemos os melhores produtos de cosméticos com qualidade e elegância para realçar sua beleza natural.
                        </p>
                        <div className={styles.socialIcons}>
                            <a href="#instagram" className={styles.socialLink} aria-label="Instagram">
                                <InstagramLogo size={20} weight="regular" />
                            </a>
                            <a href="#facebook" className={styles.socialLink} aria-label="Facebook">
                                <FacebookLogo size={20} weight="regular" />
                            </a>
                            <a href="#whatsapp" className={styles.socialLink} aria-label="WhatsApp">
                                <WhatsappLogo size={20} weight="regular" />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Links Úteis */}
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Links Úteis</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/sobre">Sobre Nós</Link></li>
                            <li><Link href="/privacidade">Política de Privacidade</Link></li>
                            <li><Link href="/trocas">Trocas e Devoluções</Link></li>
                            <li><Link href="/termos">Termos de Uso</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Atendimento */}
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Atendimento</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/ajuda">Central de Ajuda</Link></li>
                            <li><Link href="/contato">Fale Conosco</Link></li>
                            <li><Link href="/rastreio">Rastrear Pedido</Link></li>
                            <li><Link href="/fidelidade">Programa de Fidelidade</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 4: Newsletter */}
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Newsletter</h4>
                        <p className={styles.newsletterText}>
                            Receba novidades, promoções exclusivas e dicas de beleza.
                        </p>
                        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className={styles.emailInput}
                                required
                            />
                            <button type="submit" className={styles.subscribeBtn}>
                                Inscrever-se
                            </button>
                        </form>
                    </div>
                </div>

                {/* Linha de Copyright */}
                <div className={styles.bottomBar}>
                    <p>© 2024 Rise Sousa Beauty. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
