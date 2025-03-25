import { createContext, useContext } from "react";


//Step-1: Create a NotesContext 
export const NotesContext = createContext()


//Step-2: use the above context for 2 things, provider and UseContext 
// this is used when we retrieve data or push data, create a hook 

export const useNotes = ()=>{ // create Context is function that's why we wrote a function to be returned 
    return useContext(NotesContext)
}



