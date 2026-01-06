import { Fragment, useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskItems = () => {
  const { taskItems, setTaskItems } = useContext(TaskContext);

  const handleSetDonetask = (id) => {
    const index = taskItems.findIndex(t=>t.id === id);
    let newTaskItems = [...taskItems];
    newTaskItems[index].done = !newTaskItems[index].done;
    setTaskItems(newTaskItems);
  }

  const handleDeleteTask = (id) => {
    const newTask = taskItems.filter(t=>t.id !== id);
    setTaskItems(newTask);
  }

  if (taskItems.length) {
    return (    
        <ul className="list-group m-0 p-0 mt-2">
          {taskItems.map(t => (
            <li className={
              `list-group-item d-flex justify-content-between 
              ${t.done ? "list-group-item-success" : ""}`
              }>
              {t.title}
              <span>
                  {
                      t.done ? (
                          <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"
                          onClick={() => handleSetDonetask(t.id)}></i> 
                      ) : (
                          <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"
                          onClick={() => handleSetDonetask(t.id)}></i>
                      )
                  }
                <i className="me-3 pointer fas fa-trash-can text-danger transition_200 text_hover_shadow"
                onClick={() => handleDeleteTask(t.id)}></i>
              </span>
            </li>
          ))}
        </ul>
         );
  } else {
    return <h4 className="text-center text-danger mt-4">هیچ کاربری ثبت نشده است...</h4>
  }
      
 
};

export default TaskItems;
