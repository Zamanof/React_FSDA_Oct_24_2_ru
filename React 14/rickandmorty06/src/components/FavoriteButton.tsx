import React from "react";
import {Character} from "../types.ts";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {addCharacter, removeCharacter, selectIsFavorite} from "../store/slices/favoritesSlice.ts";

interface FavoriteButtonProps {
    character: Character
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({character}) => {
    const dispatch = useAppDispatch()
    const favorite = useAppSelector((state)=>selectIsFavorite(state, character.id));

    const handleToggle = ()=>{
        if(favorite){
            /*
             removeCharacter(character.id) создает action:
             {
                type: 'favorites/removeCharacter',
                payload: character.id
             }
            */
            dispatch(removeCharacter(character.id))
        }
        else {
            /*
             addCharacter(character) создает action:
             {
                type: 'favorites/addCharacter',
                payload: character
             }
            */
            dispatch(addCharacter(character))
        }
    }

    return (
        <button
            onClick={handleToggle}
            className={`w-full px-6 py-3 rounded-xl 
        font-bold transition-all duration-300
        hover:scale-105
        ${favorite
                ? `bg-gradient-to-r 
                from-yellow-400 to-yellow-500
                hover:from-yellow-500
                hover:to-yellow-600 text-black 
                shadow-lg shadow-yellow-500/50`
                : `bg-gradient-to-r 
                from-gray-700 to-gray-600
                hover:from-gray-600 hover:to-gray-500
                text-white`}
            `}
        title={favorite ? "Remove from favorites" : "Add to favorites"}>
            {favorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
        </button>
    )
}
export default FavoriteButton