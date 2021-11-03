import React, { Component } from 'react'
import ProjectService from '../services/ProjectService';

class UpdateProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            projectName: '',
            description: '',
            status: ''
        }
        this.changeprojectNameHandler = this.changeprojectNameHandler.bind(this);
        this.changedescriptionHandler = this.changedescriptionHandler.bind(this);
        this.updateProject = this.updateProject.bind(this);
    }

    componentDidMount(){
        ProjectService.getProjectById(this.state.id).then( (res) =>{
            let project = res.data;
            this.setState({projectName: project.projectName,
                description:project.description,
                status:project.status
            });
        });
    }

    updateProject = (e) => {
        e.preventDefault();
        let project = {projectName: this.state.projectName, description: this.state.description, status: this.state.status};
        console.log('project => ' + JSON.stringify(project));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProjectService.updateProject(project, this.state.id).then( res => {
            this.props.history.push('/projects');
        });
    }
    
    changeprojectNameHandler= (event) => {
        this.setState({projectName: event.target.value});
    }

    changedescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changestatusHandler= (event) => {
        this.setState({status: event.target.value});
    }

    cancel(){
        this.props.history.push('/projects');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Project</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Project Name: </label>
                                            <input placeholder="ProjectName" name="projectName" className="form-control" 
                                                value={this.state.projectName} onChange={this.changeprojectNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changedescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Status: </label>
                                            <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changestatusHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateProject}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateProjectComponent
