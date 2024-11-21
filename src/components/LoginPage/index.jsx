import './LoginPage.css'
import alcaldiaImg from '../../assets/alcaldia.svg';
import loginImg from '../../assets/loginImg.svg';
import LoginForm from '../LoginForm';

function LoginPage() {
    return (
        <div className='bodyLoginPage'>
            <div className="navbar">
                <div className='circle-img'>
                    <img src={alcaldiaImg} alt="" className='alcaldiaImg' />
                </div>
                <p>Alcaldia de Medellin</p>
            </div>
            <div className='login-container'>
                <div className='img-container'>
                    <img src={loginImg} alt="" className='loginImg' />
                </div>
                <LoginForm className='loginForm'/>
            </div>
        </div>
    );
}

export default LoginPage;