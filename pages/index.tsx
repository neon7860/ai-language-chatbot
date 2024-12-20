import React from "react"
import Chat from "../components/Chat/Chat"
import Header from "../components/Header/Header";

const Home: React.FC = () => {
    return(
      <div>
        <Header />
        <Chat />
      </div>
    )
  };
  
  export default Home;