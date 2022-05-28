import { useNavigate } from "react-router-dom"


export default function LoginIconBeforeLogin() {
    const navigate =useNavigate();

    function tologinPage(){    
        navigate("/login")
    }   
    return (
        <div onClick={tologinPage}>
            <img src={require("./img/login.png")} alt="login" width="80%"/>
            </div>
    )
}
