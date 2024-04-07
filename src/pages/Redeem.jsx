import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "@/assets/main.png";
import RewardCard from "@/components/reward-card/reward-card";
import Amazon from "@/assets/rewards/amazon.png";
import Gucci from "@/assets/rewards/gucci.png";
import Bookmyshow from "@/assets/rewards/bookmyshow.png";
import Gourment from "@/assets/rewards/gourment.png";

export default function Redeem() {

    const navigate = useNavigate();

    useEffect(() => {
        const id = localStorage.getItem("id");
        if (!id) navigate("/login")
    }, []);

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
            <div className="flex md:flex-row flex-wrap flex-col gap-10 py-10">
                <RewardCard name={"Amazon"} img={Amazon} cashback={"500"} points_req={"200"}/>
                <RewardCard name={"BookMyShow"} img={Bookmyshow} cashback={"200"} points_req={"100"}/>
                <RewardCard name={"Gucci"} img={Gucci} cashback={"1000"} points_req={"400"}/>
                <RewardCard name={"Gourment"} img={Gourment} cashback={"500"} points_req={"200"}/>
            </div>
        </main>
    )
}