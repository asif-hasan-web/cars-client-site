import { createContext } from "react"
import useFirebase from "../hooks/useFirebase"
import useProducts from "../hooks/useProducts"

export const MyContext = createContext()

const ContextProvider = ({children}) => {
    const authInfo=useFirebase()
    const {products} = useProducts()
    
    const data = { authInfo,products}
    return (
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider
