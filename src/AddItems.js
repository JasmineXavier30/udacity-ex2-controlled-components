import React, {Component} from 'react';
import DeleteItems from './DeleteItems';
import ShowItems from './ShowItems';

class AddItems extends Component {
  
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };


  render() {
    let {value, items} = this.state;
    return (
      	<div>
          <form onSubmit={this.addItem}>
              <input
                type="text"
                placeholder="Enter New Item"
                value={value}
                onChange={this.handleChange}
              />
              <button disabled={this.inputIsEmpty()}>Add</button>
            </form>
            <DeleteItems items={items} deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound}/>
			<ShowItems items={items}/>
		</div>
    )
  }
}

export default AddItems;