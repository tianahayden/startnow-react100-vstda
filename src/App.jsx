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
          <input type="text" className="form-control" />
        </div>
        <div className='form-group'>
          <label>Set Priority</label>
          <br></br>
          <select>
            <option value='1'>High</option>
            <option value='2'>Medium</option>
            <option value='3'>Low</option>
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


class ViewToDoContainer extends Component {
  // how do I get it to move automatically for every item in the item array?

  renderToDo() {
    // console.log(this.props.items[0])

    // this.props.items.map((e, i) => {
    //   return (
    //     <ul className='list-group'>
    //       <li className='list-group-item'>
    //         <div className='row'>
    //           <div className='col'>
    //             <input type='checkbox' />
    //           </div>
    //           <div className='col-6'>
    //           {/* test */}
    //             {/* {this.props.items[i].description} */}
    //             {/* {e.description} */}
    //             {/* {console.log(e.description)} */}
    //           </div>
    //           <div className='col'>
    //             <button>Edit</button>
    //           </div>
    //           <div className='col'>
    //             <button>Trash</button>
    //           </div>
    //         </div>
    //       </li>
    //     </ul>
    //   )
    // })


    return (
      <div>
        <li className='list-group-item'>
          <div className='row'>
            <div className='col'>
              <input type='checkbox' />
            </div>
            <div className='col-6'>
              {this.props.items[0].description}
            </div>
            <div className='col'>
              <button>Edit</button>
            </div>
            <div className='col'>
              <button>Trash</button>
            </div>
          </div>
        </li>
      </div>
    )

  }


  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <div className='h3'>View To Do Items</div>
          <br></br>
          <ul className='list-group'>
            {this.props.toggle === true ? this.renderToDo() : null}
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
      isToggle: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleTable = this.toggleTable.bind(this);

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
    };

    this.setState({
      items: this.state.items.concat(newToDo)
    });

    this.toggleTable();

  };

  toggleTable() {
    this.setState({
      isToggle: true
    });

    // console.log(this.state.items[0].description)
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
              toggle={this.state.isToggle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
