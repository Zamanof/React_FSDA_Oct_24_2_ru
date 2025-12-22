import React from "react";
import {Link} from "react-router-dom";
import {useFavorites} from "../context/FavoritesContext.tsx";
import FavoriteButton from "../components/FavoriteButton.tsx";

const FavoritesPage:React.FC = () => {
    const {state, clearAll} = useFavorites();
    if (state.characters.length === 0) {
        return (
            <div>
                <h1 className="text-4xl md:text-5xl
                font-bold mb-8
                bg-gradient-to-r from-yellow-400 to-green-400
                bg-clip-text text-transparent">
                    My Favorites
                </h1>

                <div>

                </div>
            </div>
        )
    }
    return (
        <div>
            "Salam"
        </div>
    )
}


export default FavoritesPage;