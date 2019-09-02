export default () => import(`./${window.navigator.language || 'zh-CN'}.json`);
