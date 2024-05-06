import Alert from 'react-bootstrap/Alert';

const Alerta = ({message,clr}) => {

    return (    
        <Alert key = {clr} variant={clr} className='mt-3 m'>{message}</Alert>
    )
    
}

export default Alerta;