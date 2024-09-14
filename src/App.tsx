import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./components/store";
import UserTable from "./components/UserTable";
import UserDetails from "./components/UserDetails";
import SearchContainer from "./components/SearchContainer";
import Footer from "./components/Footer"; 
import {
  setUsers,
  setLoading,
  setError,
  setUserDetails,
} from "./components/UsersSlice";
import "./App.css";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.list);
  const userDetails = useSelector(
    (state: RootState) => state.users.userDetails
  );

  const [nameFilter, setNameFilter] = useState("");
  const [usernameFilter, setUsernameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [phoneFilter, setPhoneFilter] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data: User[] = await response.json();
        dispatch(setUsers(data.slice(0, 25)));
      } catch (error) {
        dispatch(setError("Nie udało się pobrać danych."));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUsers();
  }, [dispatch]);

  const handleUserClick = async (userId: number) => {
    dispatch(setLoading(true));
    try {
      const postsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      );
      const posts = await postsResponse.json();

      const commentsPromises = posts.map((post: any) =>
        fetch(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        ).then((res) => res.json())
      );
      const commentsArray = await Promise.all(commentsPromises);
      const comments = commentsArray.flat();

      const todosResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/todos`
      );
      const todos = await todosResponse.json();

      dispatch(setUserDetails({ comments, todos, posts }));
    } catch (error) {
      dispatch(setError("Nie udało się pobrać danych użytkownika."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const filteredUsers = users.filter(
    (user: User) =>
      user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      user.username.toLowerCase().includes(usernameFilter.toLowerCase()) &&
      user.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
      user.phone.toLowerCase().includes(phoneFilter.toLowerCase())
  );

  return (
    <div className="background-app flex flex-col min-h-screen relative">
      <div className="flex-grow flex flex-col md:flex-row">
        <aside className="md:w-1/4 w-full p-4 border-slim border md:ml-4 mx-auto mt-4 mb-4 rounded-lg shadow-lg overflow-y-auto">
          <UserTable users={filteredUsers} onUserClick={handleUserClick} />
        </aside>

        <main className=" flex-1 p-4 space-y-4 md:space-y-0 md:ml-4">
          <SearchContainer
            nameFilter={nameFilter}
            setNameFilter={setNameFilter}
            usernameFilter={usernameFilter}
            setUsernameFilter={setUsernameFilter}
            emailFilter={emailFilter}
            setEmailFilter={setEmailFilter}
            phoneFilter={phoneFilter}
            setPhoneFilter={setPhoneFilter}
          />
          {userDetails && <UserDetails userDetails={userDetails} />}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
