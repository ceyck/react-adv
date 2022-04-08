import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
	title?: string;
	className?: any;
	activeClass?: string;
	style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
	const { product } = useContext(productContext);

	return (
		<span className={`${styles.description} ${className}`} style={style}>
			{title ? title : product.title}
		</span>
	);
};
