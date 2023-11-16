import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AuthContext from '../context/auth.context'
import Login from '../pages/LoginPage'
import LoadingPage from '../pages/LoadingPage'
import AdminPage from '../pages/admin/AdminPage'

export function Router() {

    const { user } = useContext(AuthContext);

    const isAuthenticated = user.Token !== null && user.Token !== undefined && user.Token !== '';

    const ProtectedRoute = ({ element: Element, ...props }) => {
        return (
            isAuthenticated 
            ? <Element {...props} />
            : <Navigate to="/login" replace state={{ from: props.location }} />
        )
    }

    return (
       
       <Routes>
            <Route path='/*' element={ <LoadingPage /> }/>
            <Route path='/login' element={ <Login /> }/>
            {/* <Route path='/admin' element={ <ProtectedRoute element={<AdminPage />} /> } /> */}
            <Route path='/admin' element={ <AdminPage/>} />
        </Routes>
    )
}