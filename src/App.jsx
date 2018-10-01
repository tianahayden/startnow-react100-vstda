import React, { Component } from 'react';

class CreateToDo extends Component {


  render() {
    return (
      <div>
        <div className='form-group'>
          <label>I want to...</label>
          <input onChange={this.props.handleChangeFromContainer} name='description' type="text" className="form-control" />
        </div>
        <div className='form-group'>
          <label>Set Priority</label>
          <br></br>
          <select name='priority' onChange={this.props.handleChangeFromContainer}>
            <option value='1'>High</option>
            <option value='2'>Medium</option>
            <option value='3'>Low</option>
          </select>
        </div>
        <button onClick={this.props.handleClickFromContainer}>Submit</button>
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
          <CreateToDo
            functionFromContainer={this.props.functionFromApp}
            handleChangeFromContainer={this.props.handleChangeFromApp}
            handleClickFromContainer={this.props.handleClickFromApp}
          />
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
          <input name='description' onChange={this.props.handleChange} type="text" className="form-control" />
        </div>
        <div className='form-group'>
          <label>Set Priority</label>
          <br></br>
          <select name='priority' onChange={this.props.handleChange}>
            <option value='1'>High</option>
            <option value='2'>Medium</option>
            <option value='3'>Low</option>
          </select>
          <div className='form-group'>
            <br></br>
            <button onClick={this.props.handleEditSubmit} className='btn btn-primary'>Save</button>
          </div>
        </div>
      </div>
    )
  }
}


class ViewToDoContainer extends Component {

  renderToDo() {
    return this.props.items.map((e, i) => {
      if (e.isEditing === true) {
        return (
          <li className='list-group-item'>
            <EditToDo
            handleChange={this.props.handleChange}
            items={this.props.items}
            handleEditSubmit={this.props.handleEditSubmit}
            />
          </li>
        )
      }

      else {
        return (
          <li className='list-group-item'>
            <div className='row'>
              <div className='col'>
                <input type='checkbox' />
              </div>
              <div className='col-6'>
                {e.description}
              </div>
              <div className='col'>
                <button name={i} onClick={this.props.handleEditFromApp}>Edit</button>
              </div>
              <div className='col'>
                <button name={i} onClick={this.props.handleDelete}>Trash</button>
              </div>
            </div>
          </li>
        )
      }

    })
  }

  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <div className='h3'>View To Do Items</div>
          <br></br>
          <ul className='list-group'>
            {this.props.toggleTable === true ? this.renderToDo() : null}
          </ul>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      priority: '1',
      items: [],
      isToggleTable: false,
      currentIndex: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleTable = this.toggleTable.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleEditSubmit(){
    var currentItems = this.state.items
    var newToDo = {
      description: this.state.description,
      priority: this.state.priority,
      isShown: true,
      isEditing: false,
    }
    currentItems.splice((this.state.currentIndex),1,newToDo)

    this.setState({
      items: currentItems
    })
  }
  

  handleEdit(e) {
    var currentItems = this.state.items
    var editedToDo = {
      description: this.state.items[(e.target.name)].description,
      priority: this.state.items[(e.target.name)].priority,
      isShown: true,
      isEditing: true,
    }
    currentItems.splice((e.target.name),1,editedToDo)

    this.setState({
      items: currentItems,
      currentIndex: e.target.name
    })
  }

  handleDelete(e) {
    var currentItems = this.state.items
    currentItems.splice((e.target.name),1)

    this.setState({
      items: currentItems,
    })

  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };


  handleClick() {
    var newToDo = {
      description: this.state.description,
      priority: this.state.priority,
      isShown: true,
      isEditing: false,
    };
    this.setState({
      items: this.state.items.concat(newToDo)
    });
    this.toggleTable();
  };


  toggleTable() {
    this.setState({
      isToggleTable: true
    });
  }


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
            <CreateToDoContainer
              handleChangeFromApp={this.handleChange}
              handleClickFromApp={this.handleClick} />
          </div>
          <div className='col'>
            <ViewToDoContainer
              items={this.state.items}
              toggleTable={this.state.isToggleTable}
              handleEditFromApp={this.handleEdit}
              handleChange={this.handleChange}
              handleEditSubmit={this.handleEditSubmit}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
