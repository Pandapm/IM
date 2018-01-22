import * as React from 'react';
import './style.less';

class App extends React.Component {
    render() {
        return (
            <div className="xm-wrapper">
                <div className="xm-wrapper-inner">
                    <div id="xm-content">
                        <div className="xm-wiki" />
                        <div className="xm-active" />
                        <div className="xm-logo">
                            <span id="xm-logo-font">Xiyou Mobile</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
