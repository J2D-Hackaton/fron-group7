import React from 'react'
import FormRegister from '../../components/forms/auth/FormRegister'


function Register() {
    return (
        <div className='w-full px-[5%] md:px-[10%] grid md:grid-cols-2 py-[10vh] min-h-screen '>
            <FormRegister className='rounded-l justify-center lg:px-16' />
            <div className=" bg-base-200 rounded-r shadow-lg hidden relative md:flex md:flex-col">
                <div className="h-1/2 relative flex justify-center overflow-hidden ">
                    <div className="absolute w-40 aspect-square rounded-full bg-primary bottom-0 translate-y-1/2 bg-gradient-to-r from-primary via-accent to-primary animate-pulse "></div>
                </div>
                <div className="h-1/2 blur-md w-full relative flex justify-center overflow-hidden">
                    <div className="absolute w-40 aspect-square rounded-full bg-primary top-0 -translate-y-1/2 bg-gradient-to-r from-primary via-accent to-primary animate-pulse "></div>
                </div>
            </div>
        </div>
    )
}

export default Register