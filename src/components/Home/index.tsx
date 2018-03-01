import * as React from 'react';
import './style.less';

class Home extends React.Component<{}, any> {
    render() {
        return (
            <div className="xy-home">
                <div className="xy-home-top">
                    <div className="xy-home-topleft">topleft</div>
                    <div className="xy-home-topright">topright</div>
                </div>
                <div className="xy-home-search">
                    <span className="icon icon-ion-ios-search"/>
                </div>
                <div className="xy-home-bottom">
                    <div className="xy-home-column">column</div>
                </div>
            </div>
        );
    }
}

export default Home;
