import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
  uri: "https://odyssey-lift-off-part5-server-production-33ed.up.railway.app/", // change to YOUR own production server
  cache: new InMemoryCache(),
  name: "web",
  version: "1.0",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
/*
APOLLO_KEY=service:OdysseyTutorial-6ra4ju:TvqHlY3UVgWmz89liWTy8A
APOLLO_GRAPH_REF=OdysseyTutorial-6ra4ju@current
APOLLO_SCHEMA_REPORTING=true*/