import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import AddItemForm from "./AddItemForm";

const Menu = ({menuItems}) => {
/*     const { user } = useContext(AuthContext);

    const addItem = (newItem) => {
        // Check if the user is authorized to add items
        if (user && user.role === 'owner') {
          setMenuItems([...menuItems, newItem]);
        } else {
          alert('You do not have permission to add items.');
        }
      };
 */
    return (
        <>
        <h1>Our Menu:</h1>
        <ul>
            {menuItems.map((menuItem, index) =>(
                <li key={index}>
                    <img src={menuItem.imageUrl} alt={menuItem.name} />
                    <h3>{menuItem.name}</h3>
                    <p>{menuItem.description}</p>
                </li>
            ))}
        </ul>
        {/* {user && user.role === 'owner' && (
            <AddItemForm onAddItem={addItem} /> 
        )} */}
        </>
    );
};

export default Menu;