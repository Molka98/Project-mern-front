import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../JS/Actions/product";
import ProductCard from "./ProductCard";

const ProductList = () => {
	const dispatch = useDispatch();
	const listProducts = useSelector(
		(state) => state.productReducer.listProducts
	);
	const load = useSelector((state) => state.productReducer.load);
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div>
			{load ? (
				<h2>Lodinggg ...</h2>
			) : (
				listProducts.map((el) => <ProductCard product={el} key={el.id} />)
			)}
		</div>
	);
};

export default ProductList;