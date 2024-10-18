import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div>
            <Navbar/>
            <h1 className="flex justify-center item-center text-2xl font-bold text-conter m-1">About Us</h1>
            <p className="flex justify-center item-center m-2 text-black font-bold text-center">My name is Shoaib Munir.
                I am a web developer specializing in building responsive websites. 
                My expertise includes HTML, CSS, JavaScript, TypeScript, VB6, VB.Net, ASP.Net MVC, Flutter, and SQL Server. 
                You can reach me via email or through my social media accounts.</p>
        </div>
    )
}