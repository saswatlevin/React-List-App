import './App.css';
import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import './index';
import { useState, useEffect } from 'react';

function App() {
  
    // Here, name is the CURRENT STATE.
    // Here, setName is any FUTURE STATE that we want to set.

    // const is used since we don't want to change the state values directly.
    // We only want to change the state values through the states themsleves.

    // Another way to think about it is -> 
    // name as GETTER (similar to getter function in object).   
    // setName as SETTER (similar to setter function in object).
    
    //const [name, setName] = useState('Dave');

    // Get the shopping list from local storage.
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

    const [newItem, setNewItem] = useState('');

    const [search, setSearch] = useState('');

    useEffect(() => {
      localStorage.setItem('shoppingList', JSON.stringify(items));
    }, [items]);
  
    
    // Create a new item to be added to the shopping list
    const addItem = (item) => {
      // Get the id of the new item from the list and add 1 to it (the new item will be the last item on the list).
      const id = items.length ? items[items.length - 1].id + 1: 1;
    
      // Create an object with the new item, the checked value and the id.
      const myNewItem = {id, checked: false, item };
    
      // Add the item to the list using the spread operator.
      const listItems = [...items, myNewItem];
      
      // Set the listitems.
      setItems(listItems);
    };

    // Takes the list item key as an argument.
    const handleCheck = (id) => {
        console.log(`key: ${id}`);
        
        // Map iterates over each list item
        // The conditional statement in it finds the clicked element
        // and negates its current checked value (true to false and vice-versa).
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked }: item);
        
        // Set the listitems.
        setItems(listItems);
    };
  
    const handleDelete = (id) => {
        // Create a list of listitems without the selected listitem
        const listItems = items.filter((item) => item.id !== id);
        
        if (listItems.length === 0){

          console.log("The list is empty"); 
        }

        // Set the listitems.
        setItems(listItems);
        
    }; 
  
    // Handles the submission of a new item in the list.
    // Note that submssionEvent is a user defined event object. NOT built-in.
    const handleSubmit = (submissionEvent) => {
      // To prevent the page on reloading when the form is submitted
      submissionEvent.preventDefault();
    
      // To prevent blank submissions
      if (!newItem) return;

      console.log("newItem received:", newItem);

      // Add the new item to the list
      addItem(newItem);

      // Calling setNewItem()
      // We set the new item to empty as we don't want to make the new item value persist on the input.
      setNewItem('');
    };

  return (
    <div className="App">
      <Header title = 'Grocery List'/>
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content
        // Drilling props
        // Two brackets are used since we wouldn't want the compiler to get confused about item.item being part of tthe object.
        // The actual item and the value in the search bar (default state / search state) are converted to lowercase
        // so that they match   
        items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      
      <Footer length = {items.length}/>    
    </div>
    
  );
};

export default App;