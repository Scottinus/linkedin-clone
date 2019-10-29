import React, {Component} from "react"


class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            token: null,
            surname:"",
            bio:"",
            name:"",
            title:"",
        }
    }
    
    Signup = async()=>{
        var response= await fetch("https://cors-anywhere.herokuapp.com/linkedin-api.herokuapp.com/profile/register",
        {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
        email: "123abcefg",
        name: this.state.name,
        surname: this.setState.surname,
        bio: this.state.bio,
        title:this.state.title,
        username: this.state.email,
        password: this.state.password
            })
        });
        console.log(response)
        if(response.ok){
            var result = await response.json()
            console.log(result)
            this.setState({token: result.token})
            localStorage.setItem("accessToken", this.state.token)
            this.props.history.push("/signin");
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
                        <div className="mt-3 mb-3">
                            <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.currentTarget.value})} placeholder="name"/>
                            <input type="text" className="ml-3" value={this.state.surname} onChange={(event) => this.setState({surname: event.currentTarget.value})} placeholder="surname"/>
                          </div>
                          <div className=" mb-3">
                            <input className="mr-3" type="text" value={this.state.email} onChange={(event) => this.setState({email: event.currentTarget.value})} placeholder="Name@example.com"/>
                            <input type="password" value={this.state.password} onChange={(event) => this.setState({password: event.currentTarget.value})} placeholder="Password"/>
                          </div>            
                          <div className=" mb-3">
                            <input className="mr-3" type="text" value={this.state.title} onChange={(event) => this.setState({title: event.currentTarget.value})} placeholder="Title"/>
                            <input type="text" value={this.state.bio} onChange={(event) => this.setState({bio: event.currentTarget.value})} placeholder="Insert a short bio"/>
                          </div>
                          <div className="mt-4">
                          <button onClick={this.Signup} className="confirm-btn">sign up</button>
                          </div>

                      </div>
                    </div>
                </div>
            )
        }
    }
    
    export default Signup;