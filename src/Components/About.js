import React from 'react';

const About = (props) => {
   if (props.data) {
      var name = props.data.name;
      var profile_pic = "images/" + props.data.image;
      var bio = props.data.bio;
      var city = props.data.address.city;
      var state = props.data.address.state;
      var country = props.data.address.country;
      var phone = props.data.phone;
      var email = props.data.email;
      var resumeDownload = props.data.resume_download;
   }

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={profile_pic} alt="Tim Baker Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{city}<br />
                           {state}, {country}
                        </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={resumeDownload} className="button" download><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>

      </section>
   );
}

export default About;
