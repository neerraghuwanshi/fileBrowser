import { 
    SET_FOLDER_ARRANGEMENT
} from '../actions/itemArrangement';


const initialState = {
    folderArrangement: 'list',
}

export const itemArrangementReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_FOLDER_ARRANGEMENT:
            return {
                ...state,
                folderArrangement: action.folderArrangement,
            }
        default:
            return state
    }
}