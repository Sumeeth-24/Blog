import React,{useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getPostsBySearch} from '../actions/posts';

function useQuery() {
   return new URLSearchParams(useLocation().search);
 }

const Searchbar = () => {
   const query = useQuery();
   const history = useHistory();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
   const [search, setSearch] = useState('');
   const [tags, setTags] = useState([]);
   const dispatch = useDispatch();


   const searchPost = () => {
      if (search.trim() || tags) {
        dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
        history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
      } else {
        history.push('/');
      }
    };

   const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
         searchPost();
      }
    };

    return (
        <div>
           <div className="container h-screen  flex justify-center items-center">
              <div className="relative">
                 <div className="absolute top-2 left-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
                    <input type="text"
                     className="h-12 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                     placeholder="Search by title..."
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     onKeyDown={handleKeyPress}
                     
                     />
                 <div className="absolute top-2 right-2">
                     <button className="h-8 w-20 text-white rounded-lg bg-indigo-600 hover:bg-red-600" onClick={searchPost}>Search</button> 
                 </div>
              </div>
           </div>  
        </div>
    )
}

export default Searchbar;
