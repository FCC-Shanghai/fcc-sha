import * as React from 'react';

type IState = {
  loaded: boolean;
}

type IProps = {
  src: string;
  flushTimeout?: number;
  width?: number | string;
  height?: number | string;
  alt?: string;
}

const FALLBACK_IMG = '/static/imgs/EastPerl.svg'; 
export default class LazyImg extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  /**
   * Refresh the component to update the loaded image
   */
  public onImgLoaded = () => {

    let { flushTimeout } = this.props;

    if (flushTimeout) {
      setTimeout(() => {
        this.setState({
          loaded: true
        });
      }, flushTimeout);
    } else {
      this.setState({
        loaded: true
      });
    }
  }

  render() {
    let { loaded } = this.state;
    let { src, width, height, alt} = this.props;
    return (
      <>
        {
          loaded ?
            <img src={src} width={width} height={height} alt={alt} />
            :
            <div>
              <img src={src} style={{ display: 'none' }} onLoad={this.onImgLoaded} />
              <img src={FALLBACK_IMG} width={width} height={height} alt={alt} />
            </div>
        }
      </>
    )
  }
}