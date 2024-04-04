export default function DeviceCard({
    name,

}) {
    return (
        <div className="h-56 border w-56 rounded-3xl border-gray-500 flex items-end gap-5 justify-end p-5">
            {/* put images here  */}
            <label className="switch">
                <input type="checkbox" className="okInput"/>
                    <span className="slider">
                        <svg className="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg>
                    </span>
            </label>
            <p className="font-medium text-lg">{name}</p>
        </div>
    )
}