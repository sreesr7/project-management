import React, { Component } from 'react'
import ProjectService from '../services/ProjectService'

class ListProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                projects: []
        }
        this.addProject = this.addProject.bind(this);
        this.editProject = this.editProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);

    }

    deleteProject(id){
        ProjectService.deleteProject(id).then( res => {
            this.setState({projects: this.state.projects.filter(project=> project.id !== id)});
        });
    }
    viewProject(id){
        this.props.history.push(`/view-project/${id}`);
    }
    editProject(id){
        this.props.history.push(`/add-project/${id}`);
    }

    componentDidMount(){
        ProjectService.getProjects().then((res) => {
            this.setState({ projects: res.data});
        });
    }

    addProject(){
        this.props.history.push('/add-project/_add');
    }
    

    render() {
        return (
            <div id="main" >
                 <h2 className="text-center">PROJECT LIST</h2>
                 <div className = "row" >
                    <button className="btn btn-primary" onClick={this.addProject}> Add Project</button>
                 </div>
                 <br></br>
                 <div className = "row" >
                 <div className = "col">
                     <div className="text-center" id="todo"><h2 className="text-danger">TO-DO </h2></div>
                        {
                            this.state.projects.filter( Project=>Project.status=="TO-DO").map(
                                project=>

                                <div class="card" style={{width: "20rem", margin:"15px  15px"}}>
                                    <div class="card-body" key = {project.id}>
                                        <h4 class="card-title"> { project.projectName}</h4>
                                        <h6 class="card-subtitle mb-2 text-muted">{project.status}</h6>
                                        <p class="card-text">{project.description}</p>

                                        <button onClick={ () => this.editProject(project.id)} className="btn-outline-success">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProject(project.id)} className="btn-outline-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewProject(project.id)} className="btn-outline-primary">View </button>
                                    </div>
                                </div>
                            )
                        }
                        </div>     
                       

                 
                
                 <div className = "col">
                 <div className="text-center"id="todo"><h2 className="text-warning">ON-PROGRESS</h2></div>
                        {
                            this.state.projects.filter( Project=>Project.status=="ON-PROGRESS").map(
                                project=>

                                <div class="card" style={{width: "20rem", margin:"15px  15px"}}>
                                    <div class="card-body" key = {project.id}>
                                        <h4 class="card-title"> { project.projectName}</h4>
                                        <h6 class="card-subtitle mb-2 text-muted">{project.status}</h6>
                                        <p class="card-text">{project.description}</p>

                                        <button onClick={ () => this.editProject(project.id)} className="btn-outline-success">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProject(project.id)} className="btn-outline-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewProject(project.id)} className="btn-outline-primary">View </button>
                                    </div>
                                </div>
                            )
                        }     
                       

                 </div>
                 <div className = "col">
                 <div className="text-center"id="todo"><h2 className="text-success">DONE</h2></div>
                        {
                            this.state.projects.filter( Project=>Project.status=="DONE").map(
                                project=>

                                <div class="card" style={{width: "20rem", margin:"15px  15px"}}>
                                    <div class="card-body" key = {project.id}>
                                        <h4 class="card-title"> { project.projectName}</h4>
                                        <h6 class="card-subtitle mb-2 text-muted">{project.status}</h6>
                                        <p class="card-text">{project.description}</p>

                                        <button onClick={ () => this.editProject(project.id)} className="btn-outline-success">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProject(project.id)} className="btn-outline-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewProject(project.id)} className="btn-outline-primary">View </button>
                                    </div>
                                </div>
                            )
                        }     
                       

                 </div>
                 </div>

            </div>
        )
    }
}
export default ListProjectComponent



{/* <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Project Name</th>
                                    <th> Description</th>
                                    <th> Status</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.projects.map(
                                       project => 
                                        <tr key = {project.id}>
                                             <td> { project.projectName} </td>   
                                             <td> {project.description}</td>
                                             <td  style={{background:project.status=='TO-DO'?'red':'greenyellow'}} > {project.status}</td>
                                             <td>
                                                 <button onClick={ () => this.editProject(project.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProject(project.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProject(project.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div> */}