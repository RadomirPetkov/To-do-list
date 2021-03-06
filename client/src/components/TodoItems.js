export const TodoItem = (props) => {
    let className = "todo"

    if (props.isCompleted) {
        className = `todo is-completed`
    }

    return (
        <tr className={className}>
            <td>{props.name}</td>
            <td>{props.isCompleted ? "Completed" : "Incompleted"}</td>
            <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
            </td>
        </tr>
    )
}