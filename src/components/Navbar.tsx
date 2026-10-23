const navLinks = [ { label: "Shop", href: "/shop" },
                { label: "Favorites", href: "/favorites" },
                { label: "Cart", href: "/cart" }]


export function Navbar() {
    return (
        <nav className="flex justify-between gap-4 items-center">
            <p>SummitGear Market</p>
            <div className="flex gap-4">
                {navLinks.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}
            </div>
        </nav>
        
    )
}