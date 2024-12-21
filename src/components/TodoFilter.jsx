
import React, { PureComponent } from 'react';

class TodoFilter extends PureComponent {
    getPriorityValue(priority) {
        const priorityOrder = {
            'Urgent': 1,
            'Medium': 2,
            'Not Urgent': 3,
        };
        return priorityOrder[priority] || 4; 
    }

    filterAndSortItems() {
        const { items, itemsToShow, hideCompleted, searchTerm } = this.props;

        let filteredItems = items.filter(item => {
           
            if (itemsToShow === "todo" && item.completed) return false;
            if (itemsToShow === "done" && !item.completed) return false;
            if (hideCompleted && item.completed) return false;

           
            if (searchTerm) {
                const searchTermLower = searchTerm.toLowerCase();
                const titleMatch = item.title && item.title.toLowerCase().includes(searchTermLower);
                const descriptionMatch = item.description && item.description.toLowerCase().includes(searchTermLower);
                return titleMatch || descriptionMatch;
            }

            return true; 
        });

       
        filteredItems.sort((a, b) => {
            const priorityDiff = this.getPriorityValue(a.priority) - this.getPriorityValue(b.priority);
            return priorityDiff !== 0 ? priorityDiff : (a.completed === b.completed ? 0 : a.completed ? 1 : -1);
        });

        return filteredItems;
    }

    
    render() {
        const {completed, id}= this.props
        console.log(`todo ${id} renders`)
        const filteredAndSortedItems = this.filterAndSortItems();
        return this.props.render(filteredAndSortedItems);
    }
}

export default TodoFilter;