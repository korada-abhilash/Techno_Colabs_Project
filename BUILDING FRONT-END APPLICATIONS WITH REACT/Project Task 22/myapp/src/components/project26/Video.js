import React from 'react';

export class Video extends React.Component {

    render() {
      let {src} = this.props
    return (
      <div>
        <video src={src} autostart autoPlay muted />
      </div>
    );
  }
}