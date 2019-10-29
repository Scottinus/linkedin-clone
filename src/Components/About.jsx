import React, {Component} from "react"
import {withRouter} from "react-router-dom";
import {connect} from "react-redux"

const mapStateToProps = reduxStore => {
    console.log(reduxStore)
    return reduxStore;
  };
  
class About extends Component{
      constructor(props){
          super(props);
          this.state ={
              userinfo: [],
            collapse: false
        }
    }
    
    
    componentDidMount= async () =>{ 
        var username= this.props.match.params.user
        var filteredUser = await this.props.userList.filter(filter => {
            return(
                filter.email == username
            )
        })
        console.log(filteredUser)
        var response = await fetch("https://striveschool.herokuapp.com/api/profiles/" + filteredUser[0].username, {method:"GET",
        headers: {
            'Authorization': 'Basic '+btoa('user3:nZ4uFd9hBp3dvKLu'), 
            'Content-Type': 'application/json'
        }
    }
    );
    if(response.ok){
        var result = await response.json();
        console.log(result)
        await this.setState({userinfo: result})
    }else{
        console.log("error")
    }
}


render(){
    return(
        <>
        {this.state.userinfo && 
        <>
<div className="row about-one w-100">
                <div className="col-12">
                </div>
            </div>
            <div className="row about-two w-100">
                <div className="col-12">
                    <div className="d-flex ml-4 float-left">
                    <img className="profile-img" src="https://media.licdn.com/dms/image/C5603AQGzwg5cruG4ew/profile-displayphoto-shrink_200_200/0?e=1576713600&v=beta&t=aAZ-ValpHxI-ITVkBFrs5GWrk8Tt1iwhVkzPgA4iZ1w"/>
                    </div>
                    <div className="d-block mt-3 float-right">
                 <button className="add-profile-btn">Add profile section</button>
                 <button id="more-btn">More...</button>
                    </div>
                    <div className="text-about ml-4 pb-4">
                    <h4>{this.state.userinfo.name} {this.state.userinfo.surname}</h4>
                    <h5>{this.state.userinfo.title}</h5>
                    <p className="d-inline mr-3">{this.state.userinfo.area}</p>
                        <a href="#">Info Contact</a>
                    </div>
                </div>
            </div>
        </>

        }
            
</>
        )
    }
}

export default withRouter(connect(
    mapStateToProps
  )(About));