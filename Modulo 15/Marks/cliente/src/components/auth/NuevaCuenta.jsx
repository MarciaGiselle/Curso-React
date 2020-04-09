import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

  const [error, setError] = useState(false);

  const [usuario, setUsuario] = useState({
    nombre:'',
    email:'',
    password:'',
    passwordDos:''
  })

  const { nombre, email, password, passwordDos } = usuario; 

  const onChangeCrearCuenta = e => {
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value 
    })
  }

  const onSubmitNuevaCuenta = e => {
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
    //2 pass iguales
    if(password.trim() !== passwordDos.trim()){
      setError(true);
      return;
    }

    // action

  }


    return (
      <div className='form-usuario'>
      
      <div className='contenedor-form sombra-dark'>
        <h1>MARTE</h1>
        <h2>Crear cuenta</h2>
        {error ? <h1 className='error'>Error</h1>: null}

        <form onSubmit={onSubmitNuevaCuenta}>
        <div className='campo-form'>
            <label htmlFor="nombre">Nombre</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              placeholder='Tu nombre'
              value={nombre}
              onChange={onChangeCrearCuenta}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor="email">Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Tu email'
              value={email}
              onChange={onChangeCrearCuenta}
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
              onChange={onChangeCrearCuenta}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor="password">Confirmar Password</label>
            <input
              type='password'
              id='passwordDos'
              name='passwordDos'
              placeholder='Repetir tu password'
              value={passwordDos}
              onChange={onChangeCrearCuenta}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Registrarse'
            />
          </div>

          <Link to={'/'} className='enlace-cuenta'>
              Volver a iniciar sesión
          </Link>

        </form>
      </div>
    </div>
      );
}
 
export default NuevaCuenta;
