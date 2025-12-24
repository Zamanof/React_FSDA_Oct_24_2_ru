import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Character} from "../../types.ts";
import {RootState} from "../store.ts";

interface FavoritesState {
    characters: Character[];
}

const initialState: FavoritesState = {characters: []};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers:{
        addCharacter: (state, action: PayloadAction<FavoritesState>) => {
            const exists =
                state.characters.some(character =>
                    character.id === action.payload.id);
            if (!exists) {
                state.characters.push(action.payload);
            }
        }
    }
})
