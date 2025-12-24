import React, {createContext, ReactNode, useContext, useReducer} from "react";
import {Character} from "../types.ts";


interface FavoriteState {
    characters: Character[]
}

type FavoriteAction =
    | { type: "ADD_CHARACTER"; payload: Character }
    | { type: "REMOVE_CHARACTER"; payload: number }
    | { type: "CLEAR_ALL" }

const initialState: FavoriteState = {characters: []}

interface FavoriteContextType {
    state: FavoriteState
    addCharacter: (character: Character) => void
    removeCharacter: (id: number) => void
    clearAll: (id: number) => void
    isFavorite: (id: number) => boolean
}

const FavoriteContext
    = createContext<FavoriteContextType | undefined>(undefined)

const favoritesReducer
    = (state: FavoriteState, action: FavoriteAction) => {
    switch (action.type) {
        case "ADD_CHARACTER":
            if (state.characters.some(char => char.id === action.payload.id)) {
                return state
            }
            return {
                ...state,
                characters: [...state.characters, action.payload]

            }

        case "REMOVE_CHARACTER":
            return {
                ...state,
                characters: state.characters.filter(char => char.id !== action.payload)
            }

        case "CLEAR_ALL":
            return initialState

        default:
            return state
    }
}

interface FavoritesProviderProps {
    children: ReactNode
}

export  const FavoritesProvider: React.FC<FavoritesProviderProps> =({children}) => {
    const [state, dispatch] = useReducer(favoritesReducer, initialState)

    const addCharacter = (character: Character): void => {
        dispatch({type:"ADD_CHARACTER", payload: character})
    }

    const removeCharacter = (id:number): void => {
        dispatch({type:"REMOVE_CHARACTER", payload: id})
    }

    const clearAll = (): void => {
        dispatch({type:"CLEAR_ALL"})
    }

    const isFavorite = (id: number): boolean => {
        return state.characters.some(char => char.id === id)
    }

    const value: FavoriteContextType = {
        state,
        addCharacter,
        removeCharacter,
        clearAll,
        isFavorite
    }

    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    )
}

export const useFavorites = ():FavoriteContextType => {
    const context = useContext(FavoriteContext)
    if(context === undefined) {
        throw new Error("useFavorites must be used within a FavoriteProvider")
    }
    return context
}
