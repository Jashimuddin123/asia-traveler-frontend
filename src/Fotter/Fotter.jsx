import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-900 text-white py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/5 mb-6">
                            <h2 className="text-yellow-400 text-xl font-bold">Asian Travelar</h2>
                            <p className="mt-4">Find Us On</p>
                            <div className="flex mt-4 space-x-4">
                                <a href="https://www.facebook.com"><FaFacebook  className="text-blue-600  rounded-full bg-white text-xl"/></a>
                                <a href="https://www.youtube.com"><IoLogoYoutube className="rounded-full bg-white  text-red-600 text-xl"/></a>
                                <a href="https://www.instagram.com"><FaInstagram className="text-red-600 text-xl"/></a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/5 mb-6">
                            <h3 className="text-lg font-bold mb-4">PRODUCT</h3>
                            <ul>
                                <li><a href="#" className="hover:underline">Features</a></li>
                                <li><a href="#" className="hover:underline">Integrations</a></li>
                                <li><a href="#" className="hover:underline">Pricing</a></li>
                                <li><a href="#" className="hover:underline">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5 mb-6">
                            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
                            <ul>
                                <li><a href="#" className="hover:underline">Privacy</a></li>
                                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5 mb-6">
                            <h3 className="text-lg font-bold mb-4">DEVELOPERS</h3>
                            <ul>
                                <li><a href="#" className="hover:underline">Public API</a></li>
                                <li><a href="#" className="hover:underline">Documentation</a></li>
                                <li><a href="#" className="hover:underline">Guides</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5 mb-6">
                            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
                            <p>76/A, Green Lane, Dhanmondi, NYC</p>
                            <p><a href="mailto:explore.asia1@gmail.com" className="hover:underline">adnanmahmud3394@gmail.com</a></p>
                            <p><a href="tel:+8801882888860" className="hover:underline">+01820339433</a></p>
                        </div>
                    </div>
                    <div className="border-t border-white mt-8 pt-6 text-center">
                        <p>&copy; 2024 Explore Asian Traveler. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
