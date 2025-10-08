import { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
import { useBudgetMode } from "../../context/BudgetContext";

export default function ProductsList() {

    const [products, setProducts] = useState([]);

    const { budgetMode } = useBudgetMode();

    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchProducts()
    }, [])

     const filteredProducts = (budgetMode
        ? products.filter(product => product.price <= 30)
        : products);

    return (
        <div className="container-card">
            {filteredProducts.map((product, index) => (
                <ProductsCard 
                key={index}
                // image = {product.image}
                // title = {product.title}
                // price = {product.price}
                // id = {product.id}
                product = {product}
                 />
            ))}
        </div>
    )
}