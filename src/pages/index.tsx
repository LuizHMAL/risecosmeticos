import Link from "next/link";
import Header from "@/app/components/header";
export default function Home(){
    return(
        <>
            <Header />
            <h1>Home</h1>
            <Link href = "/products">Produtos</Link> 
        </>
    )
}