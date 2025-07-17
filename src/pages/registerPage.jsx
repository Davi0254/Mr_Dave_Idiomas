import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import handleRegister from '../utils/handleRegister';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [registerForm, setRegisterForm] = useState({
        nome_completo: "",
        email: "",
        senha: "",
    });

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setRegisterForm((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    }

    const navigate = useNavigate()

    // useEffect(() => {
    //     if (message) {
    //         navigate('/');
    //     }
    // }, [message]);

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
                handleRegister(e, { registerForm, setRegisterForm, setError, setMessage })
            }}
        >
            <div className='flex flex-col items-center justify-center h-screen gap-4'>
                <img src="/assets/Mr. Dave Logo.png" alt="USpeaK" width="70" height="70"></img>
                <h1 className='font-bold'>Criar Conta</h1>
                <TextField
                    required
                    id="nome_completo"
                    label="Nome Completo"
                    variant="outlined"
                    value={registerForm.nome_completo}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="email"
                    type='email'
                    label="email"
                    value={registerForm.email}
                    onChange={handleChange}
                />
                <div className='flex flex-col items-center'>
                    <div className='flex ml-4.5'>
                        <TextField
                            required
                            id="senha"
                            label="senha"
                            type={showPassword === false ? "password" : "text"}
                            autoComplete="current-password"
                            value={registerForm.senha}
                            onChange={handleChange}
                        />
                        <img
                            className='cursor-pointer'
                            src='/assets/eye-password-show-svgrepo-com.svg'
                            alt='show-password'
                            width={18}
                            onClick={togglePassword}
                        />
                    </div>
                    <Button type='submit' className='w-50' variant="contained">Registrar</Button>
                </div>
                <Link to={'/'} className="text-blue-600 underline">Login</Link>
                <div>{message || error}</div>
            </div>
        </Box>
    );
}