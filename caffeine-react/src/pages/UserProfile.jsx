import React from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"; 

export default function UserProfile(props) {
    
    const { name, email, _id } = props.auth.currentUser;
    const [UserForProfile, setUserForProfile] = useState({});

    const uploadImageHundler = (e) => {
        var format = new FormData()
        format.append("image", e.target.files[0])
        axios.post("https://api.imgur.com/3/image/", format, { headers: { "Authorization": "Client-ID {id}" } })
        
        .then(data => console.log(data.data.data.link))
         
          .catch(err => console.log(err))
          setUserForProfile(UserForProfile);
      } 


   
    
      useEffect(() => {
         
          axios.get("http://localhost:5000/api/user/users").then((res) => {
            let UserForProfile = res.data.msg.find((ele) => ele._id == _id);
            console.log("from user profile"+res.data.msg)
            setUserForProfile(UserForProfile);
          });
        
      }, []);

    return (




<div className="cont">
    
<div className="form">
<form>
          <h3>My Profile</h3>
          <div className="profileIMG">  <img width="70" height="70" src={UserForProfile.img} alt="" srcset="" /></div>
          <hr/>
          <div className="form-group">

        
              <label>Image:  </label>
        
              &nbsp;  <input type="file"></input>
          </div>


          <div className="form-group">
              <label>Name:  </label>
             
              <label> &nbsp; { name } </label>
             
          </div>
        

          <div className="form-group">
              <label>Email address: </label>
             
              <label> &nbsp; {email} </label>
          </div>

         
      </form>
      </div>
      </div>
    )
  }
  