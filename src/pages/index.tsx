import Header from "@/app/components/header";
import { Carrousel } from "@/app/components/carrousel";
import { ProductsSection } from "./products";
import Footer from "@/app/components/footer";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Rise Sousa Beauty - Sua beleza em primeiro lugar</title>
                <meta name="description" content="Descubra os melhores cosméticos, maquiagens e produtos de beleza na Rise Sousa Beauty." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                {/* Cabeçalho com logo animada e navegação */}
                <Header />

                <main style={{ flex: 1 }}>
                    {/* Banner Hero com Linha Vegana */}
                    <Carrousel />

                    {/* Seção de Produtos em Destaque */}
                    <ProductsSection />
                </main>

                {/* Rodapé com Newsletter e Links */}
                <Footer />
            </div>
        </>
    );
}