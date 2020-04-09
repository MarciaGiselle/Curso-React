import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [error, setError] = useState(false);
  const [usuario, setUsuario] = useState({
    email:'',
    password:''
  })

  const { email, password } = usuario; 

  const onChangeLogin = e => {
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value 
    })
  }

  const onSubmitLogin = e => {
    e.preventDefault();

    //validar campos
    if(email.trim() === '' || password.trim() === ''){
      setError(true);
      return;
    }


    //longitud de pass
    if(password.trim().length < 6){
      setError(true);
      return;
    }

    setError(false);
  }

    return (
        <div className='form-usuario'>
          <div className='contenedor-form sombra-dark'>
            <h1>MARTE</h1>
            <h2>Iniciar Sesión</h2>
            {error ? <h1 className='error'>Error</h1>: null}
            <form onSubmit={onSubmitLogin}> 
              <div className='campo-form'>
                <label htmlFor="email">Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Tu email'
                  value={email}
                  onChange={onChangeLogin}
                />
              </div>

              <div className='campo-form'>
                <label htmlFor="password">Password</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Tu password'
                  value={password}
                  onChange={onChangeLogin}
                />
              </div>

              <div className='campo-form'>
                <input
                  type='submit'
                  className='btn btn-primario btn-block'
                  value='Iniciar Sesión'
                />

              </div>
            </form>

            <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
              Obtener nueva cuenta
            </Link>
          </div>
        </div>
      );
}
 
export default Login;
