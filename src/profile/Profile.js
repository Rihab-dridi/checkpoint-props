import React, {components} from 'react';
import PropTypes from "prop-types";



const Profile =(props)=>{
 const{fullName, bio, profession,children,handleName}=props;
 const styleObject = { backgroundColor:"black", color:"white"}
    return(
     <div className="Profile" style={styleObject}>
      
      <div  style={{width:"252px", backgroundColor:"black", textAlign:"center",padding:"80px 0px 50px 70px" }}>  
         {children}
      <h1>{fullName}</h1>
      <h1>{profession}</h1>
      <p>{bio}</p>
      <button onClick={() => handleName(fullName)} >Name</button>
      </div> 
      < img src="./cover2.jpg" alt ="cover" style={{width:"1000px", paddingLeft:"0"}}/>
      </div>
      
    )
}

Profile.defaultProps = {
  fullName: "Name",
  profession:"profession",
  bio: "bio",


 }

 Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired
};


export default Profile;