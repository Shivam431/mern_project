import {useEffect} from 'react';
import { useAuth } from '../store/AuthContext';
import { Navigate } from 'react-router-dom';

export const LogOut = () => {

    const { logoutUser } = useAuth();

    useEffect(() => {
        logoutUser();
    }, [logoutUser])



    return <Navigate to="/login" />
}
