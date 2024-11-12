// Created in Chapter 8 
import { FaTrashAlt } from 'react-icons/fa';

// This is the code that displays the listitem
const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item">
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                // Change the listitem name to strikethrough when double clicked.
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt
                // Delete the item when the trash button is clicked.
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
                // Added for accessibility by screen readers.
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem;