import React from 'react';
import './App.css';
import Hello from './Hello';
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle';
import LoggingButton from './LoggingButton';
import Greeting from './Greeting';
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}


function handleClick(e) {
  e.preventDefault();
  alert('The link was clicked.');
}

function toggleClicked(e) {
  console.warn('Toggle clicked: ', e);
}

function WarningBanner(props) {
  if (!props.warn) {
    return (
      <>
        <em>Please enter props: warn</em>
      </>
    )
  }

  return (
    <div className="warning">
      {props.warn}
    </div>
  );
}

function App() {

  const user = {
    firstName: 'Sam',
    lastName: 'Merante'
  };

  const comment = {
    author: {
      name: 'Sam',
      avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Google_Chrome_on_Windows_10_screenshot.png',
    },
    text: 'Hello, Comment',
    myDate: `${new Date()}`
  }

  const element = getGreeting(user);


  return (
    <div className="App">
      {/* {element}
      <Hello name="Sam" />
      <Hello name="Joe" />
      <Hello name="George" />
      <Comment author={comment.author} text={comment.text} date={comment.myDate} /> */}

      <Clock date={new Date()} />
      {/* 
      <a href="#" onClick={handleClick}>
        Click me
    </a> */}
      <Toggle onToggle={(e) => toggleClicked(e)} />
      <LoggingButton></LoggingButton>
      <br />
      <Greeting loggedIn={true} user={'sam'} />
      {comment.author.name &&
        <h1>Hello {comment.author.name}</h1>

      }
      inline if: {comment.author.name &&
        <h1>Hello {comment.author.name} </h1>
      }
      <div>
        inline conditional: {comment.none ? 'None prop exists' : 'None prop does not exist'}
      </div>
      <WarningBanner warn="Error: This is a warning message"></WarningBanner>
      <WarningBanner></WarningBanner>
    </div>
  );
}

export default App;
