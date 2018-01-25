import * as React from 'react';
// import classNames from 'classnames';

interface TipsProps {
    type: string;
    tip: string;
}

// const iconList = {
//     success: 'fa fw fa-check-circle',
//     warnning: 'fa fw fa-exclamation-circle',
//     error: 'fa fw fa-times-circle',
// };

export default class ModalTips extends React.Component<TipsProps, {}> {
    constructor(props: TipsProps) {
        super(props);
    }
    render() {
        return (
            <div>testInfo</div>
        );
    }
}
