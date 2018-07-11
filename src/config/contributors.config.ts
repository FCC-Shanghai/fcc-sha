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
  }
];

export default CONTRIBUTORS;