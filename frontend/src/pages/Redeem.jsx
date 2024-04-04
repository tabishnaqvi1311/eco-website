import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Redeem() {

    const navigate = useNavigate();

    useEffect(() => {
        const id = localStorage.getItem("id");
        if (!id) navigate("/login")
    }, []);

    return (
        <main className="p-10">
            <div>
                <h1 className="text-3xl">Rewards For <br />
                    <span className="font-semibold">{localStorage.getItem("email").split("@")[0]}</span>
                </h1>
                <span>Claim your rewards here!</span>
            </div>
            <div className="flex md:flex-row flex-col gap-10 py-10">
            </div>
        </main>
    )
}