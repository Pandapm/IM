type XMenu = {
    icon?: string,
    label: string,
    link: string,
};

export const menuList: Array<XMenu> = [
    {
        icon: 'icon icon-bubbles3',
        label: 'IM聊天',
        link: '/menu/chat',
    },
    {
        icon: 'icon icon-file-text2',
        label: 'WIKI信息',
        link: '/menu/wiki',
    },
    {
        icon: 'icon icon-fire',
        label: '相关动态',
        link: '/menu/active',
    },
    {
        icon: 'icon icon-download2',
        label: '应用下载',
        link: '/menu/download',
    },
    {
        icon: ' icon icon-wink',
        label: '成员信息',
        link: '/menu/member',
    }
];

export const menuFeature: Array<XMenu> = [
    {
        icon: 'icon icon-stack',
        label: '我的wiki',
        link: '/menu/manage/wiki',
    },
    {
        icon: 'icon icon-upload2',
        label: '应用上传',
        link: '/menu/manage/application',
    }
];

export const infoFeature: Array<XMenu> = [
    {
        icon: 'icon icon-delicious',
        label: '动态管理',
        link: '/menu/manage/active',
    },
    {
        icon: 'icon icon-users',
        label: '成员管理',
        link: '/menu/manage/users',
    },
    {
        icon: 'icon icon-library',
        label: '信息管理',
        link: '/menu/manage/info',
    },
    {
        icon: 'icon icon-magic-wand',
        label: '任务分发',
        link: '/menu/manage/plan'
    }
];
