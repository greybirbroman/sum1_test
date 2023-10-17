import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import * as authActions from '../../features/slices/auth/authActionCreator'

const rootActions = {
    ...authActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => 
    bindActionCreators(rootActions, dispatch), [dispatch])
}