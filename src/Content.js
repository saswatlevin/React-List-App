import { useState } from 'react';

const Content = () => {
    
    // Here, name is the CURRENT STATE.
    // Here, setName is any FUTURE STATE that we want to set.

    // const is used since we don't want to change the state values directly.
    // We only want to change the state values through the states themsleves.

    // Another way to think about it is -> 
    // name as GETTER (similar to getter function in object).   
    // setName as SETTER (similar to setter function in object).
    
    const [name, setName] = useState('Dave');
    
    const [count, setCount] = useState(0);
    
    const handleNameChange = () => {
        const names = ["Ann", "Mary", "Dave"];
        const index = Math.floor(Math.random() * 3);

        // This allows the value of names[index] to be the FUTURE STATE.
        setName(names[index]);
    };

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    };

    /*const handleClick2 = (name) => {
        console.log(`${name} was clicked.`);
    }*/

    const handleClick3 = (myEvent) => {
        console.log("The event is ", myEvent);
    };
    
    return (
    <main>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Change Count</button>
        <button onClick={(myEvent) => handleClick3(myEvent)}>Click to See Event</button>
    </main>
  );
};

export default Content;