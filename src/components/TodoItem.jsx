import React, { PureComponent } from 'react';



class TodoItem extends PureComponent {
    state = {
        isHovered: false
    };

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    render() {
        const { item, handleDelete, handleEdit, handleDoneTask } = this.props;
        const { isHovered } = this.state;

        return (
            <li 
                className="list-group-item d-flex justify-content-between align-items-center"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <input 
                    type="checkbox" 
                    checked={item.completed} 
                    onChange={() => handleDoneTask(item.id)} 
                />
                <div class="title">
                    <strong style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        {item.title}
                    </strong>
                    <p style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        {item.description}
                    </p>
                    <span className={`badge ${item.priority === 'Urgent' ? 'badge-danger' : item.priority === 'Medium' ? 'badge-warning' : 'badge-secondary'}`}>
                        {item.priority}
                    </span>
                    <small className="text-muted">{item.timestamp}</small>
                    
                </div>
                <div className={`button-container ${isHovered ? 'visible' : 'hidden'}`}>
                    <button className="todo-button" onClick={() => handleEdit(item.id)}>Edit</button>
                    <button className="todo-button delete" onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            </li>
        );
    }
}

export default TodoItem;