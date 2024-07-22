export default function Gallery() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500">
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://akns-images.eonline.com/eol_images/Entire_Site/2022724/rs_1024x759-220824162803-1024-Ecomm--Overhead-Headphones.cm.82422.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top"
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://media.istockphoto.com/id/635790376/photo/computer-peripherals-laptop-accessories-composition-on-stone.jpg?s=612x612&w=0&k=20&c=EIu4Pmadacbq6Kk2iSezHUZFiCeLEGP5BhYjajTCSBU="
                                />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src="https://media.istockphoto.com/id/1441262328/photo/group-of-university-student-friends-sitting-together-using-mobile-phones-to-share-content-on.jpg?s=612x612&w=0&k=20&c=v2a1fBcoTkNO2oMjoSsZW5iLHYfXiAPwLqSNbfvxI7A="
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-x-3 transition duration-500">
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src="https://img.freepik.com/free-photo/medium-shot-queer-people-work_23-2150617691.jpg"
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://media.istockphoto.com/id/519331452/photo/multi-generation-family-watching-tv-at-home-back-view.jpg?s=612x612&w=0&k=20&c=_jDzvY60mf6-xePJON255i4gBtHkfVDHa5R-DwYP_Zc="
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://www.d-air-conditioning.co.uk/wp-content/uploads/2019/06/DA7-1200x675.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}