import Step1 from '@/assets/landing/step1.png';
import Step2 from '@/assets/landing/step2.png';
import Step3 from '@/assets/landing/step3.png';
import Alexa from '@/assets/landing/alexa.png';
import Fan from '@/assets/landing/fan.png';
import Lamp from '@/assets/landing/lamp.png';
import Phone from '@/assets/landing/phone.png';
import TV from '@/assets/landing/tv.png';
import Landing from '@/assets/landing/landing.png';

export default function Home() {
    return (
        <main>
            <div className="home flex flex-row items-center align-between py-20">
                <div className="home-text">
                    <h1 className="font-bold text-5xl">Connect. <span className="text-green-600">Track.</span> Redeem.</h1>
                    <p>Transforming Household Habits for a  Sustainable Tomorrow</p>
                </div>
                <div className="home-img">
                    <img src={Landing} />
                </div>
            </div>
            <div className="steps">
                <h1>3 Easy Steps</h1>
                <p>Get started in 3 easy steps</p>
                <div className="flex items-center justify-around step-container">
                    <div className="step">
                        <img src={Step1} alt="" />
                        <h3>Connect</h3>
                    </div>
                    <div className="step">
                        <img src={Step2} alt="" />
                        <h3>Track</h3>
                    </div>
                    <div className="step">
                        <img src={Step3} alt="" />
                        <h3>Redeem</h3>
                    </div>
                </div>
            </div>
            <div className="Devices">
                <h1>Devices</h1>
                <p>Track your energy devices and its carbon footprint. Connect using a bluetooth or a Wifi connection.</p>
                <div className='Device-container'>
                    <div className="Device">
                        <img src={Alexa} alt="" />
                        <h2>Alexa</h2>
                    </div>
                    <div className="Device">
                        <img src={Fan} alt="" />
                        <h2>Smart Fan</h2>
                    </div>
                    <div className="Device">
                        <img src={Lamp} alt="" />
                        <h2>Smart Lamp</h2>
                    </div>
                    <div className="Device">
                        <img src={TV} alt="" />
                        <h2>Internet TV</h2>
                    </div>
                    <div className="Device">
                        <img src={Phone} alt="" />
                        <h2>Smartphone</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}