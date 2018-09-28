import React, { Component } from 'react';

class CreateToDo extends Component {
  render() {
    return (
      <div className='form-group'>
        <label>I want to...</label>
        <input type="text" className="form-control" />
      </div>
    )
  }
}

class SetPriority extends Component {
  render() {
    return (
      <div className='form-group'>
        <label>Set Priority</label>
        <br></br>
        <select>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    )
  }
}

class CreateToDoContainer extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <div className='h3'>Add a New To Do Item</div>
          <br></br>
          <CreateToDo />
          <SetPriority />
        </div>
      </div>
    )
  }
}

class EditToDo extends Component {
  render() {
    return (
      <div>
        <div className='form-group'>
          <label>Description</label>
          <input type="text" className="form-control" />
        </div>
        <div className='form-group'>
          <label>Set Priority</label>
          <br></br>
          <select>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <div className='form-group'>
            <br></br>
            <button className='btn btn-primary'>Save</button>
          </div>
        </div>
      </div>
    )
  }

}

class ViewToDo extends Component {
  render() {
    return (
      <ul className='list-group'>
        <li className='list-group-item'>To Do 1
        <EditToDo />
        </li>
        <li className='list-group-item'>
          <div className='row'>
            <div className='col'>
              <input type='checkbox' />
            </div>
            <div className='col-6'>
              To Do 2
            </div>
            <div className='col'>
              <button>Edit</button>
            </div>
            <div className='col'>
              <button>Trash</button>
            </div>
          </div>
        </li>
        <li className='list-group-item'>To Do 3</li>
      </ul>
    )
  }
}

class ViewToDoContainer extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <div className='h3'>View To Do Items</div>
          <br></br>
          <ViewToDo />
        </div>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='container text-white'>
            <h1>Very Simple To Do App</h1>
            <h5>Track all the things</h5>
            <hr></hr>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <CreateToDoContainer />
          </div>
          <div className='col'>
            <ViewToDoContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
