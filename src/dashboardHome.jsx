import React from 'react';
class DashboardHome extends React.Component{
 
  constructor (props, context) {
    super(props, context);
    this.state = {
      condition:false
    }
  //  this.state.condition=false;
    //this.changeIcon = this.changeIcon.bind(this);
  }
   changeIcon() {
     this.setState({
      condition: !this.state.condition
    });
  }

  render () {
    return (
      <div id="DashbordHome">
           <div id="header">
           <div    className= { this.state.condition ? "menuicon change" : "menuicon" } onClick={this.changeIcon.bind(this)}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
           <div className="headertag">SuperTatkal </div>
           </div>
           <div id="body">

           </div>
      </div>
    );
  }
 
}
 
export default DashboardHome;