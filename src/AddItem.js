import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();

  return (
    <form classname = 'addForm' onSubmit = {(submissionEvent) => handleSubmit(submissionEvent)}>
        <label htmlFor = 'addItem'>Add Item</label>
        {/* This is a controlled input */}
        <input
            autoFocus
            ref = {inputRef}
            id = 'addItem'
            type = 'text'
            placeholder = 'Add Item'
            /* Required field */
            required
            /* Default state */
            value = {newItem}
            /* Set the new state for the new item */
            onChange = { (submissionEvent) => setNewItem(submissionEvent.target.value)}

        />
        <button
            type='submit'
            aria-label = 'Add Item'
            // To move the focus from the button to add item form just after clicking the button.
            onClick = {() => inputRef.current.focus()}
        >
            <FaPlus/>
        </button>

    </form>
  );
};

export default AddItem;