
import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoCard from './TodoCard';
import { Todo } from '../../common/types';

const ShowTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get<Todo[]>('http://localhost:3000/todoRoutes/getTodos');
                console.log(response.data)
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        fetchTodos();
    }, []);
    
    const handleDelete = async (todoId:string) => {
        try {
            await axios.delete(`http://localhost:3000/todoRoutes/deleteTodo/${todoId}`);
           setTodos(prev=>prev.filter(todo => todo._id!==todoId))
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const handleEdit = () => {
        
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">All Todos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {todos.map(todo => (
                    <TodoCard key={todo._id} todo={todo} onDelete={()=>handleDelete(todo._id)} onEdit={()=>handleEdit}  />
                ))}
            </div>
        </div>
    );
};

export default ShowTodo;