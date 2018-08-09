import * as React from 'react';

import './style.less';

class BottomList extends React.PureComponent<{}, any> {
    render() {
        const prefixCls = 'xy-bottom';

        return (
            <div className={`${prefixCls}-wrapper`}>
                column
            </div>
        );
    }
}

export default BottomList;
