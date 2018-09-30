import * as React from 'react';



function Loading() {
  return (
    <div className="sha-lazyloading">
      <div className="sha-loading-part">
        <img className="sha-loading-img" src="/static/imgs/EastPerl.svg" alt="Loading Image" />
        <img className="sha-loading-indicator" src="/static/imgs/loading.svg" alt="Loading bar"/>
      </div>
    </div>
  )
}

export default Loading;
