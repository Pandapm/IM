import * as React from 'react';

import './style.less';

export default function TopLeft() {
    return (
        <div className="topleft-wrapper">
            <div>
                <span>Monday</span>
                <span>March</span>
            </div>
            <div>
                Good Afternoon!
            </div>
            <div>
                Hello Yuan! There is your <a>schedule</a>!
            </div>
        </div>
    );
}
