import React, { PureComponent } from 'react';


class TodoInput extends PureComponent {
    render() {
        const { title, description, priority, handleChangeTitle, handleChangeDescription, handleChangePriority, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Task Title" 
                        value={title} 
                        onChange={handleChangeTitle} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </span>
                        <input
                            type="text"
                            placeholder="Task Description (optional)" 
                            value={description} 
                            onChange={handleChangeDescription} 
                            className="form-control" 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="priority">Priority Level:</label>
                    <select 
                        id="priority" 
                        value={priority} 
                        onChange={handleChangePriority} 
                        className="form-control"
                    >
                        <option value="Not Urgent">Not Urgent</option>
                        <option value="Medium">Medium</option>
                        <option value="Urgent">Urgent</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add Task</button>
            </form>
        );
    }
}

export default TodoInput;