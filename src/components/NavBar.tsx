const NavBar = () => {
    return (
        <div>
            <div className="flex gap-1 items-center">
                <img src="/assets/crypto-logo.png" alt="logo" width={50} height={50} className="size-6" />
                <span className="text-lg font-semibold text-neutral-900">CryptoPulse</span>
            </div>
        </div>
    )
}

export default NavBar;