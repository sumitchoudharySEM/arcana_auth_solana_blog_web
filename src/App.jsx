import { FC, useMemo } from "react";
import { BlogProvider } from "src/context/Blog";
import { Router } from "src/router";
import "./App.css";
import { useEffect, useState } from "react";
import { Auth } from "@arcana/auth-react";
import { useAuth } from "@arcana/auth-react";

export const App = () => {

  const { loading, isLoggedIn, connect, user } = useAuth();
  const [pub, setpub] = useState(null);

  if (loading) {
    return (
        <p>loading</p>
    );
  }
  if (isLoggedIn) {
    console.log(user);
    setpub(user.publicKey);
    return (
      <>
            <BlogProvider>
              <Router user={user} />
            </BlogProvider>
      </>
    );
  }
  if (!isLoggedIn) {
    return(
    <div className="App">
      <header className="App-header">
      <Auth />
      </header>
    </div>
    );
  }
  
};

export default App;
