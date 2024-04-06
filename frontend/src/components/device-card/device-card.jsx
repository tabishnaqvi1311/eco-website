export default function DeviceCard({
    name,img

}) {
    return (
        <div className="device-card border border-gray-500 p-5">
            <img src={img} />
            <div className="flex items-end gap-5 justify-between">
                <p className="font-medium text-lg">{name}</p>
                <label className="switch">
                    <input type="checkbox" className="okInput"/>
                        <span className="slider">
                            <svg className="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                        </span>
                </label>
            </div>
        </div>
    )
}