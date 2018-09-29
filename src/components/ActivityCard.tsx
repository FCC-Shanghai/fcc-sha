import * as React from 'react';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Card from 'antd/es/card';
import Timeline from 'antd/es/timeline';
import { activityTypeEnum, IAchievement } from '@/config/achievements.config';
import LazyImg from './LazyImg';

const IMAGE_PLACEHOLDER = '/static/imgs/EastPerl.svg';

interface IProps extends IAchievement { }

interface IState { } // No state

export default class ActivityCard extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const {title, img} = this.props;
    const timelineContent = this.props.content.map((item, index) => {
      switch(item.type) {
        case activityTypeEnum.NONE_TALK:
          return (
            <Timeline.Item key={index}>
              <p className="timeline-text">
                {item.agenda}
              </p>
            </Timeline.Item>
          )
        case activityTypeEnum.TALK:
          return (
            <Timeline.Item key={index}>
              <a target="_blank" rel="noopener" href={item.slidesUrl || '#'}>{item.agenda}</a>
            </Timeline.Item>)
        default:
          return (
            <Timeline.Item key={index}>
              <div>Error to get content</div>
            </Timeline.Item>
          )
      }
    });
    
    return (
      <Card className="sha-activity-card" title={title}>
        <Row>
          <Col span={10}>
            <LazyImg src={img} placeholder={IMAGE_PLACEHOLDER} alt="活动照片" width="100%"/>
          </Col>
          <Col offset={2} span={12}>
            <Timeline>
              {timelineContent}
            </Timeline>
          </Col>
        </Row>
      </Card>
    )
  }
}