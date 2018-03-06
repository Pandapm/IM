import Login from '../components/Login';

type XMenu = {
    icon?: string,
    label: string,
    link: string,
    comp: any,
};

export const menuList: Array<XMenu> = [
    {
        icon: 'icon icon-bubbles3',
        label: 'IM聊天',
        link: '/chat',
        comp: Login
    },
    {
        icon: 'icon icon-file-text2',
        label: 'WIKI信息',
        link: '/wiki',
        comp: Login
    },
    {
        icon: 'icon icon-fire',
        label: '相关动态',
        link: '/active',
        comp: Login
    },
    {
        icon: 'icon icon-download2',
        label: '应用下载',
        link: '/download',
        comp: Login
    },
    {
        icon: ' icon icon-wink',
        label: '成员信息',
        link: '/member',
        comp: Login
    }
];

export const menuFeature: Array<XMenu> = [
    {
        icon: 'icon icon-stack',
        label: '我的wiki',
        link: '/manage/wiki',
        comp: Login
    },
    {
        icon: 'icon icon-upload2',
        label: '应用上传',
        link: '/manage/application',
        comp: Login
    }
];

export const infoFeature: Array<XMenu> = [
    {
        icon: 'icon icon-delicious',
        label: '动态管理',
        link: '/manage/active',
        comp: Login
    },
    {
        icon: 'icon icon-users',
        label: '成员管理',
        link: '/manage/users',
        comp: Login
    },
    {
        icon: 'icon icon-library',
        label: '信息管理',
        link: '/manage/info',
        comp: Login
    },
    {
        icon: 'icon icon-magic-wand',
        label: '任务分发',
        link: '/manage/plan',
        comp: Login
    }
];
