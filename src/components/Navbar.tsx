const navLinks = [ { label: "Shop", href: "/shop" },
                { label: "Favorites", href: "/favorites" },
                { label: "Cart", href: "/cart" }]


export function Navbar({theme, setTheme, favoriteCount}: {theme: "light" | "dark"; setTheme: (newTheme:"light" | "dark") => void; favoriteCount: number}) {


    return (
        
        <nav className="flex justify-between gap-4 items-center">
            <p>SummitGear Market</p>
            <div className="flex gap-4">
                {navLinks.map(link => <a key={link.label} href={link.href}>{link.label === "Favorites" ? `Favorites (${favoriteCount})` : link.label}</a>)}
            </div>
            <button className="border-2 border-gray-300 rounded-lg" onClick={() => setTheme(theme === "light" ? "dark": "light") }>
                {theme === "light" ? "☀️": "🌙"}
            </button>
        </nav>
        
    )
}