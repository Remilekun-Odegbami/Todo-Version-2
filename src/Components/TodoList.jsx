// import { useContext } from "react";
// import { AppContext } from "./AppState";
import TodoItem from "./TodoItem";
// import { v1 as uuid } from 'uuid';



//destructuring
const TodoList = ({ items, clearList, handleDelete, handleEdit, boxClick }) => {
    
  // const context = useContext(AppContext)
 
  //   const newItem = {
  //     items: [],
  //      id: uuid(),
  //   };

      // context.dispatch({
      //   type: 'ADD_ITEM',
      //   payload: newItem,
      // })
  

  // console.log(context)
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center"> my todo list</h3>
        {
          //the curly bracket is because I am writing a jsx
          // the map method is used to loop through the whole array being passed
          items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => {
                  handleDelete(item.id);
                }}
                handleEdit={() => {
                  handleEdit(item.id);
                }}
                boxClick={() => {
                  boxClick(item.id);
                }}
              />
            );
          })
        }
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          disabled={items.length === 0}
          onClick={clearList}
        >
          clear my todo list
        </button>
      </ul>
    );
  }

  export default TodoList;
