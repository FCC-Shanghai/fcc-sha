export interface IContributor {
  username: string;
  nickname: string;
  hobbies: Array<string>;
  cup: string; // ?????? 
}

export const CONTRIBUTORS: Array<IContributor> = [
  {
    username: 'bastarder',
    nickname: '小杰',
    hobbies: ['吃', '喝', '玩', '乐'],
    cup: 'A',
  },
  {
    username: 'JeremyWuuuuu',
    nickname: '鸡哥',
    hobbies: ['代码', '咖啡'],
    cup: 'A',
  },
  {
    username: 'Becavalier',
    nickname: '航妹',
    hobbies: ['女装', '大佬', '科学家'],
    cup: 'C++',
  },
  {
    username: 'Roxyhuang',
    nickname: '搓桑',
    hobbies: ['学习', '钻研'],
    cup: 'A++'
  },
  {
    username: 'kerentang',
    nickname: '托尔老师',
    hobbies: ['遛狗', '撸代码'],
    cup: '未知'
  },
  {
    username: 'kongwsh',
    nickname: '铁T',
    hobbies: ['铲屎', '拍罐头', '嘻嘻'],
    cup: '牛油果'
  },
  {
    username: 'Tennen',
    nickname: '十元',
    hobbies: ['撸码', '撸猫'],
    cup: 'A--'
  },
  {
    username: 'alimjanqadir',
    nickname: '阿力木江',
    hobbies: ['Andorid', 'Java'],
    cup: '未知'
  },
  {
    username: 'EchoLoveCoding',
    nickname: 'Echo',
    hobbies: ['撸码'],
    cup: '未知'
  },
  {
    username: 'yiuyiu',
    nickname: '嘻嘻',
    hobbies: ['学习', '女装'],
    cup: 'A'
  },
  {
    username: 'lightbrotherV',
    nickname: '光兄',
    hobbies: ['不能吃辣'],
    cup: '0'
  },
  
];

export default CONTRIBUTORS;