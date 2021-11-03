import React, { Component } from 'react'
import ProjectService from '../services/ProjectService';

class CreateProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            projectName: '',
            description: '',
            status: '',
            selectValue:'TO-DO'
        }
        this.changeprojectNameHandler = this.changeprojectNameHandler.bind(this);
        this.changedescriptionHandler = this.changedescriptionHandler.bind(this);
        this.saveOrUpdateProject = this.saveOrUpdateProject.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProjectService.getProjectById(this.state.id).then( (res) =>{
                let project = res.data;
                this.setState({projectName: project.projectName,
                    description: project.description,
                    status : project.status
                });
            });
        }        
    }
    saveOrUpdateProject = (e) => {
        e.preventDefault();
        let project = {projectName: this.state.projectName, description: this.state.description, status: this.state.status};
        console.log('project => ' + JSON.stringify(project));

        // step 5
        if(this.state.id === '_add'){
            ProjectService.createProject(project).then(res =>{
                this.props.history.push('/projects');
            });
        }else{
            ProjectService.updateProject(project, this.state.id).then( res => {
                this.props.history.push('/projects');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Project</h3>
        }else{
            return <h3 className="text-center">Update Project</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Project Name: </label>
                                            <input placeholder="Project Name" name="projectName" className="form-control" 
                                                value={this.state.projectName} onChange={this.changeprojectNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changedescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Status </label>
                                            {/* <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changestatusHandler}/> */}
                                             <select defaultValue={this.state.selectValue} onChange={this.changestatusHandler}>
                                                            <option value="TO-DO">TO-DO</option>
                                                            <option value="ON-PROGRESS">ON-PROGRESS</option>
                                                            <option value="DONE">DONE</option>
                                             </select>    
                                        </div>

                                        <button className="btn-outline-success" onClick={this.saveOrUpdateProject}>Save</button>
                                        <button className="btn-outline-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProjectComponent