import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { checkIsLoggedIn } from '../../features/slices/auth/authActionCreator'

const useCheckAuth = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkIsLoggedIn())
      }, [])
 
    return
}

export default useCheckAuth
