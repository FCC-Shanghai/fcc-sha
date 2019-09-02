import React, { Component } from 'react';
import './styles/App.scss';
import FccSha from '@Components/Router';
import { LocaleContextType, LocaleContext } from '@/Context';
import locale from '@/locale';

export default class App extends Component<any, LocaleContextType> {
  static contextType = LocaleContext;

  constructor(props: any) {
    super(props);
    this.state = {
      locale: {}
    };
  }

  async componentDidMount() {
    this.setState({
      locale: await locale()
    });
  }

  render() {
    const { locale } = this.state; 

    return (
      <LocaleContext.Provider value={{ locale }}>
        <FccSha />
      </LocaleContext.Provider>
    )  
  }
};
