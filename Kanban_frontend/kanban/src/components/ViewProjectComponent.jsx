import React, { Component } from 'react'
import ProjectService from '../services/ProjectService'

class ViewProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            project: []
        }
    }

    componentDidMount(){
        ProjectService.getProjectById(this.state.id).then( res => {
            this.setState({project: res.data});
        })
    }

    render() {
        return (

            <div>
                <br></br>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Project Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Project Name: <b>{ this.state.project.projectName }</b></label>
                        </div>
                        <div className = "row">
                            <label> Description: <b>{ this.state.project.description } </b></label>                            
                        </div>
                        <div className = "row">
                            <label> Project Status <b>{ this.state.project.status }</b></label>
                        </div>
                        <br></br>

                    </div>

                </div>
            </div>


            // <div>
            //     <br></br>
            //     <div className = "card col-md-6 offset-md-3">
            //         <h3 className = "text-center"> View Project Details</h3>
            //         <div className = "card-body">
            //             <div className = "row">
            //                 <label> Project Name: </label>
            //                 <div> { this.state.project.projectName}</div>
            //             </div>
            //             <div className = "row">
            //                 <label> Description: </label>
            //                 <div> { this.state.project.description }</div>
            //             </div>
            //             <div className = "row">
            //                 <label> Status: </label>
            //                 <div> { this.state.project.status }</div>
            //             </div>
            //         </div>

            //     </div>
            // </div>
        )
    }
}

export default ViewProjectComponent