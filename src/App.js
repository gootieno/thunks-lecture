import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, postUser, removeUser } from "./store/user";
import "./app.css";

const App = () => {
  const [form, setForm] = useState(false);
  const [userInfo, setUserInfo] = useState({
    title: "",
    id: 2,
    message: "",
  });

  const users = useSelector((state) =>
    state.user ? Object.values(state.user) : null
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleGetUser = async () => {
    setForm(false);
    await dispatch(fetchUser());
  };

  const handleClearUsers = async () => {
    setForm(false);
    await dispatch(removeUser());
  };

  const handlePostUser = async (e) => {
    e.preventDefault();
    setForm((prev) => !prev);
    await dispatch(postUser(userInfo));
    setUserInfo({
      title: "",
      id: 2,
      message: "",
    });
  };

  return (
    <>
      <div className="app-container">
        <button className="get-user-button" onClick={handleGetUser}>
          GET USER
        </button>
        <button
          className="post-user-button"
          onClick={() => setForm((prev) => !prev)}
        >
          TOGGLE POST FORM
        </button>
        <button className="clear-user-button" onClick={handleClearUsers}>
          CLEAR USERS
        </button>
      </div>
      {form && (
        <form className="form-container">
          <input
            id="title"
            name="title"
            placeholder="enter title"
            type="text"
            onChange={handleChange}
            value={userInfo.title}
          />
          <input
            id="message"
            name="message"
            placeholder="enter message"
            type="text"
            onChange={handleChange}
            value={userInfo.message}
          />
          <button onClick={handlePostUser}>SEND IT</button>
        </form>
      )}
      {users ? (
        <>
          {users.map((user) => (
            <h1 key={user.id} className="user-message">
              {form ? "" : user.message}
            </h1>
          ))}
        </>
      ) : (
        <h1 className="user-message"> {form ? "" : "No User Yet"}</h1>
      )}
    </>
  );
};

export default App;
