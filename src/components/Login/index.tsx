import * as React from 'react';

import './style.less';
const test = require('./rrr.png');
const qrcode = require('./eee.png');

class Login extends React.Component<{}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showQrcode: false,
        };
        this.openQrcode = this.openQrcode.bind(this);
        this.handleKeyLogin = this.handleKeyLogin.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    openQrcode() {
        this.setState({
            showQrcode: !this.state.showQrcode
        });
    }
    handleKeyLogin(e: any) {
        if (e.keyCode === 13) {
            alert('alert');
        }
    }
    handleLogin() {
        // this.props.history.push('/home');
    }
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
                    <div className="login-qrcode-info" onClick={this.openQrcode}>
                        {this.state.showQrcode ? 
                            <i className="icon icon-display" />
                            :
                            <i className="icon icon-qrcode" />
                        }
                    </div>
                    <div className={this.state.showQrcode ? 'login-content login-visible' : 'login-content'} >
                        <h3>Xiyou Mobile</h3>
                        <div className="login-input login-user">
                            <i className="icon icon-user"/>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="login-input login-user">
                            <i className="icon icon-key"/>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="login-verify">
                            <img src={test} />
                            <input
                                type="text"
                                placeholder="verfication code"
                                onKeyDown={e => this.handleKeyLogin(e)}
                            />
                        </div>
                        <div className="login-oauth">
                            <div className="login-oauth-icon">
                                <span className="icon icon-github" />
                            </div>
                            <p>没有账号? 试试第三方登录吧</p>
                        </div>
                        <div
                            className="login-btn"
                            onClick={this.handleLogin}
                        >
                            Get Start!
                        </div>
                    </div>
                    {
                        this.state.showQrcode ? <div className="login-qrcode">
                            <img src={qrcode} />
                            <p>请打开手机端扫一扫</p>
                        </div> : null
                    }
                </div>
            </div>
        );
    }
}

export default Login;
