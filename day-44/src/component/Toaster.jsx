import { ToastContainer,toast } from "react-toastify";

export default function Toaster(){
    const notify=()=>toast('goood ');
    return(
        <div>
            <button onClick={notify}> saved</button>
            <ToastContainer/>
        </div>
    );
}