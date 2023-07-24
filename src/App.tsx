import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import PostContainer from "./components/PostContainer";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import UserSlice from "./store/reducers/UserSlice";
import {} from "./store/reducers/UserSlice";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.UserSlice
  // );
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  return (
    <div className="App">
      {/* {isLoading && <h1>... идёт загруска</h1>}
      {error && <h1>{error}</h1>}
      {users.map((item, index) => (
        <div className="">{item.id}</div>
      ))} */}
      <PostContainer></PostContainer>
    </div>
  );
}

export default App;
