// // import React, { Component } from "react";
// // import axios from "axios";

// // class Mycomponent2 extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       people: [],
// //     };
// //     console.log(this.state);
// //   }

// //   componentDidMount() {
// //     console.log("Component did mount called ");

// //     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
// //       console.log(res.data);

// //       this.setState({
// //         people: res.data,
// //       });
// //     });
// //   }

// //   displayData() {
// //     let tbody = document.getElementById("display");
// //     let arr = this.state.people;

// //     arr.map((person) => {
// //       let row = document.createElement("tr");

// //       let idCell = document.createElement("td");
// //       idCell.innerHTML = person.id; // Assuming person has an id property

// //       let nameCell = document.createElement("td");
// //       nameCell.innerHTML = person.name;

// //       let userNameCell = document.createElement("td");
// //       userNameCell.innerHTML = person.username;

// //       let emailCell = document.createElement("td");
// //       emailCell.innerHTML = person.email;

// //       row.appendChild(idCell);
// //       row.appendChild(nameCell);
// //       row.appendChild(userNameCell);
// //       row.appendChild(emailCell);

// //       tbody.appendChild(row); // Assuming tbody is already defined
// //     });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <h1>My component 2 </h1>
// //         {console.log(this.state.people)}
// //         <table>
// //           <thead>
// //             <th>Id </th>
// //             <th>Name </th>
// //             <th>UserName </th>
// //             <th>Email </th>
// //           </thead>
// //           <tbody id="display">{this.displayData()}</tbody>
// //         </table>
// //       </div>
// //     );
// //   }
// // }

// // export default Mycomponent2;

// import React, { Component } from "react";
// import axios from "axios";

// class MyComponent2 extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       people: [],
//     };
//     console.log(this.state);
//   }
//   componentDidMount() {
//     console.log("Component did mount called ");
//     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//       console.log(res.data);
//       this.setState({
//         people: res.data,
//       });
//     });
//   }
//   displayData() {
//     let tbody = document.getElementById("table");
//     let arr = this.state.people;
//     arr.map((person) => {
//       let row = document.createElement("tr");
//       let idCell = document.createElement("td");
//       idCell.innerHTML = person.id;
//       let nameCell = document.createElement("td");
//       nameCell.innerHTML = person.name;
//       let userNameCell = document.createElement("td");
//       userNameCell.innerHTML = person.username;
//       let emailCell = document.createElement("td");
//       emailCell.innerHTML = person.email;
//       row.appendChild(idCell);
//       row.appendChild(nameCell);
//       row.appendChild(userNameCell);
//       row.appendChild(emailCell);
//       tbody.appendChild(row);
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>My Component 2</h1>
//         {/* {console.log(this.state.people)} */}
//         <table>
//           <thead>
//             <th>ID</th>
//             <th>Name</th>
//             <th>UserName</th>
//             <th>Email</th>
//           </thead>
//           <tbody id="table">{this.displayData()} </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default MyComponent2;

import React, { PureComponent } from "react";
import axios from "axios";
class MyComponent2 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
    console.log(this.state);
  }
  componentDidMount() {
    console.log("Component did mount called");
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      this.setState({
        people: res.data,
      });
    });
  }
  displayData() {
    let tbody = document.getElementById("table");
    let arr = this.state.people;
     // eslint-disable-next-line
    arr.map((person) => {
      let row = document.createElement("tr");
      let idCell = document.createElement("td");
      idCell.innerHTML = person.id;
      let nameCell = document.createElement("td");
      nameCell.innerHTML = person.name;
      let userNameCell = document.createElement("td");
      userNameCell.innerHTML = person.username;
      let emailCell = document.createElement("td");
      emailCell.innerHTML = person.email;
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(userNameCell);
      row.appendChild(emailCell);
      tbody.appendChild(row);
    });
  }
  render() {
    return (
      <div>
        <h1>My Component 2</h1>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </thead>
          <tbody id="table">{this.displayData()}</tbody>
        </table>
      </div>
    );
  }
}

export default MyComponent2;
