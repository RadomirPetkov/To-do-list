import { TodoItem } from "./TodoItems"
import { useEffect, useState } from "react"

export const TodoList = () => {
    const [list, setList] = useState([])

    const fetchData = async () => {
        const res = await fetch(`http://localhost:3030/jsonstore/todo`)
        const data = await res.json()
        console.log(Object.values(data))
        setList(Object.values(data))
        return
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="table-wrapper">


            <table className="table">
                <thead>
                    <tr>
                        <th className="table-header-task">Task</th>
                        <th className="table-header-status">Status</th>
                        <th className="table-header-action">Action</th>
                    </tr>
                </thead>
                <tbody>
            {list?.map(x=> <TodoItem key={x._id} {...x}/>)}

                </tbody>
            </table>
        </div>
    )
}