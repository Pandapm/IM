import * as React from 'react';
import LoginBackground from './modules/LoginBackground/index';

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
        console.info('alert1');
    }
    render() {
        const prefixCls = 'login';
        return (
            <div className={`${prefixCls}-wrapper`}>
                <LoginBackground />
                <div className={`${prefixCls}-frame`}>
                    <div className={`${prefixCls}-qrcode-info`} onClick={this.openQrcode}>
                        {this.state.showQrcode ? 
                            <i className="icon icon-display" />
                            :
                            <i className="icon icon-qrcode" />
                        }
                    </div>
                    <div
                        className={this.state.showQrcode
                        ?
                        `${prefixCls}-content ${prefixCls}-visible` : `${prefixCls}-content`}
                    >
                        <h3>Xiyou Mobile</h3>
                        <div className={`${prefixCls}-input ${prefixCls}-user`}>
                            <i className="icon icon-user"/>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className={`${prefixCls}-input ${prefixCls}-user`}>
                            <i className="icon icon-key"/>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className={`${prefixCls}-verify`}>
                            <img src={test} />
                            <input
                                type="text"
                                placeholder="verfication code"
                                onKeyDown={e => this.handleKeyLogin(e)}
                            />
                        </div>
                        <div className={`${prefixCls}-oauth`}>
                            <div className={`${prefixCls}-oauth-icon`}>
                                <span className="icon icon-github" />
                            </div>
                            <p>没有账号? 试试第三方登录吧</p>
                        </div>
                        <button
                            className={`${prefixCls}-btn`}
                            onClick={this.handleLogin}
                        >
                            Get Start!
                        </button>
                    </div>
                    {
                        this.state.showQrcode ? <div className={`${prefixCls}-qrcode`}>
                            <img src={qrcode} />
                            <p>请打开手机端扫一扫</p>
                        </div> : null}
                </div>
            </div>
        );
    }
}

export default Login;
