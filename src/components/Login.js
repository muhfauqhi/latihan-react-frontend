import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div style={{ marginTop: "200px" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input className="form-control" placeholder="Username" value={username} onChange={onChangeUsername}></input>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={onChangePassword}></input>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <Link to='/register'>Register?</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login