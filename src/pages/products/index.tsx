import { ProductCard } from "@/app/components";
import { useRouter } from "next/router"
import styles from './home.module.css'

export default function Products(){
    const router = useRouter();
    function handleClick(){
        console.log("Button clicked")
        router.back();

    }
    return(
        <>
            <h1>Products</h1>
            <button onClick={handleClick}>Navegar de volta</button>

            <div className={styles.productCardList}>
            <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 01"/>
            <ProductCard 
                name = "Revista" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 02"/>
            <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 03"/>
            <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 04"/>
            <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 05"/>
            <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 06"/>
            <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 07"/>
                   <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 01"/>
            <ProductCard 
                name = "Revista" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 02"/>
            <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 03"/>
            <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 04"/>
            <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 05"/>
            <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 06"/>
            <ProductCard 
                name = "Perfume" image="https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg" description="Descrição 07"/>
            </div>
        </>
    )
}