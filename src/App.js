import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index';
import { useState } from 'react';

function App() {
  
    // Here, name is the CURRENT STATE.
    // Here, setName is any FUTURE STATE that we want to set.

    // const is used since we don't want to change the state values directly.
    // We only want to change the state values through the states themsleves.

    // Another way to think about it is -> 
    // name as GETTER (similar to getter function in object).   
    // setName as SETTER (similar to setter function in object).
    
    //const [name, setName] = useState('Dave');
    const [items, setItems] = useState([
      {
          id: 1,
          checked: false,
          item: "item 1"
      },

      {
          id: 2,
          checked: false,
          item: "item 2"
      },

      {
          id: 3,
          checked: false,
          item: "item 3"
      }
  ]);
  
  // Takes the list item key as an argument.
  const handleCheck = (id) => {
      console.log(`key: ${id}`);
      // Map iterates over each list item
      // The conditional statement in it finds the clicked element
      // and negates its current checked value (true to false and vice-versa).
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked }: item);
      setItems(listItems);
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
  };
  
  const handleDelete = (id) => {
      // Create a list of listitems without the selected listitem
      const listItems = items.filter((item) => item.id !== id);
      // Set the listitems.
      setItems(listItems);
      if (listItems.length === 0){

         console.log("The list is empty"); 
      }
      // Put the listitems in local storage.
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
  } 

  
  return (
    <div className="App">
      <Header/>
      <Content
        // Drilling props
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      
      <Footer length = {items.length}/>    
    </div>
    
  );
};

export default App;
