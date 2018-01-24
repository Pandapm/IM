import * as React from 'react';
import test from '../';
import './style.less';

class Login extends React.Component {
    render() {
        return (
            <div className="login-wrapper">
                <ul>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                            <li key={index} className={`login-tri login-tri-${item}`} /> 
                        ))  
                    }
                </ul>
                <div className="login-frame">
                    <h3>Xiyou Mobile</h3>
                    <div className="login-input login-user">
                        <i className="fa fw fa-user-circle-o"/>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="login-input login-user">
                        <i className="fa fw fa-key"/>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="login-verify">
                        <img src={test} />
                        <input />
                    </div>
                    <div className="login-btn">
                        Get Start
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
