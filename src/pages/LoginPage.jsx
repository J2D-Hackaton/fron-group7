import React from 'react'
import FormLogin from '../components/FormLogin'
import { LoginIcon } from '../components/icons/LoginIcon'


function Login() {
    return (
        <div className='w-full px-[5%] md:px-[10%] grid md:grid-cols-2 py-[10vh] min-h-screen '>
            <FormLogin className='rounded-l justify-center lg:px-16' />
            <div className=" bg-base-200 rounded-r shadow-lg hidden justify-center relative md:flex md:flex-col">
                <LoginIcon />
            </div>
        </div>
    )
}

export default Login