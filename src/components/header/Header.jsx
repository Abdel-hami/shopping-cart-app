import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="flex items-center justify-between h-20 py-4 mx-auto max-w-6xl ">
                    <Link to={"/"} >
                        <div className="ml-5">
                            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer">
                                React redux shopping cart
                            </h1>
                        </div>
                    </Link>
                    <div className="flex items-center space-x-6 text-gray-800 gap-4 font-semibold">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/cart"}>Cart</Link>
                    </div>
            </nav>
        </div>
    )
}
