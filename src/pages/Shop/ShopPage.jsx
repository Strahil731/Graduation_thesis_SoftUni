import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";

export default function ShopPage() {

    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);

    const [selectProduct, setSelectProduct] = useState("");

    useEffect(() => {
        async function getAllProductsCategory() {
            try {
                const response = await fetch("https://categories-3d4d8-default-rtdb.europe-west1.firebasedatabase.app/.json", {
                    method: "GET"
                });
                const data = await response.json();

                setCategory(data);
            } catch (error) {
                console.log(error);
            }
        }

        getAllProductsCategory()
    }, []);

    function filterProducts(allItem) {
        console.log(allItem);
    }


    useEffect(() => {
        async function getAllProducts() {
            const response = await fetch('https://products-add7d-default-rtdb.europe-west1.firebasedatabase.app/Phones/.json', {
                method: "GET"
            });
            const data = await response.json();
            setProducts(data);
        }
        getAllProducts()
    }, []);

    return (
        <Layout>
            <div className="flex gap-3 flex-wrap">
                {
                    category.map((allItem, index) => (
                        <div
                            className="border"
                            key={index}
                        >
                            <button
                                className="border bg-black text-white px-2 py-2 mt-5"
                                onClick={filterProducts(allItem)}
                            >
                                {allItem}
                            </button>
                        </div>
                    ))
                }
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div
                        className="flex gap-4"
                    >
                        {products.map((item, index) => (
                            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-contain w-48 h-48 block"
                                        src={item.image}
                                    />
                                </a>
                                <div className="mt-4 ml-7">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.categories}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                                    <p className="mt-1">${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}