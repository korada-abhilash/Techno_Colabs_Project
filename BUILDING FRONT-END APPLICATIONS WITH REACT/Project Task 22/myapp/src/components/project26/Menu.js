import React from 'react';

export class Menu extends React.Component {
 handleClick = (e) => {
    const text = e.target.value;
    console.log(text)
    this.props.chooseVideo(text);
 }
  render() {
    return (
      <form>
        <input type="radio" name="src" onClick={this.handleClick} value="fast" /> fast
        <input type="radio" name="src" onClick={this.handleClick} value="slow" /> slow
        <input type="radio" name="src" onClick={this.handleClick} value="cute" /> cute
        <input type="radio" name="src" onClick={this.handleClick} value="eek" /> eek
      </form>
    );
  }
}