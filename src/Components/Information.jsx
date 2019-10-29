import React, {Component} from "react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"

const mapStateToProps = reduxStore => {
    console.log(reduxStore)
    return reduxStore;
  };

 class Information extends Component{
    constructor(props){
        super(props);
        this.state ={
            userinfo: [],
            userExp: [],
            collapse: false
        }
    }
 
    componentDidMount= async () =>{ 
        var username=this.props.match.params.user
        var filteredUser = this.props.userList.filter(filter => {
            return(
                filter.email == username
            )
        })
        var response = await fetch(`https://striveschool.herokuapp.com/api/profiles/${filteredUser[0].username}`, {method:"GET",
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
            await this.setState({userBio: this.state.userinfo.bio.slice(0, 30)})
            console.log(this.state.userBio)
        }else{
            console.log("error")
        }
       

    }

    handleCollpase= (event) =>{
        this.setState({collapse: !this.state.collapse})
        console.log(event)

    }


    render(){
        return(
            <>
            {this.state.userinfo &&
            <>
                 <div className="profile-container">
            <div className="row ml-0 exp-row">
                <div className="w-100 mt-4 mb-4">
                        <h5 className="ml-4 d-inline"><strong>Informations</strong></h5>  
                    <i className="fas fa-pen fa-lg float-right mr-4 edit-icon"></i>
                        <div className="icon-exp-edit">
                    </div>
                </div>
                <div className="col-12 mb-3">
                    {this.state.collapse ?  <p>{this.state.userinfo.bio.slice(0,200) + "..."}</p> :<p>{this.state.userinfo.bio}</p>}
                    <button className="collapse-btn" value={this.state.collapse} onClick={event => this.handleCollpase(event.target.value)}>{this.state.collapse ? "+ Read More" : "- Read Less"}</button>
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
  )(Information));