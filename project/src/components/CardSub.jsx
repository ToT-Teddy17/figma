
import Card from 'react-bootstrap/Card';
import { Stars } from './Stars';

function Cardheseg(props){
    console.log(props)
    return (
        

        <Card className='col-2  cardbody'>
            <Card.Img  src={props.img} />
            <h4><Card.Title>{props.title}</Card.Title></h4>
            <Card.Body>
                <div className="d-flex">
                <div >
                <div className='d-flex justify-content-between'>
                <Card.Text>{props.rating}</Card.Text><i class="bi bi-cart bg-warning rounded-circle"></i></div>
                <Stars/>
                </div>
                
             
                </div>
            </Card.Body>
        </Card>
        
    );
};

export default Cardheseg;