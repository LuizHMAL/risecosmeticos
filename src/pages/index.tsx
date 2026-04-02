import Link from "next/link";
import Header from "@/app/components/header";
import { Carrousel } from "@/app/components/carrousel";



export default function Home(){
    return(
        <>
            <Header />
            <Carrousel />
            <h1>Home</h1>
            <Link href = "/products">Produtos</Link> 
        </>
    )
}