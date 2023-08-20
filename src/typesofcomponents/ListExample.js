import React, { Component } from 'react'

class ListExample extends Component {
  render() {

    const menuList = ["Home", "About", "Contact Us"];
    const iteratedMenuList = menuList.map(menu => {
        return <li>{menu}</li>
    });

    const fruitList = ["Apple", "Banana", "Orange"];
    const iteratedFruitList =  fruitList.filter(fruit => "Banana" != fruit);

    return (
    <div>   
      <h1>ListExample</h1>
      <ul>
        {iteratedMenuList}
      </ul>
      <div>
      <ul>
        {iteratedFruitList}
      </ul>
      </div>
    </div>
    )
  }
}

export default ListExample