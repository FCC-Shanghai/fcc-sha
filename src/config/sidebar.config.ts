export interface ISideBarConfig {
  title: string;
  icon: string;
  to: string;
}

const SIDEBAR_CONFIG: Array<ISideBarConfig> = [{
  title: 'About Us',
  icon: 'coffee',
  to: 'about-us'
},
{
  title: 'Contributors',
  icon: 'team',
  to: 'contributors'
},
{
  title: 'Achievements',
  icon: 'share-alt',
  to: 'achievements'
}
];

export default SIDEBAR_CONFIG;