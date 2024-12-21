import React, { PureComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import { generateTodos } from './utils/generateTodos';
import { debounce } from './utils/debounce';
import './index.css';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            itemsToShow: "all",
            id: uuidv4(),
            title: '',
            description: '',
            editItem: false,
            priority: 'Not Urgent',
            hideCompleted: false,
            isLoading: false,
            searchTerm: ''
        };

        
        this.handleSearchChange = debounce(this.handleSearchChange.bind(this), 300);
    }

    handleGenerateTodos = () => {
        this.setState({ isLoading: true });
        setTimeout(() => {
            const newTodos = generateTodos(5000);
            this.setState({ 
                items: newTodos,
                isLoading: false,
            });
        }, 2000);
    }

    handleChangeTitle = event => {
        this.setState({ title: event.target.value });
    }

    handleChangeDescription = event => {
        this.setState({ description: event.target.value });
    }

    handleChangePriority = event => {
        this.setState({ priority: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const { title, description, id, editItem, items, priority } = this.state;

        if (title.length > 0) { 
            const newItem = { 
                id, 
                title, 
                description, 
                completed: false, 
                timestamp: new Date().toLocaleString(),
                priority 
            };

            if (editItem) {
                const updatedItems = items.map(currentItem => 
                    currentItem.id === id ? newItem : currentItem
                );
                this.setState({
                    items: updatedItems,
                    title: '',
                    description: '',
                    priority: 'Not Urgent',
                    editItem: false,
                });
            } else {
                this.setState(prevState => ({
                    items: [...prevState.items, newItem],
                    title: '',
                    description: '',
                    priority: 'Not Urgent',
                    id: uuidv4(),
                }));
            }
        }
    }

    toggleHideCompleted = () => {
        this.setState(prevState => ({ hideCompleted: !prevState.hideCompleted }));
    }

    updateTodosToShow = string => {
        this.setState({ itemsToShow: string });
    };

    handleDoneTask = id => {
        const updatedItems = this.state.items.map(item => 
            item.id === id ? { ...item, completed: !item.completed } : item
        );
        this.setState({ items: updatedItems });
    }

    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({ items: filteredItems });
    }

    handleEdit = id => {
        const selectedItem = this.state.items.find(item => item.id === id);
        this.setState({
            title: selectedItem.title,
            description: selectedItem.description,
            priority: selectedItem.priority,
            id: selectedItem.id,
            editItem: true,
        });
    }

    handleDeleteDoneTasks = () => {
        const filteredItems = this.state.items.filter(item => !item.completed);
        this.setState({ items: filteredItems });
    }

    clearList = () => {
        this.setState({ items: [] });
    }

    handleSearchChange = event => {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            return <div>Loading... </div>;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-8 mx-auto mt-4">
                    <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Search by task" 
                                onChange={this.handleSearchChange} 
                            />
                        </div>
                        <h3 className="text-capitalize text-center">Todo List</h3>
                        
                        <TodoInput
                            title={this.state.title}
                            description={this.state.description}
                            priority={this.state.priority}
                            handleChangeTitle={this.handleChangeTitle}
                            handleChangeDescription={this.handleChangeDescription}
                            handleChangePriority={this.handleChangePriority}
                            handleSubmit={this.handleSubmit}
                        />
                        
                        <div className="form-group form-check">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                checked={this.state.hideCompleted} 
                                onChange={this.toggleHideCompleted} 
                                id="hideCompleted" 
                            />
                            <label className="form-check-label" htmlFor="hideCompleted">Hide completed tasks</label>
                        </div>

                        <button 
                            className="btn btn-primary mb-3"
                            onClick={this.handleGenerateTodos}
                        >
                            Generate Todo
                        </button>

                        <TodoFilter
                            items={this.state.items}
                            itemsToShow={this.state.itemsToShow}
                            hideCompleted={this.state.hideCompleted}
                            searchTerm={this.state.searchTerm}
                            render={(filteredItems) => (
                                <TodoList
                                    items={filteredItems}
                                    clearList={this.clearList}
                                    handleDelete={this.handleDelete}
                                    handleEdit={this.handleEdit}
                                    handleDoneTask={this.handleDoneTask}
                                    handleDeleteDoneTasks={this.handleDeleteDoneTasks}
                                    updateTodosToShow={this.updateTodosToShow}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;