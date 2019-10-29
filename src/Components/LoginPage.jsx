import React, {Component} from "react"


export default class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
            token: ""
        }
    }

    componentDidMount= () =>{
        this.setState({token: localStorage.getItem("accessToken")})
    }
Logout=() =>{
  localStorage.removeItem("accessToken");
  window.location.href='/'

}

    render(){
        return(
            <div className="w-100 login-navbar">
                <div className="row">
                    <div className="col-6">
                <div id="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" />
                </div>
                    </div>
                    <div className="col-6">
                        <div id="login-option-nav">
                            {this.state.token == null ?
                            <> 
                            <a href="/signup" className="mr-3">Join Now</a>
                            <button onClick={() => window.location.href='/signin'} className="sign-btn">sign in</button>
                            </>
                            : <button onClick={this.Logout} className="sign-btn">Log out</button>
                        }
                        </div>
                    </div>
                </div>

                <div className="row" id="header-loginpage">
                    <div className="col-6">
                        <h1>Welcome to your professional community
                        </h1>
                        <input id="searchbar" type="text" placeholder="Find jobs, people and more..."/>
                    </div>
                    <div className="col-6">
                        <div >
                        <img id="login-img-header" src="https://img.freepik.com/free-vector/people-using-digital-devices-modern-office_1262-19462.jpg?size=626&ext=jpg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}