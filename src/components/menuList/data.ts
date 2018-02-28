type XMenu = {
    icon?: string,
    label: string,
    link: string,
};
export const menuList: Array<XMenu> = [
    {
        icon: 'icon icon-bubbles3',
        label: 'IM聊天',
        link: '/chat',
    },
    {
        icon: 'icon icon-file-text2',
        label: 'WIKI信息',
        link: '/wiki',
    },
    {
        icon: 'icon icon-fire',
        label: '相关动态',
        link: '/active',
    },
    {
        icon: 'icon icon-download2',
        label: '应用下载',
        link: '/download',
    },
    {
        icon: ' icon icon-wink',
        label: '成员信息',
        link: '/member',
    },
    {
        icon: 'icon icon-hipster',
        label: '关于我们',
        link: '/about',
    }
];

export const menuFeature: Array<XMenu> = [
    {
        icon: 'icon icon-stack',
        label: '我的wiki',
        link: '/manager/wiki',
    },
    // {
    //     icon: 'icon icon-delicious',
    //     label: '动态管理',
    //     link: '/manager/active',
    // },
    // {
    //     icon: 'icon icon-users',
    //     label: '成员管理',
    //     link: '/manager/users',
    // },
    // {
    //     icon: 'icon icon-delicious',
    //     label: '信息管理',
    //     link: '/manager/info',
    // },
    {
        icon: 'icon icon-upload2',
        label: '应用上传',
        link: '/manager/application',
    }
];
