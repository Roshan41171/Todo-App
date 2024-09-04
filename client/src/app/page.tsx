'use client';

import React, { useEffect, useState } from 'react';
import { createTodo, getTodos, updateTodo, deleteTodo } from './api';

interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export default function Home() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await getTodos();
        setTodos(response.data);
    };

    const handleAddTodo = async () => {
        const data = { title, description };
        await createTodo(data);
        fetchTodos();
        setTitle('');
        setDescription('');
    };

    const handleUpdateTodo = async (id: number) => {
        const data = { title, description };
        await updateTodo(id, data);
        fetchTodos();
    };

    const handleDeleteTodo = async (id: number) => {
        await deleteTodo(id);
        fetchTodos();
    };

    return (
        <div className="w-screen h-screen bg-slate-700 text-white">
            <div className="w-full h-1/6 flex bg-slate-500">
                <div className="flex flex-col mx-auto my-auto">
                    <div className="flex flex-row text-slate-900">
                        <div className="flex flex-col">
                            Title::
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            Description::
                            <input
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleAddTodo}
                            className="my-auto ml-8 bg-blue-300"
                        >
                            Add Todo
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-5/6 flex bg-slate-800 flex-col">
                <div className="mx-auto mt-8">
                    <div>Todos</div>
                    {todos.map((todo) => (
                        <div key={todo.id}>
                            <div>
                                {todo.title} - {todo.description}
                            </div>
                            <button onClick={() => handleUpdateTodo(todo.id)}>
                                Update
                            </button>
                            <button onClick={() => handleDeleteTodo(todo.id)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
