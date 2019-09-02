import * as React from 'react';
import Carousel from 'antd/es/carousel';
import { LocaleContext } from '@/Context';

export default class AboutUs extends React.PureComponent {
  render() {
    return (
      <LocaleContext.Consumer>
        {({ locale }) => (
        <div className="sha-about-us">
          <div className="sha-title">{ locale['pages-about-a'] }</div>
          <div className="sha-carousel">
            <Carousel autoplay>
              <div><img src="/static/imgs/hongkong.png" alt="Hong Kong"/></div>
              <div><img src="/static/imgs/guangzhou.png" alt="Guang Zhou"/></div>
              <div><img src="/static/imgs/suzhou.png" alt="Su Zhou"/></div>
              <div><img src="/static/imgs/chengdu.png" alt="Cheng Du"/></div>
              <div><img src="/static/imgs/shanghai.jpeg" alt="Shang Hai"/></div>
            </Carousel>
          </div>
          <div className="sha-who-are-we">
            <div className="sha-title">{ locale['pages-about-b'] }</div>
            <p className="sha-intro-content">
              { locale['pages-about-d'] }
            </p>
            <p className="sha-intro-content">
              { locale['pages-about-e'] }
            </p>
          </div>
          <div className="sha-why-join">
            <div className="sha-title">{ locale['pages-about-c'] }</div>
            <p className="sha-intro-content">
              { locale['pages-about-f'] }
            </p>
            <p className="sha-intro-content">
              { locale['pages-about-g'] }
            </p>
          </div>
        </div>
      )}
      </LocaleContext.Consumer>
    )
  }
}
