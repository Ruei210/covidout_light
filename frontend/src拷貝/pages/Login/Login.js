import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

//可以去共用 global
const api = axios.create({
    baseURL: 'http://127.0.0.1:567'
})

export default function Login({ get }) {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    function handleChange(e) {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        api.post('/login',
            new URLSearchParams(login).toString()
        )
            .then((response) => {
                get(response.data[0]);
                if (response.data[0].loggedin === true) {
                    navigate('/userView', { state: response.data[0] })
                }
            })
    }
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <form onSubmit={handleSubmit} className="w-100 mx-auto card shadow py-4 px-4" style={{ maxWidth: '340px' }}>
                <div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-control" type="email" name='email' id='email' value={login.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">密碼</label>
                        <input className="form-control" type="password" name="password" id="password" value={login.password} onChange={handleChange} />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary px-5" type="submit">登入</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
