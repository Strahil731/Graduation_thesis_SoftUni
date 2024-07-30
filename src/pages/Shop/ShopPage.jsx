import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";

export default function ShopPage() {

    const [allCategory, setAllCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectProducts, setSelectProducts] = useState("");

    useEffect(() => {
        async function getAllProductCategory() {
            try {
                const response = await fetch("https://categories-3d4d8-default-rtdb.europe-west1.firebasedatabase.app/.json", {
                    method: "GET"
                });
                const data = await response.json();

                setAllCategory(data);
            } catch (error) {
                console.log(error);
            }
        }

        getAllProductCategory();
    }, []);

    function filterProducts(allProducts) {
        setSelectProducts(allProducts);
    }

    useEffect(() => {
        async function getAllProduct() {
            try {
                if (selectProducts) {
                    const response = await fetch(`https://products-add7d-default-rtdb.europe-west1.firebasedatabase.app/${selectProducts}.json`, {
                        method: "GET"
                    });
                    const data = await response.json();
                    setProducts(data);
                }
            }
            catch (error) {
                console.log(error);
            }
        }

        getAllProduct();
    }, [selectProducts]);

    return (
        <>
            <Layout>
                <div className="h-screen">
                    <div className="flex gap-3 flex-wrap">
                        {allCategory.map((allProducts, index) => (
                            <div className="" key={index}>
                                <button className="border bg-black text-white px-2 py-2 mt-5 ml-2" onClick={() => filterProducts(allProducts)}>
                                    {allProducts}
                                </button>
                            </div>
                        ))}
                    </div>

                    {
                        selectProducts ?
                            <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex gap-4">
                                        {products.map((item, index) => (
                                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-4" key={index}>
                                                <a className="block relative h-48 rounded overflow-hidden">
                                                    <img
                                                        alt="image"
                                                        className="object-cover object-center w-full h-full block"
                                                        src={item.image}
                                                    />
                                                </a>
                                                <div className="mt-4">
                                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                                        {item.categories.toUpperCase()}
                                                    </h3>
                                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                                        Title: {item.name}
                                                    </h2>
                                                    <p className="mt-1">Price: ${item.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section> :
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex gap-4">
                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-4">
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img
                                                alt="image"
                                                className="object-cover object-center w-full h-full block"
                                                src="https://www.huaweicentral.com/wp-content/uploads/2021/08/huawei-p50-pro-design-6.jpg"
                                            />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                                PHONES
                                            </h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">
                                                Title: Huawei
                                            </h2>
                                            <p className="mt-1">Price: $499</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-4">
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img
                                                alt="image"
                                                className="object-cover object-center w-full h-full block"
                                                src="https://dlcdnwebimgs.asus.com/files/media/12B5E0C8-7771-4D54-9A6D-BD7F4E035C4E/v1/images/large/1x/design.jpg"
                                            />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                                COMPUTER
                                            </h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">
                                                Title: Asus Rog Strix
                                            </h2>
                                            <p className="mt-1">Price: $2099</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-4">
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img
                                                alt="image"
                                                className="object-cover object-center w-full h-full block"
                                                src="https://www.techadvisor.com/wp-content/uploads/2022/06/lenovo-yoga-slim-7-intel-14-review-main.jpg?resize=1024%2C576&quality=50&strip=all"
                                            />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                                COMPUTER
                                            </h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">
                                                Title: Lenovo Slim
                                            </h2>
                                            <p className="mt-1">Price: $1459</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-4">
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img
                                                alt="image"
                                                className="object-cover object-center w-full h-full block"
                                                src="https://i.rtings.com/assets/products/taZDjDLP/lg-uq7590-uq75-uq7570/design-medium.jpg?format=auto"
                                            />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                                TV
                                            </h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">
                                                Title: LG
                                            </h2>
                                            <p className="mt-1">Price: $769</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </Layout>
        </>
    );
}