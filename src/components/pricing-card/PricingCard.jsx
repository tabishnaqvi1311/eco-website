export default function PricingCard({
    price,
    title,
    info,
    features
}) {
    return (
        <div class="plan shadow-lg">
            <div class="inner shadow-md">
                <span class="pricing">
                    <span>
                        ${price} <small>/ m</small>
                    </span>
                </span>
                <p class="title">{title}</p>
                <p class="info">{info}</p>
                <ul class="features">
                    {features.map((f) => (
                        <li>
                            <span class="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>
                <div class="action">
                    <a class="button" href="#">
                        Choose plan
                    </a>
                </div>
            </div>
        </div>
    )
}