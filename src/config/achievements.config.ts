export interface IAchievement {
    title: string;
    content: Array<IAchievementContent>;
    img: string;
}

export interface IAchievementContent {
    agenda: string;
    slidesUrl: string | null;
    type: number;
}

/**
 * Definition of activity event type
 */
export var activityTypeEnum = {
    'NONE_TALK': 1,
    'TALK': 2
}

const ACHIEVEMENTS: Array<IAchievement> = [{
    title: '2017/04 FCC上海前端技术群线下Meetup #1',
    content: [
        {agenda: '开场；', slidesUrl: null, type: activityTypeEnum.NONE_TALK},
        {agenda: '1、造轮子-简单的 MVVM 框架核心 - 于航；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vT1H7zXGGdkd008cWJmnEbxufEzQZ5m5yzS3IyK7c-rxJEpIM04bkSDtZcRc9WBi_tCtBc2ZUBCCoe3/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '2、SSO 核心原理 - Kenneth Choi；', slidesUrl: null, type: activityTypeEnum.TALK},
        {agenda: '3、RESTful API 架构设计 - 🐔；', slidesUrl: null, type: activityTypeEnum.TALK},
        {agenda: '4、Bigpipe 技术的前端应用 - 糖爸；', slidesUrl: null, type: activityTypeEnum.TALK},
        {agenda: '自由交流；', slidesUrl: null, type: activityTypeEnum.NONE_TALK},
    ],
    img: '/static/imgs/fcc-meetup1.jpeg'
}, {
    title: '2017/09 FCC上海前端技术群线下Meetup #2',
    content: [
        {agenda: '开场；', slidesUrl: null, type: activityTypeEnum.NONE_TALK},
        {agenda: '1、函数柯理化在前端开发中的应用 - 于航；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSoDMuL0tKgB98i9cQ8SYtsmgvyNRqTmyAnKlN1xF4G9QS-Zzd1PQ6B8ymDab6knNTxdHBnIF-Pg0qq/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '2、前端框架中的路由实现 - 🐔；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vQP_7TF7FGO4nNilgh2Rwe4FeiXe9Kkm5TDzebVkPN3xo0UN2ghHvr2aoYTdJsaUnRPB1CUCxbQArr5/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '3、JS 设计模式赏析 - 荷马；', slidesUrl: null, type: activityTypeEnum.TALK},
        {agenda: '自由交流；', slidesUrl: null, type: activityTypeEnum.NONE_TALK},
    ],
    img: '/static/imgs/fcc-meetup2.jpeg'
}, {
    title: '2018/06 FCC上海前端技术群线下Meetup #3',
    content: [
        {agenda: '开场；', slidesUrl: null, type: activityTypeEnum.NONE_TALK},
        {agenda: '1、闲话CDN - 天哥；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vTla-WWRGFeeeECqvZOsR7DZrFmcwy5Xdb0H6bm5SFOHDA8MCL4I7fjMa6lbXiOQLen3iDnFxMYK8DL/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '2、聊聊 Deno 中的技术细节 - 嘤嘤；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vTWUFdQwalNzvcsblnzFgE7nAMdgGz5WQfmm8PmIeTS1LDGI9UUWYEXwv7Ima4BHO1aPdLBrelm5Tes/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '3、浅谈前端状态管理 - 长辉；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vROwWvA4Ux9C-CeyyEME1kJRe9TJ5xBYEeYM9xMtYWse9jBZbPecTE9q_TudG51DRslfwHL6QM1b0Zi/pub?start=false&loop=false&delayms=3000&slide=id.p1', type: activityTypeEnum.TALK},
        {agenda: '4、HTTPS & WHY - 🐔；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vScGJv0Ryfevsc27c_YR-9U_pPyQuKh4kIxMxcp4GwANpooq3QN4OvzSKdnNND48QCStEf_im3Qy7Mm/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '5、Javascript模块的演化之路 - 陈胜；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRYZQiMoYTbCYmPNpDZsYo9kYrAh3SeQ3Ub0SfBz4bSWCOyCDJ2TiU_pk1Yn7Jwzs7DpN1tavRywicF/pub?start=false&loop=false&delayms=3000&slide=id.p1', type: activityTypeEnum.TALK},
        {agenda: '自由交流 合影留念；', slidesUrl: null, type: activityTypeEnum.NONE_TALK}
    ],
    img: '/static/imgs/fcc-meetup3.jpeg'
}];

export default ACHIEVEMENTS;
