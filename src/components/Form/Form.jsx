import { useState } from 'react';
import './Form.scss';

const ininitalUser = {name: '', email: '', celular: '', edad: ''};

const regexMatchInput = {
    name: "^[a-zA-Z ]*$",
    email: "^[a-zA-Z0-9 ._@]*$",
    celular: "^[0-9]*$",
    edad: "^[0-9]*$",
}

export const Form = ({itemSelected, showSuccessMessage}) => {
    const [user, setUser] = useState(ininitalUser);

    const handleChange = (e) => {
        if(e.target.value.match(regexMatchInput[e.target.name]) != null){
            setUser({
                ...user,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        showSuccessMessage(user);
        setUser(ininitalUser);
    }

    return (
        <div className='form-users'>
            <h3 className='title'>Hola, bienvenido, sabemos que quieres viajar en un {itemSelected.name}, por favor diligencia el siguiente formulario:</h3>
            <form className='form-users-content' onSubmit={handleSubmit}>
                <div className='form-users-content-input'>
                    <label htmlFor='name'>Nombre Completo:</label>
                    <input type='text' id='name' name='name' required value={user.name} onChange={handleChange} placeholder='Ingresa tu nombre' />
                </div>
                <div className='form-users-content-input'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' required value={user.email} onChange={handleChange} placeholder='Ingresa tu Email'/>
                </div>
                <div className='form-users-content-input'>
                    <label htmlFor='celular'>Celular:</label>
                    <input type='text' id='celular' name='celular' required value={user.celular} onChange={handleChange} placeholder='Ingresa tu Celular'/>
                </div>
                <div className='form-users-content-input'>
                    <label htmlFor='edad'>Edad:</label>
                    <input type='number' min={18} max={100} id='edad' name='edad' required value={user.edad} onChange={handleChange} placeholder='18-100'/>
                </div>
                <div className='form-users-content-button'>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    );
}