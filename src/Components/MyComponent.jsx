import React, { Component } from "react";

class MyComponent extends Component {
  constructor() {
    super();
    console.log("This is constructor");

    // fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    //   console.log(res);
    // });
  }

  componentDidMount() {
    console.log(
      "Component did mount it is telling the file is correctly attached inside DOM Tree"
    );
  
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {                     //res.json()
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });


  }

  render() {
    console.log("Render function ");
    console.log("This function works first ");
    console.log("----");
    return (
      <div>
        <h1>My component</h1>
      </div>
    );
  }
}

export default MyComponent;
