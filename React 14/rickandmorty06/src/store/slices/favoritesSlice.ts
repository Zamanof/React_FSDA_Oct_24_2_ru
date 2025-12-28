import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Character} from "../../types.ts";

interface FavoritesState {
    characters: Character[];
}

const initialState: FavoritesState = {characters: []};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers:{
        addCharacter: (state, action: PayloadAction<Character>) => {
            const exists =
                state.characters.some(character =>
                    character.id === action.payload.id);
            if (!exists) {
                state.characters.push(action.payload);
            }
        },
        removeCharacter: (state, action: PayloadAction<number>) => {
            state.characters = state.characters.filter(char=> char.id !== action.payload);
        },
        clearAll: (state)=>{
            state.characters = [];
        }
    }
})

export const {addCharacter, removeCharacter, clearAll} = favoritesSlice.actions;

export default favoritesSlice.reducer;

export const selectFavorites = (state: {favorites: FavoritesState}) => {
    return state.favorites.characters;
}

export const selectIsFavorite = (state: {favorites: FavoritesState}, characterId:number) => {
    return state.favorites.characters.some(character => character.id === characterId);
}

export const selectFavoritesCount = (state: {favorites: FavoritesState}) => {
    return state.favorites.characters.length;
}