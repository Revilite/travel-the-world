import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>

      
    </ApolloProvider>
  )
}



export default App;