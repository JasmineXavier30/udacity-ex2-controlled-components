import React, {Component} from 'react';

class ShowItems extends Component {
  render() {
    return (
      <div>
      	<p className="items">Items</p>
        <ol className="item-list">
          {this.props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    )
  }
}

export default ShowItems;