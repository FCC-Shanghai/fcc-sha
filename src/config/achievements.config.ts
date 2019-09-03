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
    title: '2017/04 FCC 上海社区线下技术 Meetup #1',
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
    title: '2017/09 FCC 上海社区线下技术 Meetup #2',
    content: [
        {agenda: '开场；', slidesUrl: null, type: activityTypeEnum.NONE_TALK},
        {agenda: '1、函数柯理化在前端开发中的应用 - 于航；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSoDMuL0tKgB98i9cQ8SYtsmgvyNRqTmyAnKlN1xF4G9QS-Zzd1PQ6B8ymDab6knNTxdHBnIF-Pg0qq/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '2、前端框架中的路由实现 - 🐔；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vQP_7TF7FGO4nNilgh2Rwe4FeiXe9Kkm5TDzebVkPN3xo0UN2ghHvr2aoYTdJsaUnRPB1CUCxbQArr5/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '3、JS 设计模式赏析 - 荷马；', slidesUrl: null, type: activityTypeEnum.TALK},
        {agenda: '自由交流；', slidesUrl: null, type: activityTypeEnum.NONE_TALK},
    ],
    img: '/static/imgs/fcc-meetup2.jpeg'
}, {
    title: '2018/06 FCC 上海社区线下技术 Meetup #3',
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
}, {
    title: '2018/09 FCC 上海社区线下技术 Meetup #4',
    content: [
        {agenda: '开场；', slidesUrl: null, type: activityTypeEnum.NONE_TALK},
        {agenda: '1、Layers: a case study of CSS optimization - 🐑🐑🐑(吴名扬)；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRIsRF2Kz0to_0OJ_vrS4MODvj__SLtRWlXGdqt38VbahxXMHmGHyd5QvsxSCRlxM0ZWjV-szjI3qEy/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '2、webRTC的场景创新和体验优化 - 韦躐晟；', slidesUrl: 'https://drive.google.com/file/d/1t4rfAeYmmpdPO-f4vSgJUzA5J8HKq5a6/view?usp=sharing', type: activityTypeEnum.TALK},
        {agenda: '3、点融CIS基础设施 - 林选伟；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vTielVNY-uGXQduStugzXq4jPepTDns66AbtgyL3DNKmzx48W36Ngx_2QI438XUJFQ2C35aH7UWZF-Z/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '4、函数式语言: ClosureScript 在前端开发的体验 - 题叶；', slidesUrl: 'https://gist.github.com/jiyinyiyong/561cd06ad1a1537dc8bcc15109bcf1cc', type: activityTypeEnum.TALK},
        {agenda: '5、在错误中寻找正确的方向: 应用升级和重构之路 - WiWi；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vQ8wQG-Ja13GbjIrkVvBtnMikqGIUsnQhuzQHtj6RKdn1tUrFMLPaYRFAVfVY2lRGOOrTZc_2_92ei5/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '自由交流 合影留念；', slidesUrl: null, type: activityTypeEnum.NONE_TALK}
    ],
    img: '/static/imgs/fcc-meetup4.JPG'
}, {
    title: '2019/07 FCC 上海社区线下技术 Meetup #5',
    content: [
        {agenda: '开场；', slidesUrl: null, type: activityTypeEnum.NONE_TALK},
        {agenda: '1、Serverless 与前端研发模式升级 - 于航；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRIsRF2Kz0to_0OJ_vrS4MODvj__SLtRWlXGdqt38VbahxXMHmGHyd5QvsxSCRlxM0ZWjV-szjI3qEy/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '2、前端黑科技之 PWA - 赵俊峰；', slidesUrl: 'https://drive.google.com/file/d/1t4rfAeYmmpdPO-f4vSgJUzA5J8HKq5a6/view?usp=sharing', type: activityTypeEnum.TALK},
        {agenda: '3、Rust - A JavaScript Programmer Perspective - 🐔；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRs2-P8xsKmAJmJqpHrwO_5AjzDFBzd0-YUjYaePaoq-N8St09Ipaqik5XqPhPhgLLkX78d2_oGcnxl/pub?start=false&loop=false&delayms=3000&slide=id.g5df0e74252_0_0', type: activityTypeEnum.TALK},
        {agenda: '4、打造 20000 Star 的前端开源项目；', slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vTuqHnzZHzy4dvznUtD9bFAA2VkR5xxBH6U3iaG5z9JSzKespjK9QA-g6EDd5Gq8kU6NUTgpHQBXIXu/pub?start=false&loop=false&delayms=3000', type: activityTypeEnum.TALK},
        {agenda: '自由交流 合影留念；', slidesUrl: null, type: activityTypeEnum.NONE_TALK}
    ],
    img: '/static/imgs/fcc-meetup5.JPG'
}


];

export default ACHIEVEMENTS;
