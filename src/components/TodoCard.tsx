import { Todo } from '../../common/types';

interface TodoCardProps {
    todo: Todo;
    onDelete: (todoId: string) => Promise<void>;
    onEdit:()=>void
}

const TodoCard = ({ todo, onDelete, onEdit }: TodoCardProps) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">{todo.title}</h2>
            <p className="text-gray-600 mb-4">{todo.description}</p>
            <div className="flex justify-between">
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={() => onDelete(todo._id)}>
                    Delete
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={onEdit}>
                    Edit
                </button>
            </div>
        </div>
    );
};

export default TodoCard;
