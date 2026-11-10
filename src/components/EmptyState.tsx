

export function EmptyState({message} :{message: string}) {
    return (
                <div className="mb-10 text-center border-2 border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-10 rounded-lg">
                    <div className="mb-2 text-4xl">🛍️</div>
                    <h2 className="mb-4 font-bold text-gray-500 dark:text-gray-300">{message}</h2>
                    <p className="text-center font-bold text-gray-500 dark:text-gray-300">Nothing matches this section check back here soon!</p>
        
                </div>
    )
}