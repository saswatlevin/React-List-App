const Content = () => {
    const handleNameChange = () => {
        const names = ["Ann", "Mary", "Dave"];
        const index = Math.floor(Math.random() * 3);
        return names[index];
    };

    const handleClick = () => {
        console.log("A button was clicked.");
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked.`);
    }

    const handleClick3 = (myEvent) => {
        console.log("The event is ", myEvent);
    }
    
    return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Button 1</button>
        <button onClick={() => handleClick2('Dave')}>Button 2</button>
        <button onClick={(myEvent) => handleClick3(myEvent)}>Button 3</button>
    </main>
  );
};

export default Content;