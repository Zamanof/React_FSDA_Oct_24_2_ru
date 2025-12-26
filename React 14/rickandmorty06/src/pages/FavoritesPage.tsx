import React from "react";
import {Link} from "react-router-dom";

const FavoritesPage: React.FC = () => {

    if (true) {
        return (
            <div className="text-center py-20">
                <h1 className="text-4xl md:text-5xl
                font-bold mb-8
                bg-gradient-to-r from-yellow-400 to-green-400
                bg-clip-text text-transparent">
                    My Favorites
                </h1>
                <div className="bg-gradient-to-br from-gray-800-400 to-gray-900
                p-12 rounded-xl shadow-2xl border-2 border-gray-700
                max-w-md mx-auto">
                    <div className="text-6xl mb-6">★</div>
                    <p className="text-gray-300 text-xl mb-8">
                        No Favorite characters yet
                    </p>
                    <Link
                        to={"/characters"}
                        className="inline-block px-8 py-4
                    bg-gradient-to-r from-green-500 to-green-600
                    hover:from-green-600 hover:to-green-700
                    rounded-xl font-bold
                    transition-all duration-300
                    hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
                    >
                        Browse Characters
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            {/*<div*/}
            {/*    className="flex flex-col md:flex-row*/}
            {/*justify-between items-center*/}
            {/*mb-8 gap-4">*/}
            {/*    <h1*/}
            {/*        className="text-4xl md:text-5xl font-bold*/}
            {/*        bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">*/}
            {/*        My Favorites*/}
            {/*        <span className="text-white">0</span>*/}
            {/*    </h1>*/}
            {/*    <button*/}
            {/*        // onClick={}*/}
            {/*        className="px-6 py-3*/}
            {/*    bg-gradient-to-r from-red-500 to-red-600*/}
            {/*    hover:from-red-600 hover:to-red-700*/}
            {/*    rounded-xl font-bold*/}
            {/*    transition-all duration-300*/}
            {/*    hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">*/}
            {/*        Clear all*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
            {/*    {[].map((character) => (*/}
            {/*        <div*/}
            {/*            key={character.id}*/}
            {/*            className="group bg-gray-800 rounded-xl*/}
            {/*        shadow-lg overflow-hidden hover:bg-gray-700*/}
            {/*        transition-all duration-300*/}
            {/*        hover:scale-105 hover:shadow-2xl*/}
            {/*        hover:shadow-yellow-500/30*/}
            {/*        border-2 border-gray-700 hover:border-yellow-500">*/}
            {/*            <Link to={`/characters/${character.id}`}>*/}
            {/*                <div className="relative overflow-hidden">*/}
            {/*                    <img src={character.image} alt={character.name}*/}
            {/*                         className="w-full h-64 object-cover*/}
            {/*                    transition-transform duration-300*/}
            {/*                    group-hover:scale-110"/>*/}
            {/*                    <div className="absolute inset-0*/}
            {/*                    bg-gradient-to-t from-gray-900/80 to-transparent*/}
            {/*                    opacity-0 group-hover:opacity-100*/}
            {/*                    transition-opacity">*/}
            {/*                    </div>*/}
            {/*                    <div className="p-5">*/}
            {/*                        <h2 className="text-xl font-bold*/}
            {/*                        mb-2 text-yellow-400*/}
            {/*                        group-hover:text-green-400*/}
            {/*                        transition-colors duration-300">*/}
            {/*                            {character.name}*/}
            {/*                        </h2>*/}
            {/*                        <p className="text-gray-400 mb-4">*/}
            {/*                            Species: <span className="text-gray-300">*/}
            {/*                            {character.species}*/}
            {/*                        </span>*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </Link>*/}
            {/*            <FavoriteButton character={character}/>*/}

            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    )
}


export default FavoritesPage;