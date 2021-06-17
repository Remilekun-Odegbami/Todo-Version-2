
// import { AppContext } from "./AppState";
import "./TodoInput.css";

  const TodoInput = ({ item, handleChange, handleSubmit, editItem }) => {
    
  // export const context = useContext(AppContext)

    return (
      <>
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <label htmlFor="input" className="input-group">
            <div className="input-group-prepend">
              {" "}
              {/* where we will place our font awesome icon */}
              <div className="input-group-text bg-success text-white">
                <i className="fa fa-book fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            <input
              type="text"
              id="input"
              className="form-control text-capitalize"
              placeholder=" your Todo Item"
              value={item} //the first step in making the controlled input
              onChange={handleChange}
            />
          </label>
          <div className="text-center">

            <button
              type="submit"
              className={
                editItem
                  ? "btn btn-primary mt-4 btn-lg w-100"
                  : "btn btn-success mt-4 btn-lg w-100"
              }
              disabled={item === ""}
            >
              {editItem ? "Edit" : "Add"} Todo
            </button>
          </div>
        </form>
      </div>
      </>
    );
  }

  export default TodoInput;
