import React, {Component} from 'react';


class DeleteItems extends Component {
  
  render() {
    return (
      <div>
        <button onClick={this.props.deleteLastItem} disabled={this.props.noItemsFound()}>
          Delete Last Item
        </button>
		
      </div>
    )
  }
}

export default DeleteItems