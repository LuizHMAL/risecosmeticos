import styles from './productCard.module.css';
type Props = {
    id?: number,
    name: string,
    price?: number,
    stock?: number,
    image: string
}
export function ProductCard(props: Props){
    const name = props.name;
    const image = props.image;
    return(
        <>
      
        <div className={styles.productCard}>
        <img src = {props.image} />
        <h1>{name}</h1>
        </div>
        </>
    )
}