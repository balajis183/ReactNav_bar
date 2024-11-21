// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "./MyEffect.css";

// function MyEffect() {
//   const [users, setusers] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")

//       //   .then((res) => console.log(res.data))
//       //   .then((res) => setusers(res))

//       .then((res) => setusers(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   function handleSubmit(event) {
//     console.log(users);
//     let id = document.getElementById("id").value;
//     let email = document.getElementById("email").value;
//     let inputObj = {
//       userId: id,
//       userEmail: email,
//     };
//   }

//   function authenticateUser(inputObj, users) {
//     const { userId, userEmail } = inputObj;
//     for (let user of users) {
//       if (userId == user.id && userEmail === user.email) {
//         console.log(user);
//       }
//     }
//   }

//   return (
//     <div>
//       <h1>Fetching Data from API</h1>
//       {/* {console.log(users)} */}
//       <form>
//         <label htmlFor="id">ID</label>
//         <input type="text" name="id " id="id" placeholder="Enter id " />
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Enter email "
//         />
//         <input type="submit" onClick={handleSubmit} />
//       </form>
//     </div>
//   );
// }

// export default MyEffect;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "./MyEffect.css";

// function MyEffect() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => setUsers(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   function handleSubmit(event) {
//     let id = document.getElementById("id").value;
//     let email = document.getElementById("email").value;
//     let inputObj = {
//       userId: id,
//       userEmail: email,
//     };
//     authenticateUser(inputObj, users);
//     event.preventDefault();
//   }
//   function authenticateUser(inputObj, users) {
//     const { userId, userEmail } = inputObj;
//     for (let user of users) {
//       if (userId ==user.id && userEmail ==user.email) {
//         console.log(user);
//       }
//     }
//   }
//   return (
//     <div>
//       <h1>Fetching Data From API </h1>
//       <form>
//         <label htmlFor="id">ID</label>
//         <input type="text" name="id" id="id" placeholder="Enter id" />
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" id="email" placeholder="Enter email" />
//         <input type="submit" onClick={handleSubmit} />
//       </form>
//     </div>
//   );
// }

// export default MyEffect;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MyEffect.css";
import { Link } from "react-router-dom";

function MyEffect() {
  const [users, setUsers] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [authMessage, setAuthMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // New state to track form submission
  // const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    setFormSubmitted(true);
    let id = document.getElementById("id").value;
    let email = document.getElementById("email").value;
    let inputObj = {
      userId: id,
      userEmail: email,
    };
    authenticateUser(inputObj, users);
  }

  function authenticateUser(inputObj, users) {
    const { userId, userEmail } = inputObj;
    for (let user of users) {
      // eslint-disable-next-line
      if (userId == user.id && userEmail == user.email) {
        setAuthenticatedUser(user); // Update state with the authenticated user
        setAuthMessage("Authentication successful! User exists."); // Set success message
        // navigate("/products"); // Navigate to products page
        return; // Exit the function once the user is found
      }
    }
    setAuthenticatedUser(null); // Reset if no user is found
    setAuthMessage("Authentication failed! User does not exist."); // Set failure message
  }

  return (
    <div>
      {/* <h1>Fetching Data From API</h1> */}
      <h1 id="h1">User authenication to see the products </h1>
      <form>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" id="id" placeholder="Enter id" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter email" />
        <input type="submit" onClick={handleSubmit} />
      </form>

      {authenticatedUser && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{authenticatedUser.id}</td>
              <td>{authenticatedUser.name}</td>
              <td>{authenticatedUser.username}</td>
              <td>{authenticatedUser.email}</td>
              <td>{authenticatedUser.phone}</td>
              <td>{authenticatedUser.website}</td>
            </tr>
          </tbody>
        </table>
      )}

      { authMessage && <p>{authMessage}</p>}
      {formSubmitted &&
        !authenticatedUser && ( // Check if the form was submitted and user is not authenticated
          <p id="p">Please try again with valid credentials.</p>
        )}

      {authenticatedUser && (
        <p id="p">
          Click <Link to="/products">here</Link> to see the products.
        </p>
      )}
    </div>
  );
}

export default MyEffect;
