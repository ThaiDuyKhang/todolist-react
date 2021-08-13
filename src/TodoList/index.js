import React, { Component } from "react";
import { Time } from "./_components/Time";
import { ThemeProvider } from "styled-components";
import { Container } from "./container/Container";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "./_components/Heading";
import { TextField } from "./_components/TextField";
import { Button } from "./_components/Button";
import { Toggle } from "./_components/Toggle";
import { Table, Tr, Th, Thead } from "./_components/Table";
import { connect } from "react-redux";
import {
  addTaskAction,
  changeThemeAction,
  completeTaskAction,
  deleteTaskAction,
  editTaskAction,
  undoTaskAction,
  updateTaskAction,
} from "../Redux/actions/ToDoListActions";
import { ButtonCheck } from "./_components/ButtonCheck";
import { ButtonEdit } from "./_components/ButtonEdit";
import { ButtonDelete } from "./_components/ButtonDelete";
import { ButtonUnCheck } from "./_components/ButtonUnCheck";
import { ButtonUpdate } from "./_components/ButtonUpdate";
import { DivField } from "./_components/divFields";
import { MainBody } from "./_components/GlobalStyles";

class TodoList extends Component {
  state = {
    taskName: "",
    disabled: true,
  };

  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.completed)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <DivField>
              <div className="row">
                <div className="col-1 d-flex align-items-center pl-4">
                  <ButtonCheck
                    className="ml-1"
                    onClick={() => {
                      this.props.dispatch(completeTaskAction(task.id));
                    }}
                  >
                    <i className="fa fa-check" />
                  </ButtonCheck>
                </div>
                <div className="col-8 d-flex align-items-center pl-1">
                  {task.taskName}
                </div>
                <div className="col-3 d-flex justify-content-end">
                  <Th>
                    <ButtonEdit
                      className="ml-1"
                      onClick={() => {
                        this.setState(
                          {
                            disabled: false,
                          },
                          () => {
                            this.props.dispatch(editTaskAction(task));
                          }
                        );
                      }}
                    >
                      <i className="fa fa-edit" />
                    </ButtonEdit>
                    <ButtonDelete
                      className="ml-1"
                      onClick={() => {
                        this.props.dispatch(deleteTaskAction(task.id));
                      }}
                    >
                      <i className="fa fa-trash" />
                    </ButtonDelete>
                  </Th>
                </div>
              </div>
            </DivField>
          </Tr>
        );
      });
  };

  renderTaskCompleted = () => {
    return this.props.taskList
      .filter((task) => task.completed)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <DivField>
              <div className="row">
                <div className="col-1 d-flex align-items-center pl-4">
                  <ButtonUnCheck
                    className="ml-1"
                    onClick={() => {
                      this.props.dispatch(undoTaskAction(task.id));
                    }}
                  >
                    <i className="fa fa-check" />
                  </ButtonUnCheck>
                </div>
                <div className="col-8 d-flex align-items-center pl-1">
                  {task.taskName}
                </div>
                <div className="col-3 d-flex justify-content-end">
                  <Th>
                    <ButtonDelete
                      className="ml-1"
                      onClick={() => {
                        this.props.dispatch(deleteTaskAction(task.id));
                      }}
                    >
                      <i className="fa fa-trash" />
                    </ButtonDelete>
                  </Th>
                </div>
              </div>
              </DivField>
          </Tr>
        );
      });
  };

  renderTheme = () => {
    // return arrTheme.map((theme, index) => {
    return (
      <Toggle
        className="tw-toggle"
        //  key={index}
      >
        <input
          defaultChecked
          type="radio"
          name="toggle"
          value={1}
          onClick={(event) => {
            let { value } = event.target;
            // console.log(value)
            this.props.dispatch(changeThemeAction(value));
          }}
        />
        <label className="toggle toggle-yes">
          <i className="fa fa-moon" /> Dark
        </label>
        <br />
        <input
          type="radio"
          name="toggle"
          value={2}
          onClick={(event) => {
            let { value } = event.target;
            //  console.log(value)
            this.props.dispatch(changeThemeAction(value));
          }}
        />
        <label className="toggle toggle-yes">
          <i className="fa fa-sun" /> Light
        </label>
        <br />
        <input
          type="radio"
          name="toggle"
          value={3}
          onClick={(event) => {
            let { value } = event.target;

            // console.log(value)
            this.props.dispatch(changeThemeAction(value));
          }}
        />
        <label className="toggle toggle-yes">
          <i className="fa fa-ice-cream" /> Cute
        </label>
        <span />
      </Toggle>
    );
  };
  // );
  // };

  render() {
    return (
      <ThemeProvider theme={this.props.themeTodoList}>
        {/* <BgBody>asvsa</BgBody> */}
        <MainBody />
        <Container>
          {this.renderTheme()}
          <div className="row d-flex align-items-center">
            <div className="col-8">
              <Heading1 className="mt-4">Todo list</Heading1>
            </div>
            <div className="col-4">
              <Time />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-9 col-sm-7">
              <TextField
                value={this.state.taskName}
                placeholder="Enter your task to do..."
                name="taskName"
                onChange={(event) => {
                  this.setState({
                    taskName: event.target.value,
                  });
                }}
              />
            </div>
            <div className="col-lg-3 col-sm-5 d-flex justify-content-center">
              <Button
                onClick={() => {
                  let { taskName } = this.state;
                  let newTask = {
                    id: Date.now(),
                    taskName,
                    completed: false,
                  };
                  // console.log(newTask)

                  this.props.dispatch(addTaskAction(newTask));
                }}
              >
                <i className="fa fa-plus" /> Add
              </Button>

              {this.state.disabled ? (
                <ButtonUpdate
                  disabled
                  className="ml-3"
                  onClick={() => {
                    this.props.dispatch(updateTaskAction(this.state.taskName));
                  }}
                >
                  <i className="fa fa-sync" /> Update
                </ButtonUpdate>
              ) : (
                <ButtonUpdate
                  className="ml-3"
                  onClick={() => {
                    let { taskName } = this.state;
                    this.setState(
                      {
                        disabled: true,
                        taskName: "",
                      },
                      () => {
                        this.props.dispatch(updateTaskAction(taskName));
                      }
                    );
                  }}
                >
                  <i className="fa fa-sync" /> Update
                </ButtonUpdate>
              )}

              {/* <Button
                className="ml-3"
                onClick={() => {
                  this.props.dispatch(updateTaskAction(this.state.taskName));
                }}
              >
                <i className="fa fa-sync text-warning" /> Update
              </Button> */}
            </div>
          </div>
          <Heading4 className="mt-5 mb-4 ml-2">Task to do</Heading4>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <Heading4 className="mt-5 mb-4 ml-2">Task completed</Heading4>
          <Table>
            <Thead>{this.renderTaskCompleted()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    themeTodoList: state.TodoListReducer.themeTodoList,
    taskList: state.TodoListReducer.taskList,
    taskEdit: state.TodoListReducer.taskEdit,
  };
};

export default connect(mapStateToProps)(TodoList);
