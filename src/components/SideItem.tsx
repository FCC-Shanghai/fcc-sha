import * as React from 'react';
import { Link } from 'react-router-dom';
import {Menu, Icon} from 'antd';
import {ISideBarConfig} from '@/config/sidebar.config';

interface IProps extends ISideBarConfig { };

export const SideItem = (props: IProps) => (
  <Menu.Item {...props}>
    <Link to={props.to}>
      <Icon type={props.icon} style={{ fontSize: 16 }} />
      {props.title}
    </Link>
  </Menu.Item>
);