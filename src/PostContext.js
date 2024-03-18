import { useState, useContext, createContext } from "react";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const PostContext = createContext();
function PostProvider() {
  return <div></div>;
}

export default PostProvider;
