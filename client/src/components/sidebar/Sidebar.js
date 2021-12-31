// import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT AUTHOR</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <span className="sidebarTitle2">Articles 3</span>
      <span className="sidebarTitle2">Followers 3</span>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        <li className="sidebarListItem">
           
              Life
         
          </li>
          <li className="sidebarListItem">
        
              Music
          
          </li>
          <li className="sidebarListItem">
       
              Sport
          
          </li>
          <li className="sidebarListItem">
       
              Style
         
          </li>
          <li className="sidebarListItem">
          
              Tech
         
          </li>
          <li className="sidebarListItem">
         
              Cinema
        
          </li>
        </ul>
      </div>
     
    </div>
  );
}

export default Sidebar;