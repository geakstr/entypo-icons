import icon500px from "entypo-icons-core/icons/500px";
import iconyoutube from "entypo-icons-core/icons/youtube";
import { EntypoIcon, EntypoSprite } from "entypo-icons-react";
import { EntypoManager } from "entypo-icons-utils";
import React, { Component } from "react";
import "./App.css";

EntypoManager.addIcons(icon500px);

class App extends Component {
  render() {
    return (
      <div className="App">
        <EntypoSprite />
        <header className="App-header">
          <EntypoIcon size={40} color="red" icon="500px" spin />
          <EntypoIcon size={180} color="green" {...iconyoutube} />
          <EntypoIcon size={90} color="blue" icon="mail" />
        </header>
      </div>
    );
  }
}

export default App;
