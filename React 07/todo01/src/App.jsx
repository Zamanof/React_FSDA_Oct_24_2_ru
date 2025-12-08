import React from "react";
import AppHeader from "./Components/app-header.jsx";
import SearchInput from "./Components/search-input.jsx";
import TodoList from "./Components/todo-list.jsx";

const todos = [
    {label: "Выйти на перемену", important: false, id:1},
    {label: "Курение вредно", important: true, id:2},
    {label: "А муха тоже вертолет.", important: false, id:3},
    {label: "Но без корбки передач.", important: false, id:4}
    ]
const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchInput/>
            <TodoList todos={todos} />
        </div>
    )
}

export default App;