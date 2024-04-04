import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [isAuth, setIsAuth] = useState(false);

    const logout = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("email");
        window.location.href = "/login";
    }

    useEffect(() => {
        const id = localStorage.getItem("id");
        if (id) setIsAuth(true);
    }, [])

    return (
        <header className="flex justify-around items-center py-5 border-b ">
            <Link to={"/"} className="text-2xl font-bold">nameless</Link>
            {isAuth &&
                <nav className="flex gap-10">
                    <Link to={"/dashboard"} className="hover:underline">Home</Link>
                    <Link to={"/redeem"} className="hover:underline">Redeem</Link>
                    <Link to={"/profile"} className="hover:underline">Profile</Link>
                </nav>
            }
            <div className="flex items-center gap-7">
                {
                    isAuth ?
                        <Button onClick={logout}>
                            Logout
                        </Button>
                        :
                        <>
                            <Button asChild>
                                <Link to={"/login"}>Login</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link to={"/register"}>Register</Link>
                            </Button>
                        </>
                }
            </div>
        </header>
    )
}