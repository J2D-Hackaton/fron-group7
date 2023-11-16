import React, { useContext } from 'react'
import { HashRouter, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import AuthContext from '../context/auth.context'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Home from '../pages/Home'

export function Router() {

    const { user } = useContext(AuthContext);

    const isAuthenticated = user.Token !== null && user.Token !== undefined && user.Token !== '';

    const ProtectedRoute = ({ element: Element, ...props }) => {
        return isAuthenticated ? (
            <Element {...props} />
        ) : (
            <Navigate to="/login" replace state={{ from: props.location }} />
        )
    }


    return (
            <Routes>
                <Route path='/login' element={<Login></Login>} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={<Home/>} />

                {/* <Route path='/' element={<ProtectedRoute element={}/>} /> */}

                <Route path='*' element={<h1>not found</h1>} />
            </Routes>
       
       
    )
}