import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";

export default function ShopPage() {

    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        async function showProduct() {
            const response = await fetch('https://dummyjson.com/products/category-list', {
                method: "GET"
            });

            const data = await response.json();

            setAllProduct(data);
        }
        showProduct();
    }, []);
    return (
        <Layout>
            <div>
                <ul>
                    <li>{allProduct}</li>
                </ul>
            </div>
        </Layout>
    );
}