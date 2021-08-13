import Swal from "sweetalert2";
import { DarkTheme } from "../../TodoList/themes/DarkTheme";
import {
  add_task,
  complete_task,
  delete_task,
  edit_task,
  undo_task,
  update_task,
} from "../types/ToDoListTypes";
import { change_theme } from "../types/ToDoListTypes";
import { arrTheme } from "../../TodoList/themes/ThemeManager";

const initialState = {
  themeTodoList: DarkTheme,
  taskList: [
    { id: "task1", taskName: "Khang nè!", completed: true },
    { id: "task2", taskName: "Khang nè!", completed: true },
    { id: "task3", taskName: "Chứ ai", completed: false },
    { id: "task4", taskName: "Nữa đâu", completed: false },
  ],
  taskEdit: { id: "-1", taskName: "", completed: false },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      if (action.newTask.taskName.trim() === "") {
        Swal.fire({
          icon: "info",
          position:"top",
          toast:true,
          text: "Please enter you task!",
          showConfirmButton: false,
          timer:2500,
          timerProgressBar: true,
        });
        return { ...state };
      }
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        Swal.fire({
          icon: "warning",
          text: "Task already exists!",
          position:"top",
          toast:true,
          showConfirmButton: false,
          timer:2500,
          timerProgressBar: true,
        });
        return { ...state };
      }

      // taskListUpdate.push(action.newTask);
      state.taskList = [...taskListUpdate, action.newTask];
      return { ...state };
    }

    case change_theme: {
      let theme = arrTheme.find((theme) => theme.id == action.themeId);
      if (theme) {
        state.themeTodoList = { ...theme.theme };
      }
      return { ...state };
    }

    case complete_task: {
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      // console.log(index);
      if (index !== -1) {
        taskListUpdate[index].completed = true;
      }
      // state.taskList = taskListUpdate;
      return { ...state, taskList: taskListUpdate };
    }
    case undo_task: {
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      if (index !== -1) {
        taskListUpdate[index].completed = false;
      }
      // state.taskList = taskListUpdate;
      return { ...state, taskList: taskListUpdate };
    }

    case delete_task: {
      //   let taskListUpdate = [ ...state.taskList] ;
      // taskListUpdate = taskListUpdate.filter(task=>task.id !== action.taskId);
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.taskId),
      };
    }
    case edit_task: {
      return { ...state, taskEdit: action.task };
    }
    case update_task: {
      // console.log(action.taskName);
      state.taskEdit = { ...state.taskEdit, taskName: action.taskName};
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.id === state.taskEdit.id
      );
      if (index !== -1) {
        // console.log(index);
        taskListUpdate[index] = state.taskEdit;
      }
      state.taskList = taskListUpdate;
      state.taskEdit = {id:'-1', taskName:'',completed:false}
      return { ...state };
    }
    default:
      return { ...state };
  }
};
