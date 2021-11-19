import React from 'react'
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useHistory,useLocation } from 'react-router-dom'
import useContexts from '../../hooks/useContexts';


const PrivateRoute = ({children, ...rest}) => {
    const {authInfo} = useContexts();
    const {user,isLoading}= authInfo;
    
    // if(loading){
    //     return(
    //         <div className="my-5 py-5 text-center">
    //             <Spinner animation="border"  role="status">
    //                 <span className="visually-hidden">Loading...</span>
    //             </Spinner>
    //         </div>
    //          )
    // }

    return (
        <Route
        {...rest}
            render = {({ location })=>
            user.displayName ?(
                 children
             ) : (
            <Redirect
            to={{
                pathname: "/login",
                state:{from:location}
            }}
            
            ></Redirect>)
            }
            >

        </Route>
    )
}

export default PrivateRoute
