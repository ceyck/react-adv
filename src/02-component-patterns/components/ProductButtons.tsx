import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
	className?: string;
	style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
	const { increaseBy, counter } = useContext(productContext);

	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				{" "}
				-{" "}
			</button>
			<div className={styles.countLabel}> {counter} </div>
			<button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
				{" "}
				+{" "}
			</button>
		</div>
	);
};
