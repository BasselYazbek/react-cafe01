// AddItemForm.js
import React, { useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
  const [itemData, setItemData] = useState({
    name: '',
    imageUrl: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(itemData);
    setItemData({ name: '', imageUrl: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={itemData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={itemData.imageUrl}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={itemData.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
