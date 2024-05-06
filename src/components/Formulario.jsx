import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({onChange,onSubmit,nombre,mail,pass,confirmar}) => {

    return (
        <Form onSubmit={onSubmit} className='d-flex flex-column align-items-center'>
            <Form.Group className='mb-3'>
                {nombre ? (
                    <Form.Control type="text" name="nombre" placeholder="Nombre" onChange={onChange}/>
                ):(
                    <Form.Control type="text" name="nombre" placeholder="Nombre" onChange={onChange} value=""/>  
                )
                }
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className='mb-3'>
                {mail ? (
                    <Form.Control type="text" name="email" placeholder="tuemail@ejemplo.com" onChange={onChange}/>
                ):(
                    <Form.Control type="text" name="email" placeholder="tuemail@ejemplo.com" onChange={onChange} value=""/>  
                )
                }
            </Form.Group>
            <Form.Group className='mb-3'>
                {pass ? (
                    <Form.Control type="text" name="pass" placeholder="Contraseña" onChange={onChange}/>
                ):(
                    <Form.Control type="text" name="pass" placeholder="Contraseña" onChange={onChange} value=""/>  
                )
                }
            </Form.Group>
          <Form.Group className='mb-3'>
                {confirmar ? (
                    <Form.Control type="text" name="validador" placeholder="Confirma tu contraseña" onChange={onChange}/>
                ):(
                    <Form.Control type="text" name="validador" placeholder="Confirma tu contraseña" onChange={onChange} value=""/>  
                )
                }
          </Form.Group>
          <div className='px-6'>
            <Button variant="success" type="submit" className='btn-block'>
                Submit
            </Button>
          </div>
        </Form>
      );
}

export default Formulario;