import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    
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
    <main>
        {items.length ? (
        <ul>
            {/* List items are displayed using map()
                Map iterates over each list item.
                Each list item in RJS needs a key.
                The key helps RJS understand which items have been changed, added / deleted.
                This is because RJS reacts to changes and re-renders the JSX.
                Thus, a list item needs a key in RJS.

            */}
            {items.map((item) => (
                <li className = "item" key = {item.id}>
                    <input
                        type = "checkbox"
                        onChange = {() => handleCheck(item.id)}
                        checked = {item.checked}
                    />
                    <label>{item.item}</label>
                    <FaTrashAlt
                        onClick = {() => handleDelete(item.id)}
                        role = "button"
                        tabIndex = "0"
                    />
                </li>
            ))}
        </ul>
        ) : (
            // The outer pair of curly braces indicates that there's an expression.
            // The inner pair of curly braces indicates that there's a style.
            <p style = {{marginTop: '2rem'}}>Your list is empty.</p>
        )}    
    </main>
  );
};

export default Content;