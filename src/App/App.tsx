import * as React from 'react';
import './styles/style.less';

class App extends React.Component {
    render() {
        return (
            <div className="xm-wrapper">
                <div className="xm-wrapper-inner">
                    <div id="xm-content">
                        <div className="xm-wiki" />
                        <div className="xm-active" />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
