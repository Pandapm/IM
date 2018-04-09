import * as React from 'react';

import TopLeft from './modules/topLeft';
import TopRight from './modules/topRight';
import './style.less';

class Home extends React.Component<{}, any> {
    render() {
        const prefixCls = 'xy-home';
        return (
            <div className={`${prefixCls}`}>
                <div className={`${prefixCls}-top`}>
                    <div className={`${prefixCls}-top-left`}>
                        <TopLeft />
                    </div>
                    <div className={`${prefixCls}-top-right`}>
                        <TopRight />
                    </div>
                </div>
                <div className={`${prefixCls}-search`}>
                    <span className="icon icon-ion-ios-search"/>
                </div>
                <div className={`${prefixCls}-bottom`}>
                    <div className={`${prefixCls}-column`}>column</div>
                </div>
            </div>
        );
    }
}

export default Home;
