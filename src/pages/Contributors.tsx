import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import Contributor from '@Components/Contributor';
import userNameList, { IContributor } from '@/config/contributors.config';
import { Col, Row } from 'antd';

type IState = {
  users: Array<IContributor>;
};

const USER_API_BASE_PATH = 'https://api.github.com/users/';

export default class Contributors extends React.PureComponent<any, IState> {
  constructor(props: void) {
    super(props);
    this.state = {
      users: userNameList
    };
  }

  getContributors(username?: string): Promise<Array<AxiosResponse>> {
    let promiseList = userNameList.map((user) => {
      return axios.get(`${USER_API_BASE_PATH}${user.username}`);
    });
    return axios.all(promiseList);
  }

  componentDidMount() {
    this.getContributors().then((res) => {
      if (!res || !res.length) {
        return;
      }
      this.setState({
        users: res.map((user, index) => {
          if (user && user.data) {
            return Object.assign({}, user.data, userNameList[index]);
          } else {
            return user
          }
        })
      })
    })
  }

  render() {
    const users = this.state.users.map((user, index) => {
      return (
        <Col sm={{ span: 8 }} xs={{ span: 24 }} key={index}>
          <Contributor user={user} />
        </Col>
      );
    });
    return (
      <div className="sha-contributors">
        <div className="sha-title">Contributors</div>
        <Row gutter={16} className="sha-contributors-wall">
          {users}
        </Row>

        <div className="sha-title">
          如何成为一位贡献者
        </div>
        <p>
          成为一位项目贡献者非常简单, 这里有一个链接, 相信你能在里面找到你想要的答案。
          <a href="https://github.com/FCC-Shanghai/fcc-sha/blob/master/README.md" target="_blank" rel="noopener noreferrer">链接</a>
        </p>
      </div>
    )
  }

}