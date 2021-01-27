import React from "react";
import axios from "axios";
import  {useState}  from 'react';
export default function UserProfile(props) {
    
    const { name, email, _id } = props.auth.currentUser;
   
    const uploadImageHundler = (e) => {
        var format = new FormData()
        format.append("image", e.target.files[0])
        axios.post("https://api.imgur.com/3/image/", format, { headers: { "Authorization": "Client-ID {id}" } })
          .then(data => console.log(data.data.data.link))
          .catch(err => console.log(err))
      } 


      useEffect(() => {
        axios.get('http://localhost:5000/api/profile/')
          .then(res => {
            setArticles(res.data.msg.user)
          })
      }, [])
    
   
    return (

<div className="cont">
<div className="form">
<form>
          <h3>My Profile</h3>
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
  