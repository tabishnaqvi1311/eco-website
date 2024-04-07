import CardWrapper from "@/components/cardwrapper/cardwrapper";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);

    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://eco-backend-production-8c5d.up.railway.app/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })
            const json = await response.json();
            if (response.ok) {
                const { email, _id } = json;
                localStorage.setItem("email", email);
                localStorage.setItem("id", _id);
                window.location.href = "/dashboard";
            }
            else setError(json);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const id = localStorage.getItem("id");
        if(id) navigate("/dashboard")
    }, [])

    return (
        <div className="h-[80vh] flex items-center justify-center">

            <CardWrapper
                headerLabel={"Register"}
                backButtonLabel={"Have an account?"}
                backButtonHref={"/login"}
            >
                <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="formInput" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="formInput" />
                    {error &&    
                        <div className="bg-red-100 border-red-400 border p-1 text-red-400 text-center rounded-lg">
                            {error}
                        </div>
                    }

                    <Button onClick={handleRegister}>
                        Submit
                    </Button>
                </form>

            </CardWrapper>
        </div>
    )
}