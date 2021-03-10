import React from 'react';
import axios from 'axios'

export default class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const interaction = {
      element: event.target.nodeName,
      widget: event.target.widgetName,
      time: new Date(),
    };
    axios.post('/api/interactions', interaction).then((data) => console.log(data))
    .catch((err) => console.log(err))
    console.log(interaction);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.render(this.handleClick)}
      </div>
    );
  }
}
