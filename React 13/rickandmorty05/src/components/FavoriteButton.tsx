import React from "react";
import {useFavorites} from "../context/FavoritesContext.tsx";
import {Character} from "../types.ts";

interface FavoriteButtonProps {
    character: Character
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({character}) => {
    const {addCharacter, removeCharacter, isFavorite} = useFavorites();

    const favorite = isFavorite(character.id)
    const handleToggle = () => {
        if(favorite) {
            removeCharacter(character.id)
        }else{
            addCharacter(character)
        }
    }

    return (
        <button onClick={handleToggle}>
            {favorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
        </button>
    )
}
export default FavoriteButton