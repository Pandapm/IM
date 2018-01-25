type XMenu = {
    icon?: string,
    label: string,
    link: string,
};
const menuList: Array<XMenu> = [
    {
        icon: 'fa fa-fw fa-comments',
        label: 'IM',
        link: '/chat',
    },
    {
        icon: 'fa fa-fw fa-file-code-o',
        label: 'wiki',
        link: '/wiki',
    },
    {
        icon: 'fa fa-fw fa-coffee',
        label: '相关动态',
        link: '/active',
    },
    {
        icon: 'fa fa-fw fa-code',
        label: '应用下载',
        link: '/download',
    },
    {
        icon: 'fa fa-fw fa-university',
        label: '成员信息',
        link: '/member',
    },
    {
        icon: 'fa fa-fw fa-users',
        label: '关于我们',
        link: '/about',
    },
    {
        icon: 'fa fa-fw fa-bug',
        label: 'Bug反馈',
        link: '/feedBack',
    }
];

export default menuList;
