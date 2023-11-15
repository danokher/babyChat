import "./App.css";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";
import React, { useState } from "react";
import { PrettyChatWindow } from 'react-chat-engine-pretty';




function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(authenticatedUser) => setUser(authenticatedUser)} />;
  } else {
    return (
      <>
        <ChatsPage user={user} />
      </>
    );
  }
}

export default App;
