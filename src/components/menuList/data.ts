type XMenu = {
    icon?: string,
    label: string,
    link: string,
};
export const menuList: Array<XMenu> = [
    {
        icon: 'fa fa-fw fa-comments-o',
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
    }
];

export const menuFeature: Array<XMenu> = [
    {
        icon: 'fa fa-fw fa-file-text',
        label: '我的wiki',
        link: '/manager/wiki',
    },
    {
        icon: 'fa fa-fw fa-cogs',
        label: '动态管理',
        link: '/manager/active',
    },
    {
        icon: 'fa fa-fw fa-cloud-upload',
        label: '应用上传',
        link: '/manager/application',
    }
];
