import React from 'react'

const AboutPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-center">
                About
            </h1>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border-2 border-gray-700 mb-8">
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                        alt="Rick Sanchez"
                        className="w-20 h-20 rounded-full border-4 border-green-400"
                    />
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                        About Rick & Morty
                    </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland
                    and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows
                    the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson
                    Morty Smith, who split their time between domestic life and interdimensional adventures.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                        <h3 className="text-xl font-bold mb-3 text-green-400">🎬 Series Info</h3>
                        <p className="text-gray-300">Created by Justin Roiland & Dan Harmon</p>
                        <p className="text-gray-300">Premiered: December 2, 2013</p>
                        <p className="text-gray-300">Network: Adult Swim</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                        <h3 className="text-xl font-bold mb-3 text-yellow-400">🌌 Multiverse</h3>
                        <p className="text-gray-300">Infinite dimensions</p>
                        <p className="text-gray-300">Countless adventures</p>
                        <p className="text-gray-300">Endless possibilities</p>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border-2 border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">About this app:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            <span>Browse characters from the Rick and Morty universe</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            <span>Search and filter characters by name or species</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            <span>View detailed information about each character</span>
                        </li>
                    </ul>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            <span>Navigate between different pages</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            <span>All data is provided by the Rick and Morty API</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            <span>Modern UI with Tailwind CSS</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutPage