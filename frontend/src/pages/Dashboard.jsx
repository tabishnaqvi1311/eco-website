import DeviceCard from "@/components/device-card/device-card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "@/assets/main.png";
import TV from "@/assets/devices/Tv.png";
import Laptop from "@/assets/devices/laptop.png";
import Phone from "@/assets/devices/phone.png"
import AC from "@/assets/devices/Ac.png"


export default function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {
        const id = localStorage.getItem("id");
        if (!id) navigate("/login")
    }, [])


    return (
        <main className="p-10">
            <div className="home-container">
                <div>
                    <h1 className="text-6xl">Welcome Home <br />
                        <span className="font-semibold">{localStorage.getItem("email").split("@")[0]}</span><br />
                    </h1>
                    <span className="text-xl"><br />Welcome To Your Smart Home</span>
                </div>
                <div className="main-img">
                    <img src={Main} alt="Main"/>
                </div>
            </div>
            <div className="devices flex md:flex-row flex-col gap-10 py-10 w-full justify-around">
                <DeviceCard img={TV} name={"Smart TV"}/>
                <DeviceCard img={Laptop} name={"Smart Laptop"}/>
                <DeviceCard img={Phone} name={"Smart Phone"}/>
                <DeviceCard img={AC} name={"Smart AC"}/>
            </div>
        </main>
    )
}