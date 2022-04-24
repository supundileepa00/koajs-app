// const randomUUID = require("crypto");
import { randomBytes } from "crypto";

//This is converted to a map seacrh 1 by one
// const posts = [];
const posts = new Map();

export const save = ({ text }) => {
  const post = {
    id: randomBytes(16).toString("hex"),
    text,
    postedDate: new Date(),
  };
  posts.set(post.id, post);
  return post;
};

export const get = (id) => {
  const post = posts.get(id);
  if (!post) {
    throw new Error(`Not found for the ID ${id}`);
  }
  return post;
};

export const getAll = () => {
  return [...posts.values()];
};

export const update = (id, { text }) => {
  if (!posts.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  const post = {
    id,
    text,
    postedDate: new Date(),
  };
  posts.set(post.id, post);

  return post;
};

export const deletePost = (id) => {
  if (!posts.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }

  posts.delete(id);
};
