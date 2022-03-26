import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css'


export const ProductTitle = ({ title }: { title?: string }) => {

  const { product } = useContext(productContext);

  return (
    <span className={styles.description}>{ title ? title : product.title }</span>
  )
}