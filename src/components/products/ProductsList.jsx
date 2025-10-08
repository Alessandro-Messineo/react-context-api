import { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";

export default function ProductsList() {

    const [products, setProducts] = useState([]);

    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="container-card">
            {products.map((product, index) => (
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