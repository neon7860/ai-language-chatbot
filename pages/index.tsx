import React from "react"
import QuestionInput from "../components/QuestionInput"
import Chat from "../components/Chat"
import Header from "../components/Header";

const Home: React.FC = () => {
    return(
      <div>
        <Header />
        <Chat />
        <QuestionInput />
      </div>
    )
  };
  
  export default Home;