"use client"

import { useState, useEffect } from 'react'

const Todo = () => {
    useEffect(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const resulte = await response.json()
        setTodo(resulte)
    }, [])

    const [todo, setTodo] = useState({})
    return (
        <div>{todo.title}</div>
    )
}

export default Todo