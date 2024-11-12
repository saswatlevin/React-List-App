import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
    
    return (
    <main>
        {items.length ? (
        // The itemList contains all the items that're to be displayed.
        <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
        
        ) : (
            // The outer pair of curly braces indicates that there's an expression.
            // The inner pair of curly braces indicates that there's a style.
            <p style = {{marginTop: '2rem'}}>Your list is empty.</p>
        )}    
    </main>
  );
};

export default Content;