import { FaLinkedin, FaG } from "react-icons/fa6";

export default function Footer(){
    return (
        <footer className="bg-black border-2 border-green-300 text-yellow font-bold p-1 w-full fixed bottom-0">
            <div className="flex justify-center items-center">
                <p>&copy; 2024 MAH TECK. All rights reserved.</p>
                <a href="http://mahteck.com" target="_blank">
                <FaLinkedin size={24} className="hover:text-blue-700 p-1"></FaLinkedin>
                </a>
                <a href="https://shoaib1244@gmail.com" target="_blank">
                <FaG size={24} className="hover:text-blue-700 p-1"/></a>
            </div>
        </footer>
    );
}