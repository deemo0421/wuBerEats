import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Content from './component/Content';
import Footer from '../../components/Footer'; 
import Loader from '../Loader';
import { AuthContext } from '../../global/AuthContextapi';
import {useCallback, useContext, useEffect } from 'react';
import { apiUserDetailsRequest } from '../../global/api';

export default function Homepage() {
    const[userContext, setUserContext] = useContext(AuthContext)

    const fetchUserDetails = useCallback(()=>{
        apiUserDetailsRequest({
            headers:{
                Authorization: `Bearer ${userContext.token}`}
        })
        .then(async response =>{
            if(response.statusText === 'OK'){
                console.log(response);
                const data = await response.data
                setUserContext( prevData =>{
                    return{...prevData, details : data}
                })
            }else{
                if(response.status === 401){
                    window.location.reload()
                }else{
                    setUserContext( prevData =>{
                        return{...prevData, details : null}
                    })
                }
            }
        })
    },[setUserContext, userContext.token])

    useEffect(()=>{
        if(!userContext.details){
            fetchUserDetails()
        }
    },[userContext.details, fetchUserDetails])
    
    return  userContext.details === null?(
        "Error Loading"
    ) : !userContext.details ?(
        <Loader />
    ):(
        <div>
            <Navbar /> 
            <Header />
            <Content />
            <Footer />
        </div>   
    )
    
}
