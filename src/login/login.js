import React, { Component } from 'react';
import { LcsTextField } from '../shared/TextField';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {userName: null, password: null}
    }

    
    
    render() {
        return (
            <div className="login-container">
                <form>
                    <div className="login-input-container">
                        Login
                        {LcsTextField('username', 'Username', 'outlined', this.state.userName)}   
                        {LcsTextField('password', 'Password', 'outlined', this.state.userName)}          
                        <button className='login-button'>login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;