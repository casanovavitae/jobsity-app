import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect, Route, Switch,Router} from 'react-router'
import { Link,HashRouter } from 'react-router-dom'
import Counter from '../counter/Counter'
import Manager from '../manager/Manager'

class Portfolio extends Component {
  render() {
      //var imageUrl = '../../images/portfolio/'+project.image;
      //
    if(this.props.portfolio){
      var portfolio = this.props.portfolio.projects.map(function(project,index){
      var imageUrl = 'https://www.staples-3p.com/s7/is/image/Staples/s0076752_sc7?$splssku$';
        return <div key={index} className="columns portfolio-item">
           <div className="item-wrap">
               <Link to={"/Portfolio/"+project.url}>
                 <img alt="" src={imageUrl} />
                 <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h5>{project.title}</h5>
                        <p>{project.category}</p>
                    </div>
                 </div>
              </Link>

           </div>
       </div>
      });
    }
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          	   {portfolio}
            </div>
             <HashRouter>
                 <div>
                     <Route path='/Portfolio/Counter' component={Counter}/>
                     <Route path='/Portfolio/Manager' component={Manager}/>
                 </div>
             </HashRouter>
         </div>
      </div>
   </section>
    );
  }
}

function mapStateToProps(state) {
    return{
        portfolio: state.api.data.portfolio
    }
}

export default connect(mapStateToProps)(Portfolio)
