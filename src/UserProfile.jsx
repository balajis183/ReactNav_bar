// import React, { useState } from "react";
// import axios from "axios";
// import "./UserProfile.css"; // Optional: Create a CSS file for styling

// function UserProfile() {
//   const [userId, setUserId] = useState("");
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState("");

//   const handleInputChange = (event) => {
//     setUserId(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(""); // Reset error message

//     try {
//       const response = await axios.get(`https://randomuser.me/api/?results=10`);
//       const users = response.data.results;

//       // Find user by userId (assuming userId corresponds to the index)
//       const user = users[userId - 1]; // Adjust to get the user based on ID (1-based)

//       if (user) {
//         setUserData(user);
//       } else {
//         setError("User not found");
//         setUserData(null);
//       }
//     } catch (err) {
//       setError("Error fetching data");
//       setUserData(null);
//     }
//   };

//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>Fetch User Profile</h1>
//       <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
//         <label htmlFor="userId">User ID (1-10):</label>
//         <input
//           type="number"
//           id="userId"
//           value={userId}
//           onChange={handleInputChange}
//           min="1"
//           max="10"
//           required
//         />
//         <input type="submit" value="Fetch Profile" />
//       </form>

//       {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

//       {userData && (
//         <div className="user-profile" style={{ textAlign: "center" }}>
//           <img src={userData.picture.large} alt="Profile" />
//           <h2>{`${userData.name.first} ${userData.name.last}`}</h2>
//           <p>
//             <strong>Email:</strong> {userData.email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {userData.phone}
//           </p>
//           <p>
//             <strong>Location:</strong>{" "}
//             {`${userData.location.city}, ${userData.location.country}`}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserProfile;




import axios from "axios";
import React, { useEffect, useState } from "react";
import "./UserProfile.css"; // Optional: Create a CSS file for styling

function UserProfile() {
  const [users, setUsers] = useState([]); // State to hold fetched users
  const [userData, setUserData] = useState(null); // State to hold the selected user data
  const [error, setError] = useState(""); // State to hold any error messages

  // Fetch users from the Random User Generator API
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10") // Fetch 10 random users
      .then((res) => setUsers(res.data.results)) // Set the users in state
      .catch((err) => console.log(err));
  }, []);

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const id = document.getElementById("userId").value; // Get user ID from input
    const user = users[id - 1]; // Find user based on input ID (1-based index)

    if (user) {
      setUserData(user); // Set the user data to display
      setError(""); // Clear any previous error messages
    } else {
      setError("User  not found"); // Set error if user not found
      setUserData(null); // Clear user data
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>User  Profile Fetcher</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <label htmlFor="userId">User  ID (1-10):</label>
        <input type="number" id="userId" min="1" max="10" required placeholder="Enter user ID" />
        <input type="submit" value="Fetch Profile" />
      </form>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} {/* Display error message */}

      {userData && ( // Display user data if available
        <div className="user-profile" style={{ textAlign: 'center' }}>
          <img src={userData.picture.large} alt="Profile" />
          <h2>{`${userData.name.first} ${userData.name.last}`}</h2>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Location:</strong> {`${userData.location.city}, ${userData.location.country}`}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;