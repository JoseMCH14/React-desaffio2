import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alerta from "./Alert";
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export const Registro = () => {

    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [conf_pass,setConfpass] = useState('');
    const [msj,setMensaje] = useState ('')
    const [color,setColor] = useState ('')
    const [Nmodificado,setNmodificado] = useState('')
    const [Emodificado,setEmodificado] = useState('')
    const [Pmodificado,SetPmodificado] = useState('')
    const [Cmodificado,SetCmodificado] = useState('')

  
    const validarInputs = (e) => {

      const valor = e.target.value       
      if(e.target.name == "nombre"){
        setNombre (valor)
        setNmodificado(true)
      } else if ( e.target.name == "email" ) {
        setEmail (valor)
        setEmodificado(true)
      } else if ( e.target.name == "pass" ) {
        setPass(valor)
        SetPmodificado(true)
      } else if ( e.target.name == "validador" ){
        setConfpass(valor)
        SetCmodificado(true)
      }
    }

    const enviarFormulario = (e) => {

        const expresionRegular = /^[a-zA-Z0-9@._+-]+@[a-zA-Z0-9@._+-]+\.[a-zA-Z]{2,}$/;
        e.preventDefault()
        console.log ("Voy a validar el formulario")

        if (!nombre || !email || !pass || !conf_pass) {
            crearAlerta("No pueden ir campos vacios","danger")
        }
        else if (pass != conf_pass) {
            crearAlerta("Las claves no coinciden","danger")
        } else if ( !expresionRegular.test(email) ) {
            crearAlerta('El mail debe tener este formato "juan@mail.com"',"danger")
        }else{
            crearAlerta("Formulario enviado","success")
            setNombre('')    
            setNmodificado(false)
            setEmail('')
            setEmodificado(false)
            setPass('')
            SetPmodificado(false)
            setConfpass('')
            SetCmodificado(false)        
        }
    }

    const crearAlerta = (mensaje,color) => {
        setMensaje(mensaje)
        setColor(color)
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center bg-light p-4 rounded">
                <h1>Crea una cuenta</h1>
                <ButtonGroup aria-label="Basic example" className="IconContainer">
                    <SocialButton title = "fa-brands fa-facebook icono"/>
                    <SocialButton title = "fa-brands fa-linkedin-in icono"/>
                    <SocialButton title = "fa-brands fa-github icono"/>
                </ButtonGroup>
                <p>O usa tu email para registrarte</p>
                <Formulario 
                    onChange={validarInputs}
                    onSubmit={enviarFormulario}
                    nombre = {Nmodificado}
                    mail = {Emodificado}
                    pass = {Pmodificado}
                    confirmar = {Cmodificado}
                />
                <Alerta
                    message = {msj}
                    clr = {color}
                />
            </div>
        </>
    )
}