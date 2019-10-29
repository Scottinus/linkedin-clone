import React, {Component} from "react"
import {connect} from "react-redux"

const mapStateToProps = reduxStore => {
    console.log(reduxStore)
    return reduxStore;
  };
  
  const mapDispatchToProps = dispatch => ({
        fetchData:()=>
        dispatch(handleFetchData())
  })
  const handleFetchData= () =>{
    return async function(
        dispatch,
        getState
    ){
        var response = await fetch("https://linkedin-api.herokuapp.com/profile/",  
        {method: "GET",
        headers: {
            'Authorization': 'Basic '+btoa('user3:nZ4uFd9hBp3dvKLu'), 
            'Content-Type': 'application/json'
        }
    });
        if(response.ok){
            console.log("Product GET Successfully");
                var result= await response.json()
        }else{
            alert("Product NOT GET Successfully");
        }
        dispatch({
            type:"LOGIN_DATA",
            payload: result
        })
    }
  }

class SignInPage extends Component{
constructor(props){
    super(props);
    this.state={
        username:"",
        password:"",
        token: null
    }
}

Login = async()=>{
    var response= await fetch("https://linkedin-api.herokuapp.com/profile/login",
    {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
        })
    });
    console.log(response)
    if(response.ok){
        var result = await response.json()
        console.log(result)
        this.setState({token: result.token})
        localStorage.setItem("accessToken", this.state.token)
        await this.props.fetchData();
        this.props.history.push("/info/" + result.username);
    }
    else{

        console.log("failed to fetch")
    }
    
}

    render(){
        return(
            <div className="container-fluid signin-container">
                <div id="signin-header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" />
                  <div id="signin-header-form">
                    <h3>Welcome Back</h3>
                    <p>Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>
                      <div className="mt-5 mb-3">
                        <input type="username" value={this.state.username} onChange={(event) => this.setState({username: event.currentTarget.value})} placeholder="Name@example.com"/>
                      </div>
                      <div>
                        <input type="password" value={this.state.password} onChange={(event) => this.setState({password: event.currentTarget.value})} placeholder="Password"/>
                      </div>
                      <div className="mt-4">
                      <button onClick={this.Login} className="confirm-btn">sign in</button>
                      </div>
                      <div id="help-contact">
                          <a className="d-block mb-2 mt-4" href="/">Forgot Password?</a>
                          <p className="d-inline">New to Linkedin? </p>
                          <a href="/">Join now</a>
                      </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignInPage);