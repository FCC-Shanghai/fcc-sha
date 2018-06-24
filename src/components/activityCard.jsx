import React from 'react'
import { Row, Col, Card, Timeline } from 'antd'
import { activityTypeEnum } from '../config/achievements.config';

export default class ActivityCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            content: props.content,
            img: props.img
        }
    }

    render() {
        const timelineContent = this.state.content.map((item, index) => {

            switch (item.type) {
                case activityTypeEnum.NONE_TALK:
                    return (
                        <Timeline.Item key={index}>
                            <p className="timeline-text">
                                {item.agenda}
                            </p>
                        </Timeline.Item>)
                case activityTypeEnum.TALK:
                    return (
                        <Timeline.Item key={index}>
                            <a target="_blank" rel="noopener" href={item.slidesUrl || 'javascript:void(0)'}>{item.agenda}</a>
                        </Timeline.Item>)
                default:
                    return (
                        <Timeline.Item key={index}>
                            <div>Error to get content</div>
                        </Timeline.Item>)
            }
            
        });

        return (
            <Card className="sha-activity-card" title={this.state.title} >
                <Row>
                    <Col span={10}>
                        <img alt="活动照片" width="100%" src={this.state.img} />
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