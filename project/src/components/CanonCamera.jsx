import Carousel from 'react-bootstrap/Carousel';
import SharButton from './SharButton';
import ProgressBar from 'react-bootstrap/ProgressBar';



function CanonCamera() {
    return (


        <div className='slider'>
            <div className='slider-left'>
                <h1>Canon
                    camera</h1>
                    <SharButton/>
                    
                        <div className='bara'>
                        <ProgressBar>
                        
                     <ProgressBar animated now={45}/>
                     </ProgressBar>
                     </div>
    
    


            </div>
            <img className='w-50 ' src="Digital-SLR-Camera-PNG-Transparent-Image.png" alt="" />

           
        </div>
    );
}

export default CanonCamera;
