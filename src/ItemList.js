// Created in Chapter 8 
import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {/* items.map() iterates over each lineitem (listitem) in the list */}
            {items.map((item) => (
                <LineItem
                    // Drilling props

                    // Drilling the key of the lineitem.
                    // Mandatory, since RJS uses it to check for changes in the lineitems.
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList;