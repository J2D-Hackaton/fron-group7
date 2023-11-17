import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AuthContext from '../context/auth.context'
import Login from '../pages/LoginPage'
import LoadingPage from '../pages/LoadingPage'
import AdminPage from '../pages/admin/AdminPage'

export function Router() {

    return (
       
       <Routes>
            <Route path='/*' element={ <LoadingPage /> }/>
            <Route path='/login' element={ <Login /> }/>
            <Route path='/admin' element={ <AdminPage/>} />
        </Routes>
    )
}