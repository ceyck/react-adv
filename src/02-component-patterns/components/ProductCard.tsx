import { createContext } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import {
	productContextProps,
	Product,
	OnChangeArgs,
	InitialValues,
	ProductCardHandlers,
} from "../interfaces/interfaces";

export const productContext = createContext({} as productContextProps);

const { Provider } = productContext;

export interface Props {
	// children?: ReactElement | ReactElement[];
	children?: (args: ProductCardHandlers) => JSX.Element;
	product: Product;
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: OnChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
	initialValues,
}: Props) => {
	const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
		useProduct({
			onChange,
			product,
			value,
			initialValues,
		});

	return (
		<Provider value={{ counter, increaseBy, product, maxCount }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children
					? children({
							count: counter,
							isMaxCountReached,
							maxCount: initialValues?.maxCount,
							product,
							increaseBy,
							reset,
					  })
					: ""}
			</div>
		</Provider>
	);
};
