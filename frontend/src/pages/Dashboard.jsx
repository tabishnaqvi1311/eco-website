import DeviceCard from "@/components/device-card/device-card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {
        const id = localStorage.getItem("id");
        if (!id) navigate("/login")
    }, [])


    return (
        <main className="p-10">
            <div>
                <h1 className="text-3xl">Welcome Home <br />
                    <span className="font-semibold">{localStorage.getItem("email").split("@")[0]}</span>
                </h1>
                <span>Welcome To Your Smart Home</span>
            </div>
            <div className="flex md:flex-row flex-col gap-10 py-10">
                <DeviceCard name={"Smart Speaker"}/>
                <DeviceCard name={"Smart Lamp"}/>
                <DeviceCard name={"Smart TV"}/>
                <DeviceCard name={"Smart Fan"}/>
            </div>
        </main>
    )
}