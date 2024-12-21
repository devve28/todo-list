import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';



class TodoList extends PureComponent {
    render() {
        const { items, handleDelete, handleEdit, handleDoneTask } = this.props;

        return (
            <ul className="list-group my-5">
                {items.length === 0 ? (
                    <p className="text-center">No tasks available</p>
                ) : (
                    items.map(item => (
                        <TodoItem
                            key={item.id}
                            item={item}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            handleDoneTask={handleDoneTask}
                        />
                    ))
                )}
            </ul>
        );
    }
}

export default TodoList;