import logo from './logo.svg';
import './App.css';
import React from 'react';
import Tree from 'react-d3-tree';
import { messages } from './messages'

function App() {

  // Map through an array of messages
    // each message has an indicator sender's position (sender or receiver, 1 or 2)
    // each message is rendered as a tree
    // position, notes, children (recursive)
    
    // messages.forEach(message => {
    //   <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
    //     <Tree data={messages.name} />
    //   </div>
    // })  


  const messages = {  
    name: "Khalil",
    attributes: {
      note: "yo what'dup"
    },
    children: []
  };
  
  return (
    <div className="App">
      <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
        <Tree data={messages} />
      </div>
    </div>
  );
}



export default App;
