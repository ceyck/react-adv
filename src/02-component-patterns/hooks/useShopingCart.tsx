import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	const onProductCountChange = ({
		count,
		product,
	}: {
		count: number;
		product: Product;
	}) => {
		setShoppingCart((oldShoppingCart) => {
			// console.log({ count });
			if (count === 0) {
				// delete oldShoppingCart[product.id]; como se me ocurrio a mi xd
				const { [product.id]: deleted, ...rest } = oldShoppingCart;
				return {
					...rest,
				};
			}
			return {
				...oldShoppingCart,
				[product.id]: {
					...product,
					count,
				},
			};
		});
	};

	return {
		onProductCountChange,
		shoppingCart,
	};
};
