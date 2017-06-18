import React, { Component } from 'react';
import {connect} from 'react-redux';

class Testimonials extends Component {
  render() {
    if(this.props.testimonials){
      var testimonials = this.props.testimonials.testimonials.map(function(testimonial){
        return <li>
           <blockquote>
              <p>{testimonial.text}
              </p>
              <cite>{testimonial.user}</cite>
           </blockquote>
        </li>
      });
    }
    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">
            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
                  <ul className="slides">
                     {testimonials}
                  </ul>
            </div>
         </div>
       </div>
   </section>
    );
  }
}

function mapStateToProps(state) {
    console.log(state.api.data.testimonials);
    return{
        testimonials: state.api.data.testimonials
    }
}

export default connect(mapStateToProps)(Testimonials)

