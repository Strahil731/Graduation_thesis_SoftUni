import { FaGithub } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white">
                <div className="bg-black text-white">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-sm text-center sm:text-left">&copy; Strahil Dimitrov</p>
                        <p className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <span className="mr-2">
                                <FaGithub size={30} />
                            </span>
                            <span>
                                <IoLogoReact size={30} />
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}