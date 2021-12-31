import React,{useState, useEffect} from 'react'
import './write.css';
import ChipInput from 'material-ui-chip-input';
import  {CKEditor}  from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';

const Write = ({currentId, setCurrentId}) => {
  const user =  JSON.parse(localStorage.getItem('profile'));
  const post = useSelector((state) => (currentId ? state.posts.posts.find((desc) => desc._id === currentId) : null));
  const dispatch = useDispatch();
  const history = useHistory();
  const [postData, setPostData] = useState({
     selectedFile: '', title: '', tags: [], desc: ''
  });


  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  const clear = () => {
     setCurrentId(0);
     setPostData({ selectedFile: '', title: '', tags: [], desc: '' });
  };

  const handleSubmit = async (e) => {
     e.preventDefault();

     if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }, history));
      clear();
    }
  };

  const handleckeditor =(e, editor) => {
     const value = editor.getData();
      setPostData({ ...postData, desc: value });
  }


  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
  };

  
    return (
        <div className="write">
          <div className="write1">{currentId ? 'Editing' : 'Create'} an Article</div>
     
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
         
        </div>

        <input
            className="writeInput"
            placeholder="Add a Title"
            type="text"
            autoFocus={true}
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
        
        <div style={{ padding: '25px 15px', width: '71%' }}>
          <ChipInput
            name="tags"
            variant="outlined"
            label="Add upto 3 tags"
            fullWidth
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>

        

        <CKEditor
           editor={ ClassicEditor } 
            value={postData.desc }
           onChange={handleckeditor}     
        />
        
        
        
    <div grid grid-cols-3 gap-4 inline-block>
        <button className=" mt-10  ml-4 mb-8  bg-indigo-600 border border-transparent rounded-xl px-3 py-1 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >                            
               PUBLISH
        </button>
        <button className="mb-8  ml-4  bg-pink-600 border border-transparent rounded-xl px-3 py-1 flex items-center justify-center text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >                            
               CLEAR
        </button>
    </div>
      </form>
    </div>
    )
}

export default Write;
