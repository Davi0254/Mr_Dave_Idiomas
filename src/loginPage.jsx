import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import handleLogin from './utils/handleLogin';
import { useAuth } from './context/AuthContext';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [loginForm, setLoginForm] = useState({ email: "", senha: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { token, login } = useAuth();
    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLoginForm((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    }

    // Função é acionada quando o usuario digita entrar ou pressioana enter
    const onSubmit = async (e) => {
        e.preventDefault();
    // setLoading is set to true
        setLoading(true);
        await handleLogin(e, { loginForm, setLoginForm, login, setError, setMessage });
    // setloading is set to false again after a response is received from the backend
        setLoading(false);

    }

    useEffect(() => {
        if (token && message) {
            navigate('/home');
        }
    }, [token, message]);

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <div className='flex flex-col items-center justify-center h-screen gap-4'>
                <img src="/assets/mrdave-logo.png" alt="USpeaK" width="70" height="70"></img>
                <h1 className='font-bold'>LOGIN</h1>
                <TextField
                    required
                    id="email"
                    type='email'
                    label="email"
                    value={loginForm.email}
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
                            value={loginForm.senha}
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
                    <Button type='submit' className='w-50' variant="contained">Entrar</Button>
                </div>
                <Link to={'/register'} className="text-blue-600 underline">Criar conta</Link>
                { loading && <p>Por favor, aguarde...</p>}
                <div>{message || error}</div>
            </div>
        </Box>
    );
}