import React from "react"
import "./like-button.css"

//Simple like button

class LikeButton extends React.Component {

  //initial states
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  } 
  
  //change state when clicked
  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }
  
  render() {
    const label = this.state.liked ? 'Älä tykkää' : 'Tykkää'
    return (
      <div>
        <button className="btn-primary" onClick={this.handleClick}>
          {label}</button>
      </div>
    );
  }
}

  export { LikeButton }