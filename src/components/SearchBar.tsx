
export function SearchBar ({searchText, setSearchText}: {searchText: string; setSearchText: (text: string) => void}  ) {
    
    return (
        <div className="mb-5 p-4">
            <input className="w-full focus:border-green-600 rounded-lg p-4 border-gray-600 border-2" type="text"
            placeholder="Search Products..." 
            value={searchText} onChange={(typed) => setSearchText(typed.target.value)} 
            />
        </div>
    )
}