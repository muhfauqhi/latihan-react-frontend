import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const changeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div style={{ marginTop: "200px" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" placeholder="Username" value={username} onChange={changeUsername}></input>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" placeholder="Email" value={email} onChange={changeEmail}></input>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={changePassword}></input>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <button className="btn btn-primary">Register</button>

                                    </div>
                                    <div className="col-md-6 text-right">
                                        <Link to='/login'>Already have Account?</Link>
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

export default Register