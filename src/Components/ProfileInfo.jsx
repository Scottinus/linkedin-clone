import React from "react"
import About from "./About"
import Experience from "./Experience"
import Information from "./Information";
import ContactList from "./ContactList";
import {withRouter} from "react-router-dom"

class ProfileInfo extends React.Component{
            constructor(props){
                super(props);
                this.state ={
                    users: []
                }
            }


    componentDidMount= async () =>{ 
        console.log(this.props.match.params.user)
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
            await this.setState({users: result})
            console.log(this.state.users)
        }else{
            console.log("error")
        }
       

    }

    render(){
        return(
            <div className="mt-5 container">
            <div className="row">
                <div className="col-sm-8">
                    <div className="profile-container mb-4">
                    <About/>
                    </div>
                    <Information/>
                    <Experience/>
                </div>
                <div className="col-sm-4">
                    <div className="banner">
                        <a href="https://www.linkedin.com/jobs/?trk=consumer_jobs_global_fallback" target="_blank">
                        <img src="https://static.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" className="img-thumbnail"/>
                        </a>
                    </div>
                    <ContactList/>
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(ProfileInfo)