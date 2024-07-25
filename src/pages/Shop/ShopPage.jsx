import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";

export default function ShopPage() {

    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [showProduct, setShowProducts] = useState(false);

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
        setSelectProduct(allItem);
        setShowProducts(true);
    }


    useEffect(() => {
        async function getAllProducts() {
            if (selectProduct) {
                const response = await fetch(`https://products-add7d-default-rtdb.europe-west1.firebasedatabase.app/${selectProduct}/.json`, {
                    method: "GET"
                });
                const data = await response.json();
                setProducts(data);
            }
        }
        getAllProducts()
    }, [selectProduct]);

    return (
        <Layout>
            <div className="flex gap-3 flex-wrap">
                <select onChange={(e) => filterProducts(e.target.value)}>
                    <option>Category</option>
                    {
                        category
                            .filter((filterItem) => !["Category"].includes(filterItem))
                            .map((allItem, index) => (
                                <option
                                    key={index}
                                    className="border bg-black text-white px-2 py-2 mt-5"
                                    value={allItem}
                                >
                                    {allItem}
                                </option>
                            ))
                    }
                </select>
            </div>

            {showProduct ?
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
                :
                <section className="text-gray-600 body-font">
                    <div className="container px-5 mx-auto">
                        <div className="flex gap-4">
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-contain w-48 h-48 block"
                                        src="https://ardes.bg/uploads/original/asus-rog-strix-gt15-g15cf-432084.jpg"
                                    />
                                </a>
                                <div className="mt-4 ml-7">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Computers</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Asus Rog Strix</h2>
                                    <p className="mt-1">$2099</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-contain w-48 h-48 block"
                                        src="https://www.lg.com/content/dam/channel/wcms/uk/images/tvs/LF580V/gallery/medium01.jpg"
                                    />
                                </a>
                                <div className="mt-4 ml-7">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">TV</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">LG</h2>
                                    <p className="mt-1">$769</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-contain w-48 h-48 block"
                                        src="https://p.jarcomputers.com/1000x1000/99/NBASUS90NB11R1M00KY0_1000x1000.jpg"
                                    />
                                </a>
                                <div className="mt-4 ml-7">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Laptops</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Asus Zenbook</h2>
                                    <p className="mt-1">$999</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-contain w-48 h-48 block"
                                        src="https://econtent.o2.co.uk/o/econtent/media/get/9f12d426-cdc0-48e7-9dfe-9fe91ab7e675"
                                    />
                                </a>
                                <div className="mt-4 ml-7">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Phones</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Iphone 15 Pro</h2>
                                    <p className="mt-1">$2499</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </Layout>
    );
}