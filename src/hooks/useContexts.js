import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../Contexts/ContextProvider'

function useContexts  () {
    return useContext(MyContext)
}

export default useContexts
