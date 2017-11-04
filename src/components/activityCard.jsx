import React from 'react'
import { Row, Col, Card, Timeline } from 'antd'

export default class ActivityCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            content: props.content,
            img: props.img
        }
    }

    render () {
        const timelineContent = this.state.content.map((item, index) => {
            return <Timeline.Item key={index}><p className="timeline-text">{item}</p></Timeline.Item>
        })

        return (
            <Card className="sha-activity-card" title={this.state.title} >
                <Row>
                    <Col span={10}>
                        <img width="100%" src={this.state.img} />
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