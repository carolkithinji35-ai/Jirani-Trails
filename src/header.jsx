function Header() {
    return (
        <div className="flex justify-between px-6 py-4 bg-gray-400 items-center">
            <div className="">Logo here</div>
            <div>
                <ul className="flex gap-4 text-white text-lg">
                    <li htmlFor="">Home</li>
                    <li>About</li>
                    <li>Trails</li>
                </ul>
            </div>
        </div>
    )
}

export default Header