import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'

function LoginForm() {
    const navigate = useNavigate(); 
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (usuario === 'admin' && contraseña === '1234') {
            // Si las credenciales son correctas, redirige al Admin
            navigate('/admin');
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit} className="loginForm">
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    className='FormInput'
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    className='FormInput'
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default LoginForm;
