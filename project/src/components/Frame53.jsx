import { Stars } from "./Stars"
function Frame53() {
    return(
        <div className="frame">
        <div className="Frame-box">
            <img src="speaker.png" alt="" />
            <div className="Frame-text">
                <h1> JBL bar 2.1 deep bass</h1>
                <p>$11,70</p>

                <button><b> Add a cart </b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i className="bi bi-cart bg-warning rounded-circle"></i> </button>
            </div>

        </div>
        <div className="Frame-right-box">
            <div className="south">
            <img src="Control.png" alt="" />
            <div className="Frame-text-right">
                <h1> Play Game</h1>
                <p>$11,70</p>

               
            </div>
            </div>
            <div className="south">
            <img src="Frame30.png" alt="" />
            <div className="Frame-text-right">
                <h1> Play Game</h1>
                <p>$11,70</p>
                <Stars/>
                

               
            </div>
            </div>

        </div>
        </div>
    )
    
}

export default Frame53