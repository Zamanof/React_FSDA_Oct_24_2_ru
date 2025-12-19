import React, {useCallback, useEffect, useMemo, useState} from 'react'
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'

import CharacterDetail from "./components/CharacterDetail.tsx";
import {Character} from "./types.ts";
import {fetchCharacters} from "./api.ts";
import SearchForm from "./components/SearchForm.tsx";


const App: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)

    const [searchQuery, setSearchQuery] = useState<string>('')

    useEffect(() => {
        const loadCharacters = async () => {
            try {
                setLoading(true)
                setError(null)
                const data = await fetchCharacters()
                setCharacters(data)
            } catch (error) {
                setError("Something went wrong")
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        loadCharacters()
    }, [])

    const filteredCharacters: Character[] = useMemo(() => {
        if(!searchQuery.trim()) {
            return characters
        }
        return characters.filter(char=>char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.species.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [characters, searchQuery])

    const handleSearch = useCallback((query: string): void => {
        setSearchQuery(query)
    }, [])

    const handleCharacterClick = useCallback((character: Character) => {
        setSelectedCharacter(character)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <Header title="Rick & Morty Characters"/>

            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                        Explore the Multiverse
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Click on any character to view detailed information
                    </p>
                </div>

                <SearchForm onSearch={handleSearch} />

                {loading && (
                    <div className="text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mb-4"></div>
                        <p className="text-xl text-gray-400">Loading characters from the multiverse...</p>
                    </div>
                )}

                {error && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">⚠️</div>
                        <p className="text-xl text-red-400 font-semibold">{error}</p>
                        <p className="text-gray-400 mt-2">Please try again later</p>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredCharacters.map((character) => (
                                <CharacterCard
                                    key={character.id}
                                    name={character.name}
                                    species={character.species}
                                    status={character.status}
                                    image={character.image}
                                    onCardClick={()=>handleCharacterClick(character)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <CharacterDetail character={selectedCharacter}/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App

