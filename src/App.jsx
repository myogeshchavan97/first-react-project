import "./App.css";
import User from "./components/User";
import users from "./utils/data";

function App() {
  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map((user) => (
          <User key={user.email} {...user} />
        ))}
      </ul>
    </div>
  );
}

export default App;
