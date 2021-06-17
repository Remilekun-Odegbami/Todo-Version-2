import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './pages/404';
import Register from './pages/Register';
import Login from './pages/Login';
import NavBar from './Components/Navbar';
import { v1 as uuid } from 'uuid'; //this creates a unique ID so no input will have the same ID.

import AppState from './Components/AppState';


class App extends Component {

 // const context = useContext(AppContext)

  // in this state we place the values that we want to see
  state = {
    items: [],
    id: uuid(),
    item: '',
    // the edit item is to toggle the add button to make it add or edit item
    editItem: false,
    completed: {},
    strikeThrough: [],
  };

  // this method is to make the input box a controlled input so we can see the reflected changes and have the value of what we are typing in the input
  handleChange = ( e ) => {
    this.setState( {
      item: e.target.value,
    } );
  };

  //the event passed is used to prevent default page refresh
  handleSubmit = ( e ) => {
    e.preventDefault();

    //code to create new items with new ids
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updatedItems = [ ...this.state.items, newItem ]; // the spread operator splits the value in the input item and places them in the new array

    //to change th evalues within the state
    this.setState( {
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false,
    } );
  };

  //code to clear the todolist
  clearList = () => {
    if ( window.confirm( 'Are you sure you want to clear all your Todo Items?' ) ) {
      this.setState( {
        items: [],
      } );
    }
  };

  handleDelete = ( id ) => {
    // the filtered method returns a new array
    const filteredItems = this.state.items.filter( ( item ) => item.id !== id );
    // the above code says only return the item if the item id does not match the id we are passing in
    this.setState( {
      items: filteredItems,
    } );
  };

  handleEdit = ( id ) => {
    const filteredItems = this.state.items.filter( ( item ) => item.id !== id );

    const selectedItem = this.state.items.find( ( item ) => item.id === id );

    this.setState( {
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      //this sets the id of the todo list item to the same id instead of a new uuid / id.
      id: id,
    } );
  };

  render() {
    return (
      <AppState>
      <Router>
        <NavBar />
        <div className="container">
          <div className="row">
            {/* this will make the div span 10 columns, stay at the center and add a margin at the top (mt-4). */}
            <div className="col-10 mx-auto col-md-8 mt-4">
              {/* this will render the Register Component page */}
              <Switch>
             

                {/* this will render the Register Component page */}
                <Route exact path="/login">
                  <Login />
                </Route>

              

                
                   <Route >
                  <Register exact path="/"/>
                </Route>

                <Route
                  exact
                  path="/home"
                  render={( props ) => (
                    <React.Fragment>
                      <TodoInput
                        item={this.state.item}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        editItem={this.state.editItem}
                      />
                      <TodoList
                        //code to display the input items in the Todo list
                        items={this.state.items}
                        clearList={this.clearList}
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                        handleDone={this.handleDone}
                      />
                    </React.Fragment>
                  )}
                />

                   {/* render error page if page not found */}
                <Route>
                  <ErrorPage />
                </Route>
               
              </Switch>
            </div>
          </div>
        </div>
      </Router>
      </AppState>
    );
  }
}

export default App;
