import React, {useState, useEffect} from "react"
import './App.css';
import axios from 'axios'
import Paggination from './components/Paggination'
import Posts from "./components/Posts";
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [postsPerPage, setPostsPerPage] = useState(10);
const [currentPage, setCurrentPage] = useState(1);

useEffect(  ()=>{
  const fetchPosts= async () =>{
    setLoading(true)
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
    setLoading(false)

  }
  fetchPosts();
}, [])


console.log(posts);


// Get current page

const indexOfLastPost = postsPerPage * currentPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

// Change Page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">My Blog Paggination</h2>
      <Posts posts = {currentPost} loading = {loading} /> 
      <Paggination postsPerPage={postsPerPage} totalPosts={posts.length}  paginate={paginate}/>  
      {/* <button className="btn btn-warning p-3"> hey</button>    */}
    </div>
  );
}

export default App;
