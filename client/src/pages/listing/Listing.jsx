import React,{useEffect, useState} from 'react';
import useStyles from './styles';
import {  Divider, Typography} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import { bookmarkPost } from '../../actions/posts';
import {  useHistory } from 'react-router-dom';


const Listing = ({currentId,setCurrentId}) => {
    const classes = useStyles();
    const [postData, setPostData] = useState({
       creator: '', selectedFile: '', title: '', tags: [], desc: ''
     });
    const post = useSelector((state) =>(currentId ? state.posts.posts.find((desc) => desc._id === currentId) : null));
    const dispatch = useDispatch();
    const openPost = (currentId) => history.push(`/posts/${currentId}`);
    const history=useHistory();

    if(currentId){
        dispatch(bookmarkPost(currentId, postData));
    }

     useEffect(() => {
         if (post) setPostData(post);
       }, [post]);

    return (
        <div>
           <div className={classes.section}>
          <Typography gutterBottom variant="h5">Your Listings</Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
             
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(currentId)} key={currentId} >
                <Typography gutterBottom variant="h6">{post?.title}</Typography>
                 <Typography gutterBottom variant="subtitle2">{post?.tags+"  "}</Typography>
                {/* <Typography gutterBottom variant="subtitle1"> </Typography>  */}
                <img src={post?.selectedFile} width="200px" />
              </div>
            
          </div>
        </div>
        </div>
    )
}

export default Listing;
