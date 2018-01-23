type XMenu = {
    icon?: string,
    label: string,
    link: string,
};
const menuList: Array<XMenu> = [
    {
        label: 'wiki',
        link: '/wiki',
    },
    {
        label: '相关动态',
        link: '/active',
    },
    {
        label: '应用下载',
        link: '/download',
    },
    {
        label: '成员信息',
        link: '/member',
    },
    {
        label: '关于我们',
        link: '/about',
    },
    {
        label: 'Bug反馈',
        link: '/feedBack',
    }
];

export default menuList;
