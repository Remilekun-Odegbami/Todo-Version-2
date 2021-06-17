import { createContext, useReducer } from 'react'

export const AppContext = createContext()

//reducer function
function reducer(state, action) {
    let stateCopy = { ...state };
    stateCopy.action = action;

    if(action.type === 'ADDITEM') {
        stateCopy.shoppingList.unshift(action.payload)
    }
    if (action.type === 'LOGIN') {
        stateCopy.isUserLoggedIn = true;
        stateCopy.userData = action.payload;
    }
    return stateCopy
}

const initialState = {
    TodoList: [],
    isUserLoggedIn: false,
}

function AppState( {children} ) {

        // The reducer determines how the state is going to change
    const [ appstate, dispatch ] = useReducer(reducer, initialState)

    const contextObject = {
        state: appstate,
        dispatch: dispatch,
    }

    return (

        <AppContext.Provider value={contextObject}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState;
