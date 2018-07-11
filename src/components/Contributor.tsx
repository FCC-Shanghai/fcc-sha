import '@/styles/contributors.scss';
import * as React from 'react';
import { Card, Tag } from 'antd';
import { IContributor } from '@/config/contributors.config';

interface IUser extends IContributor {
  avatar_url?: string;
};

type IProps = {
  user: IUser;
}

const FALLBACK_IMG = '/static/imgs/EastPerl.svg';
const COLOR_TABLE = ["pink", "red", "orange", "green", "cyan", "blue", "purple"];

export default class Contributor extends React.PureComponent<IProps, any> {
  render() {
    const {user} = this.props;
    return (
      <Card className="sha-contributor">
        <a target="_blank" href={"https://github.com/" + user.username} rel="noopener noreferrer">
          <img className="sha-logo" alt="" src={user.avatar_url || FALLBACK_IMG} />
          <div className="sha-info">
            <div className="sha-nickname">{user.nickname}</div>
            <div className="sha-cup">罩杯: {user.cup}</div>
            <div className="sha-hobbies">
              {
                user.hobbies.map(
                  (hobby, i) => (
                    <Tag key={i} color={COLOR_TABLE[Math.floor(Math.random() * 7)]}>{hobby}</Tag>
                  )
                )
              }
            </div>
          </div>
        </a>
      </Card>
    )
  }
}