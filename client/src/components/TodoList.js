import { TodoItem } from "./TodoItems"


export const TodoList = () =>{



    return(
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

                <TodoItem />

              </tbody>
            </table>
          </div>
    )
}