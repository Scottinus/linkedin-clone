import React, {Component} from "react"
import NavbarTop from "./Navbar"
import ProfileInfo from "./ProfileInfo"
import Modal from "./Modal"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import SignInPage from "./SignInPage";
import {connect} from "react-redux"
import Signup from "./Signup";

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
        var response = await fetch("https://striveschool.herokuapp.com/api/profiles/",  
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
            type:"STORE_DATA",
            payload: result
        })
    }
  }

class Main extends Component{

    componentDidMount= async ()=>{
        await this.props.fetchData();
    }
    render(){
        return(
            <Router>
              {/*   <NavbarTop/> */}
              <Route exact path="/" component={LoginPage}/>
              <Route path="/signin" component={SignInPage}/>
                <Route path='/info/:user' render={() => 
                 {
                     return(
                            <>
                         <NavbarTop/>
                         <ProfileInfo/>
                         </>
                     )

                 }       
                    }/>
                <Route path="/signup" component={Signup}/>
            </Router>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);