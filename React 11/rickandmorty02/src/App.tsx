import React from 'react'
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'

import CharacterDetail from "./components/CharacterDetail.tsx";
const characters = [
    {
        id: 1,
        name: 'Rick Sanchez',
        species: 'Human',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
        id: 2,
        name: 'Morty Smith',
        species: 'Human',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },
    {
        id: 3,
        name: 'Summer Smith',
        species: 'Human',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    },
    {
        id: 4,
        name: 'Beth Smith',
        species: 'Human',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
    },
    {
        id: 5,
        name: 'Jerry Smith',
        species: 'Human',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
    },
    {
        id: 6,
        name: 'Abadango Cluster Princess',
        species: 'Alien',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'
    }
]

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header title="Rick & Morty Characters" />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
            Explore the Multiverse
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Click on any character to view detailed information
          </p>
        </div>



          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {characters.map((character) => (
                  <CharacterCard
                    key={character.id}
                    name={character.name}
                    species={character.species}
                    status={character.status}
                    image={character.image}
                    onCardClick={() => alert(character.name)}
                  />
                ))}
              </div>
            </div>
            <div>
                {/*<CharacterDetail/>*/}
            </div>
          </div>

      </main>
    </div>
  )
}

export default App

