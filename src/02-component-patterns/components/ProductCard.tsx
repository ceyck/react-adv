import { createContext, ReactElement } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import {
	productContextProps,
	Product,
	OnChangeArgs,
} from "../interfaces/interfaces";

export const productContext = createContext({} as productContextProps);

const { Provider } = productContext;

export interface Props {
	children?: ReactElement | ReactElement[];
	product: Product;
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: OnChangeArgs) => void;
	value?: number;
}

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
}: Props) => {
	const { counter, increaseBy } = useProduct({ onChange, product, value });

	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};
