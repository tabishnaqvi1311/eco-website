export default function RewardCard({
    name,img, cashback, points_req

}) {
    return (
        <div className="reward-card">
            <div className="reward-img">
                <img src={img} alt="" />
            </div>
            <div className="reward-desc">
                <div>
                    <h2>{name}</h2>
                    <h5>Upto {cashback} cashback</h5>
                    <p>{points_req} Points</p>
                </div>
            </div>
            <div className="reward-redeem">
                <button>Redeem</button>
            </div>
        </div>
    )
}