import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import User from './components/User'

function useMyForm() {
  const [state, setState] = useState('')

  useEffect(() => {
    setState({
      name: 'aaa',
      lastName: 'aaa'
    })
  }, [])

  const handleOnChangeField = fieldName => (e) => {
    setState({
      [fieldName]: e.target.value
    })
  }

  return {
    state,
    handleOnChangeField
  }
}

function MyForm2() {
  const {state, handleOnChangeField} = useMyForm()
  const handleOnClick = () => {
    alert('Click!!')
  }

  const {name, lastName} = state

  return (
    <div className="App">
      <input onChange={handleOnChangeField('name')} placeholder="name"></input>
      <input onChange={handleOnChangeField('lastName')} placeholder="lastName"></input>
      <User name={name} lastName={lastName} />
      <button onClick={handleOnClick}>Submit</button>
    </div>
  )
}

class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastName: '',
    }

    this.name = ''
  }

  componentDidMount() {
    this.setState({
      name: 'AAA',
      lastName: 'BBB',
    })
    
  }

  handleOnChangeField = fieldName => (e) => {
    this.setState({
      [fieldName]: e.target.value
    })
    this.name = 'aaaa'
  }

  handleOnClick = () => {
    alert('Click!!')
  }

  render() {
    const {name, lastName} = this.state
    return (
      <div className="App">
        <input onChange={this.handleOnChangeField('name')} placeholder="name"></input>
        <input onChange={this.handleOnChangeField('lastName')} placeholder="lastName"></input>
        <User name={this.name} lastName={lastName} />
        <button onClick={this.handleOnClick}>Submit</button>
      </div>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <MyForm2 />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
