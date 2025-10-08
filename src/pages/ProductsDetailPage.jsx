import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function ProductsDetailPage() {

    const { id } = useParams();
    const [products, setProducts] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) =>
                // {
                //     if (!res.data || !res.data.id) {
                //         navigate('/prodotti');
                //     } else {
                //         setProducts(res.data);
                //     }
                // }
                setProducts(res.data))
            .catch(() => { navigate('/prodotti') })
    }, [id, navigate])

    return (
        <>
            {products ?
                (
                    <>
                        <div className="products-detail-card">
                            <div className="products-image">
                                <img src={products.image} alt={products.title} />
                            </div>
                            <div className="products-info">
                                <h2>{products.title}</h2>
                                <p className="info">&euro;{products.price}</p>
                            </div>
                        </div>
                        <div className="return-products">
                            <Link to={`/prodotti`}>
                                <p>Torna ai Prodotti</p>
                            </Link>
                        </div>
                    </>
                )
                :
                (<p>caricamento...</p>)
            }
        </>
    )
}