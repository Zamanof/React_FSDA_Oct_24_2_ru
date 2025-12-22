import React, {useState, useEffect, useMemo, useCallback} from 'react'
import SearchForm from '../components/SearchForm'
import {fetchCharacters} from '../api'
import {Character} from '../types'
import {Link} from 'react-router-dom'

const CharactersPage: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState<string>('')

    useEffect(() => {
        const loadCharacters = async () => {
            try {
                setLoading(true)
                const data = await fetchCharacters()
                setCharacters(data)
            } catch (err) {
                setError('Failed to load characters')
            } finally {
                setLoading(false)
            }
        }
        loadCharacters()
    }, [])

    // useMemo для оптимизации фильтрации
    const filteredCharacters = useMemo(() => {
        if (!searchQuery.trim()) {
            return characters
        }
        return characters.filter(char =>
            char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            char.species.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [characters, searchQuery])

    // useCallback для оптимизации
    const handleSearch = useCallback((query: string) => {
        setSearchQuery(query)
    }, [])

    if (loading) {
        return (
            <div className="text-center py-20">
                <div
                    className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mb-4"></div>
                <p className="text-xl text-gray-400">Loading characters from the multiverse...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center py-20">
                <div className="text-6xl mb-4">⚠️</div>
                <p className="text-xl text-red-400 font-semibold">{error}</p>
                <p className="text-gray-400 mt-2">Please try again later</p>
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Characters
            </h1>

            {/* Форма поиска */}
            <SearchForm onSearch={handleSearch}/>

            <div className="mb-6 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <p className="text-gray-300 text-lg">
                    Showing <span className="font-bold text-green-400">{filteredCharacters.length}</span> of{' '}
                    <span className="font-bold text-yellow-400">{characters.length}</span> characters
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCharacters.map((character) => (
                    <Link
                        key={character.id}
                        to={`/characters/${character.id}`}
                        className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 border-2 border-gray-700 hover:border-green-500"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={character.image}
                                alt={character.name}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="p-5">
                            <h2 className="text-xl font-bold mb-2 text-green-400 group-hover:text-yellow-400 transition-colors">{character.name}</h2>
                            <p className="text-gray-400">Species: <span
                                className="text-gray-300">{character.species}</span></p>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CharactersPage