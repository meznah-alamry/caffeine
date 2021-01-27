import API_URL from '../apiConfig.js'
import React from "react";
import axios from "axios";

import  {useState ,useEffect }  from 'react';
export default function UserProfile(props) {
    const { name, email, _id } = props.auth.currentUser;
    const [updateProfile , setUpdateProfile] = useState({})
    const uploadImageHundler = (e) => {
        var format = new FormData()
        format.append("image", e.target.files[0])
        axios.post("https://api.imgur.com/3/image/", format, { headers: { "Authorization": "Client-ID 6cd46bc903efe25" } })
          .then(data =>{

            const img={img: data.data.data.link}
            axios.put(`${API_URL}/api/user/profile/info/${_id}`,img)
            .then((res) => {
            
              // setOneArticleViwer('done')
              console.log('done')
        
            }).catch(err=>{console.log(err)})
        
           
        })
      } 
      
      

    
   
    return (

<div className="cont">
<div className="form">
<form>
          <h3>My Profile</h3>
          <hr/>
          <div className="form-group">
              <label>Image:  </label>
        
              &nbsp;  <input
               type="file"
                name="image"
                 placeholder="image"
                 onChange={uploadImageHundler}
                 ></input>
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
  