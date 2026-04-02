import Link from "next/link";
import Header from "@/app/components/header";
import { Carrousel } from "@/app/components/carrousel";
import Products from "./products";



export default function Home(){
    return(
        <>
            <Header />
            <Carrousel slides={[
                {
                    imagem: "https://via.placeholder.com/800x400?text=Slide+1",
                    titulo: "Slide 1",
                    descricao: "Descrição do slide 1"
                },
                {
                    imagem: "https://via.placeholder.com/800x400?text=Slide+2",
                    titulo: "Slide 2",
                    descricao: "Descrição do slide 2"
                }
            ]} />
            <Products />

            
            <h1>Home</h1>

            
            <Link href = "/products">Produtos</Link> 
        </>
    )
}