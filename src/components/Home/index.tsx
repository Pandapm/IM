import * as React from 'react';

import TopLeft from './modules/topLeft';
import TopRight from './modules/topRight';
import './style.less';

class Home extends React.Component<{}, any> {
    render() {
        return (
            <div className="xy-home">
                <div className="xy-home-top">
                    <div className="xy-home-topleft">
                        <TopLeft />
                    </div>
                    <div className="xy-home-topright">
                        <TopRight />
                    </div>
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
