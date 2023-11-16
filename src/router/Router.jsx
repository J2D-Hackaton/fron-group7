import React, { useContext } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from '../views/home/Home'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import NotFound from '../components/ui/commons/NotFound'
import AuthContext from '../context/AuthContext'
import Choose from '../views/Choose'

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
        <HashRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='/chose' element={<ProtectedRoute element={Choose}/>} />
                <Route path='/' element={<ProtectedRoute element={Home}/>} />
                <Route path='/home' element={<ProtectedRoute element={Home}/>} />

                <Route path='*' element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}