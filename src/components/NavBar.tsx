const NavBar = () => {
    return (
        <div>
            <div className="flex gap-1 items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4">
                <img src="/assets/crypto-logo.png" alt="logo" width={50} height={50} className="size-6" />
                <span className="text-lg font-semibold text-neutral-900">CryptoPulse</span>
            </div>
        </div>
    )
}

export default NavBar;