import React from 'react';
import './App.css';
import Hello from './Hello';
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle';
import LoggingButton from './LoggingButton';
import Greeting from './Greeting';
import NameForm from './NameForm';
import Calculator from './Calculator';

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

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.key}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.key}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

function App(state) {

  state = {
    numbers: [1, 2, 3, 4, 5]
  }
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

  function updateNumbers() {
    // numbers.push(numbers.length + 1);
    // console.warn('numbers: ', numbers);
  }

  const listItems = <div>
    <button onClick={updateNumbers}>Add number</button>
    <ul>{
      state.numbers.map((number) =>
        <li key={number}>{number * 2}</li>
      )}</ul>
  </div>;

  const posts = [
    { key: 'Hello_World', id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { key: 'Installation', id: 2, title: 'Installation', content: 'You can install React from npm.' }
  ];
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
      listItems: { listItems}
      <Blog posts={posts} />
      <NameForm></NameForm>
      <Calculator />
    </div>
  );
}

export default App;
