import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class FormModal extends React.Component {
constructor(props){
    super(props);
    this.state={
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
        id:""
    }
}

OnSubmitHandler= async() =>{
    var exp= {
        role: this.state.role,
        company: this.state.company,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        description: this.state.description,
        area: this.state.area,
    }

    if(this.props.id){
      var username= this.props.match.params.user
        console.log("PUT")
            var response = await fetch(`https://striveschool.herokuapp.com/api/profiles/${username}/experiences` + this.props.id, 
            {method: "PUT",
            headers: {
                Accept: 'application/json',
                 'Content-Type': 'application/json',
                'Authorization': 'Basic '+btoa('user3:nZ4uFd9hBp3dvKLu')
                    },
            body:JSON.stringify(exp)
               }
            )
            if(response.ok){
                var result = await response.json();
                console.log("putted")
            }else{
                console.log("error")
            }
    }else console.log("POST")
    var response = await fetch(`https://striveschool.herokuapp.com/api/profiles/${username}/experiences`, 
    {method: "POST",
    headers: {
        Accept: 'application/json',
         'Content-Type': 'application/json',
        'Authorization': 'Basic '+btoa('user3:nZ4uFd9hBp3dvKLu')
            },
            body: JSON.stringify(exp)

       }
    )
    if(response.ok){
        var result = await response.json();
        console.log("posted")
    }else{
        console.log("error")
    }

}
OnChangeHandler= (event) =>{
            this.setState({[event.currentTarget.name] : event.currentTarget.value})
            console.log(event.currentTarget.value)
}

  render() {
    return (
      <Form id={this.props.id}>
        <FormGroup>
          <Label for="exampleRole">Role</Label>
          <Input
            value={this.state.role}
            onChange={this.OnChangeHandler}
            type="text"
            name="role"
            id="exampleRole"
            placeholder="Role..."
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCompany">Company</Label>
          <Input
            value={this.state.company}
            onChange={this.OnChangeHandler}
            type="text"
            name="company"
            id="exampleCompany"
            placeholder="Company..."
          />
        </FormGroup>
        <FormGroup>
          <div className="row">
            <div className="col-6">
              <Label for="startDate">Start Date</Label>
              <Input 
                value={this.state.startDate}
                onChange={this.OnChangeHandler}
              type="date" name="startDate" id="startDate" />
            </div>
            <div className="col-6">
              <Label for="endDate">End Date</Label>
              <Input 
                value={this.state.endDate}
                onChange={this.OnChangeHandler}
              type="date" name="endDate" id="endDate" />
            </div>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDescription">Description</Label>
          <Input
            value={this.state.description}
            onChange={this.OnChangeHandler}
           type="textarea" name="description" id="exampleDescription" />
        </FormGroup>
        <button className="add-profile-btn" onClick={this.OnSubmitHandler}>Submit</button>
      </Form>
    );
  }
}

export default FormModal;
