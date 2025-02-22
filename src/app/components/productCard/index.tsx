import styles from './productCard.module.css';
type Props = {
    name: string,
    description: string
    image: string
}
export function ProductCard(props: Props){
    const name = props.name;
    const image = props.image;
    const description = props.description;
    return(
        <>
      
        <div className={styles.productCard}>
        <img src = {props.image} />
        <h1>{name}</h1>
        <p className={styles.description}>{description}</p>
        </div>
        </>
    )
}