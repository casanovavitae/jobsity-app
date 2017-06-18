import React, { Component } from 'react';
import {connect} from 'react-redux';

class About extends Component {
  render() {
    if(this.props.about){
        var name = this.props.about.name;
        var image = 'images/'+this.props.about.image;
        var bio = this.props.about.bio;
        var street = this.props.about.address.street;
        var city = this.props.about.address.city;
        var state = this.props.about.address.state;
        var zip = this.props.about.address.zip;
        var phone = this.props.about.phone;
        var email = this.props.about.email;
        var resumeDownload = this.props.about.resumedownload;
    }
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={image} alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city}, {state} {zip}
                     </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

function mapStateToProps(state) {
    return{
        about: state.api.data.main
    }
}

export default connect(mapStateToProps)(About);
