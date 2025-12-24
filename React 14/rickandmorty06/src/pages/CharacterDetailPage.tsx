import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import FavoriteButton from '../components/FavoriteButton'
import { fetchCharacterById } from '../api'
import { Character } from '../types'

const CharacterDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [character, setCharacter] = useState<Character | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!id) {
            navigate('/characters')
            return
        }

        const loadCharacter = async () => {
            try {
                setLoading(true)
                const characterId = parseInt(id)
                if (isNaN(characterId) || characterId < 1) {
                    throw new Error('Invalid character ID')
                }
                const data = await fetchCharacterById(characterId)
                setCharacter(data)
            } catch (err) {
                setError('Character not found')
            } finally {
                setLoading(false)
            }
        }

        loadCharacter()
    }, [id, navigate])

    if (loading) {
        return (
            <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mb-4"></div>
                <p className="text-xl text-gray-400">Loading character from the multiverse...</p>
            </div>
        )
    }

    if (error || !character) {
        return (
            <div className="text-center py-20">
                <div className="text-6xl mb-4">😢</div>
                <p className="text-xl text-red-400 mb-4 font-semibold">{error || 'Character not found'}</p>
                <Link
                    to="/characters"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
                >
                    Back to Characters
                </Link>
            </div>
        )
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Alive':
                return 'bg-green-500/20 text-green-400'
            case 'Dead':
                return 'bg-red-500/20 text-red-400'
            default:
                return 'bg-gray-500/20 text-gray-400'
        }
    }

    return (
        <div>
            <Link
                to="/characters"
                className="inline-flex items-center gap-2 mb-8 text-green-400 hover:text-yellow-400 font-semibold transition-colors group"
            >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                <span>Back to Characters</span>
            </Link>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border-2 border-green-500/50 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="relative">
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-64 h-64 rounded-xl object-cover mx-auto border-4 border-green-400 shadow-2xl shadow-green-500/50"
                        />
                        <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full font-bold text-sm ${getStatusColor(character.status)}`}>
                            {character.status}
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-6">
                            <h1 className="text-4xl font-bold text-green-400">{character.name}</h1>
                            <FavoriteButton character={character} />
                        </div>
                        <div className="space-y-4 bg-gray-900/50 p-6 rounded-xl">
                            <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                                <span className="font-semibold text-gray-300 text-lg">Species:</span>
                                <span className="text-green-400 font-bold text-lg">{character.species}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-300 text-lg">Status:</span>
                                <span className={`px-4 py-2 rounded-full font-bold ${getStatusColor(character.status)}`}>
                  {character.status}
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetailPage