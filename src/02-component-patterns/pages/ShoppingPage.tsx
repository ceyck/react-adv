import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShopingCart";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {
	const { shoppingCart, onProductCountChange } = useShoppingCart();

	return (
		<div>
			<h1>Shopping store</h1>
			<hr />
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				{/* <ProductCard product={product} className="bg-dark text-white ">
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title className="text-bold" />
					<ProductCard.Buttons />
				</ProductCard> */}

				{products.map((product) => (
					<ProductCard
						product={product}
						className="bg-dark text-white "
						key={product.id}
						onChange={onProductCountChange}
						value={shoppingCart[product.id]?.count || 0}
					>
						<ProductImage
							className="custom-image"
							style={{ boxShadow: "10px 10px 10px rgba(0,0,0,.2)" }}
						/>
						<ProductTitle className="text-bold" />
						<ProductButtons className="custom-buttons" />
					</ProductCard>
				))}
			</div>

			<div className="shopping-cart">
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						product={product}
						className="bg-dark text-white "
						style={{ width: "100px" }}
						key={key}
						value={product.count}
						onChange={onProductCountChange}
					>
						<ProductImage
							className="custom-image"
							style={{ boxShadow: "10px 10px 10px rgba(0,0,0,.2)" }}
						/>
						<ProductButtons
							className="custom-buttons"
							style={{ display: "flex", justifyContent: "center" }}
						/>
					</ProductCard>
				))}
			</div>
			<div>
				<code>{JSON.stringify(shoppingCart, null, 5)}</code>
			</div>
		</div>
	);
};
