import * as React from 'react';
import ActivityCard from '@Components/ActivityCard';
import Payload from '@/config/achievements.config';
import Card from 'antd/es/card';
import { LocaleContext } from '@/Context';

export default class Achievements extends React.PureComponent {
  render() {
    const element = Payload.map((item, index) => {
        return <ActivityCard key={index} title={item.title} content={item.content} img={item.img}/>
    })

    return (
      <LocaleContext.Consumer>
        {({ locale }) => (
        <div className="sha-achievements"> 
          <div className="sha-title">{ locale['pages-achievement-a'] }</div>
          {element}
          <Card>
            <p style={{textAlign: "center"}}>{ locale['pages-achievement-b'] }</p>
          </Card>
        </div>
        )}
      </LocaleContext.Consumer>
    )
  }
}