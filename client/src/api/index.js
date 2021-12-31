import axios from 'axios';

// const API = axios.create({ baseURL: 'https://beautifulminds.herokuapp.com/' });
const API = axios.create({ baseURL: 'https://localhost:3000/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
 export const createPost = (newPost) => API.post('/posts', newPost);
 export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
 export const favPost = (id) => API.patch(`/posts/${id}/favPost`);
 export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
 export const bookmarkPost = (id, bookmarkedPost) => API.patch(`/posts/${id}`, bookmarkedPost);
 export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
 export const deletePost = (id) => API.delete(`/posts/${id}`);
 export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const signIn = (values) => API.post('/users/signin', values);
export const signUp = (values) => API.post('/users/signup', values);
export const updateUser = (id) => API.patch(`/user/${id}`, updateUser);
export const deleteUser = (id) => API.delete(`/user/${id}`);