import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateTodo = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const handleTodo = () => {
        axios.post('http://localhost:3000/todoRoutes/createTodo', {
            title: title,
            description: description
        })
    }
    const handleNavigate = () => {
        navigate('/showTodo')
    }

    return (<div>
        <div>
            <div>
                <label>Title</label>
                <input type="text" className="w-auto p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="title"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
            </div>
            <div>
                <label>Description</label>
                <input type="text" className="w-auto p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="description"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }} />
            </div>
            <div>
                <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={handleTodo}>Create Todo</button>
            </div>

            <div>
                <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={handleNavigate}>Show Todos</button>
            </div>
        </div>


    </div>)
}

export default CreateTodo