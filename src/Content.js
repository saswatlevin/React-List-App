const Content = () => {
    const handleNameChange = () => {
        const names = ["Ann", "Mary", "Dave"];
        const index = Math.floor(Math.random() * 3);
        return names[index];
    };
    
    return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
    </main>
  );
};

export default Content;