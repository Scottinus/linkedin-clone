import React, {Component} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class ContactList extends Component{

    constructor(props){
        super(props);
        this.state ={
            userinfo: [],
        }
    }

    componentDidMount= async () =>{ 
        var response = await fetch("https://striveschool.herokuapp.com/api/profiles/", {method:"GET",
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
            <Router>
            <div className="mt-4 contactlist-container">
                <p>Other Contacts</p>
          <div className="row">
              {this.state.userinfo.map(user =>{
                  return(
                      <div className="col-sm-12 mb-4">
                        <Link to={"/" + user.username} >
                      <img className="float-left mt-1 mr-2 ml-2 rounded-circle" src={user.image ? user.image : "http://istikbalegitim.com/Tasarim/Genel/images/user_icon_comment.png"} width="50px"/>
                      <div className="info-list">
                          <p className="m-0 mt-1 names">{user.name} {user.surname}</p>
                          <p>{user.title}</p>
                          </div>
                    </Link>
                 </div>

                    )
              })}
          </div>
            </div>
            </Router>

        )
    }
}