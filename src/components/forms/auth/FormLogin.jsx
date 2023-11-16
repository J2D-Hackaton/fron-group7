import Button from '../../ui/commons/Button'
import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import AuthContext from '../../../context/auth.context'
import { authService } from '../../../services/auth.service';
import swal from 'sweetalert';
import InputForm from '../../ui/commons/InputForm';

function FormLogin({ className }) {

    const { register, handleSubmit } = useForm()
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = async (dataForm) => {
        try {
            const { data } = await authService.login(dataForm);
            setUser(data);

            swal({
                text: "Has ingresado con éxito",
                icon: "success",
            });
            navigate("/chose")
        } catch (error) {
            console.log(error)
            let errorMessage = error.response.status === 401 ? "Correo o contraseña incorrectos." : "Error desconocido"
            swal({
                title: "Error",
                text: errorMessage,
                icon: "error",
            });
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'bg-base-300 p-8 flex flex-col text-center rounded shadow-lg ' + ' ' + className}>
            <h2 className='title2'>¡Bienvenid@ de nuevo!,
                inicia sesión</h2>
            <InputForm label="Correo:" name="email" register={register} type="email" placeholder="Correo" />
            <InputForm label="Contraseña:" name="password" register={register} type="password" placeholder="Contraseña" minLength={6} />
            <Button className='mt-8 btn-primary '>Iniciar sesión</Button>
            <Link to="/register" className='mt-4 underline underline-offset-4'>¿No tienes una cuenta?</Link>
        </form>
    )
}

export default FormLogin