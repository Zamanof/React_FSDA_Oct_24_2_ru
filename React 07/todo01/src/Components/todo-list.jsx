import TodoListItem from "./todo-list-item.jsx";

const TodoList = ({todos}) => {

    const elements = todos.map((item)=>{
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <TodoListItem {...item}/>
            </li>
        )
    })
    return(
        <ul>
            {elements}
        </ul>
    )

}

export default TodoList;