import * as React from 'react';

import './style.less';

const name = 'Yuan';

export default function TopLeft() {
    const prefixCls = 'topleft';
    const timeLine = () => {
        if (new Date()) {
            console.info(new Date());
        }
    };
    timeLine();
    return (
        <div className={`${prefixCls}-pre`}>
            <div className={`${prefixCls}-pre-top`}>
                <span>Monday</span>
                <span>March 8</span>
            </div>
            <div className={`${prefixCls}-pre-middle`}>
                Good Afternoon!
            </div>
            <div className={`${prefixCls}-pre-bottom`}>
                {`Hello ${name}! There is your `}
                <div className={`${prefixCls}-pre-bottom-underline`}>
                    schedule
                </div>!
            </div>
        </div>
    );
}
