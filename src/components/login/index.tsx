import * as React from 'react';
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
                    <h3>login</h3>
                </div>
            </div>
        );
    }
}

export default Login;
