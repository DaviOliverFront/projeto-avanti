import {FaUser, FaLock} from 'react-icons/fa';
import { useState } from 'react';

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert('enviando os dados: ' + username + ' ' + password);
    };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Faça o seu Login</h1>
        <div className='input-field'> 
            <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}/> 
            <FaUser className='icon'/>
        </div>
        <div className='input-field'> 
            <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className='icon'/>
        </div>
      </form>

      <div className="recall-forget">
        <label>
            <input type="checkbox" />
            Lembrar do meu acesso
        </label>
        <a href="#">Esqueceu a senha?</a>
      </div>
      <button>Entrar</button>
      <div className="signup-link">
        Não tem conta? <a href="#"> Crie sua conta agora!
        </a>
      </div>
    </div>
  );
};

export default Login
