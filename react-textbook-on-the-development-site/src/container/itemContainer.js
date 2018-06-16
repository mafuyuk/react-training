import React, {Component, Fragment} from 'react';
import MainTitle from './mainTitle';
import ItemList from './itemList';

class ItemContainer extends Component {
  constructor() {
    super();
    this.getItems = this.getItems.bind(this);

    this.state = {
      items:[]
    }
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    // fetch('***')
    //   .then(items => {
    //     this.setState({items})
    //   });
    console.log("aaaaaaaaaaaaaa");
    this.setState({
      items: [
        {name: 'taro'},
        {name: 'kota'}
      ]
    })
  }

  render() {
    return (
      <Fragment>
        <MainTitle text="My Items Page" url="https://www.example.com/" />
        <ItemList data={this.state.items} />
      </Fragment>
    );
  }
}

export default ItemContainer;