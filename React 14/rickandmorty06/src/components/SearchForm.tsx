import {useState} from "react";

interface SearchFormProps {
    onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({onSearch}) => {
    const [query, setQuery] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onSearch(query);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    }

    const handleClear = (): void => {
        setQuery('');
        onSearch('');
    }

    return (
        <form className="mb-8" onSubmit={handleSubmit}>
            <div className="flex gap-3">
                <div className="flex-1 relative">
                    <input type="text"
                           onChange={handleChange}
                           value={query}
                           placeholder="Search by name or species..."
                           className="w-full px-6 py-4 bg-gray-800
                       border-2 border-gray-700 rounded-xl text-white
                       placeholder-gray-400 focus:outline-none focus:border-green
                       focus:ring-2 focus:ring-green-500
                       transition-all text-lg"
                    />
                    <div className="absolute right-4 top-1/2
                transform -translate-y-1/2 text-gray-400">
                        🔍
                    </div>
                </div>
                {
                    query &&
                    <button type="button"
                            onClick={handleClear}
                            className="px-6 py-4 bg-gray-700 text-white
                    rounded-xl hover:bg-gray-600
                    transition-all duration-300 font-semibold
                    hover:scale-105">
                        Clear
                    </button>
                }
                <button type="submit"
                        className="px-8 py-4
            bg-gradient-to-r from-green-500 to-green-600
            hover:from-green-600 hover:to-green-700
            rounded-xl font-bold
            transition-all duration-300
            hover:scale-105
            hover:shadow-2xl
            hover:shadow-green-500/50 ">
                    Search
                </button>
            </div>
        </form>
    )
}
export default SearchForm