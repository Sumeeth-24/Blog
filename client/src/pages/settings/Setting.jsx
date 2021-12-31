import React from 'react';
import "./setting.css";
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../actions/auth';

const Setting = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          {(user?.result?.googleId  || user?.result?._id ) && (
          <span className="settingsTitleDelete" onClick={() => dispatch(deleteUser(user.result._id))}>Delete Account</span>
          )}
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              < AddCircleOutlineRoundedIcon className="settingsPPIcon far fa-user-circle"/>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <label>Bio</label>
          <input type="text" placeholder="Safak" name="bio" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}


export default Setting;