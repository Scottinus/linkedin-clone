import React, {Component} from "react"
import ModalExp from "./Modal";
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"

const mapStateToProps = reduxStore => {
    console.log(reduxStore)
    return reduxStore;
  };

class Experience extends Component{
    constructor(props){
        super(props);
        this.state ={
            userExp: []
        }
    }

    componentDidMount=async () =>{
        var username= this.props.match.params.user
        var filteredUser = this.props.userList.filter(filter => {
            return(
                filter.email == username
            )
        })
        var responseExp = await fetch(`https://striveschool.herokuapp.com/api/profiles/${filteredUser[0].username}/experiences`, {method:"GET",
        headers: {
    'Authorization': 'Basic '+btoa('user3:nZ4uFd9hBp3dvKLu'), 
     'Content-Type': 'application/json'
          }
        })
        if(responseExp.ok){
            var result = await responseExp.json();
            this.setState({userExp: result})
            console.log(result)
        }else{
            console.log("error")
        }
    }

    render(){
        return(
            <div className="profile-container mt-4 mb-4">
            <div className="row ml-0 exp-row">
                <div className="w-100 mt-4 mb-4">
                        <h5 className="ml-4 d-inline"><strong>Experience</strong></h5>  
   <ModalExp/>
                </div>
                {this.state.userExp.map((exp, index) =>{
                    return(
                <div className="col-12 mb-3">
                      <div className="">
                      <ModalExp id={exp._id}/>
                    </div>
                   {/*  <img className="float-left mr-2 mt-2" src="https://media.licdn.com/dms/image/C560BAQEC0-EYA0wR0A/company-logo_400_400/0?e=1579132800&v=beta&t=Vb8_fg6j-dipXHuTxywcPUgLFXCBvI4YaH6lPAUCass" alt="test" width="50px"/>  */}
                    <i className="fas fa-university fa-lg float-left ml-3 mr-2 mt-2 icon-exp-job"></i>
                    <div className="info-experience">
                    <h5>{exp.role}</h5>
                    <h6>{exp.company}</h6>
                    <p>{exp.description}</p>
                    <p className="date">
         {exp.startDate == null ? "" : exp.startDate.slice(0,4)}
         {exp.endDate == null ? "" : " - " + exp.endDate.slice(0,4)}
                    </p>
                    </div>
                  
                    <hr/>
                </div>
                    )
                })}
            </div>
            </div>

        )
    }
}

export default withRouter(connect(
    mapStateToProps
  )(Experience));