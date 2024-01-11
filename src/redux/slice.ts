import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface Todo {
    id: number | string,
    title?: string,
    status?: boolean,
    index?: string | number
}

interface TodosState {
    todos: Todo[];
    filteredTodos: Todo[];
    isFiltered?: boolean,
  }

  const initialState: TodosState = {
    todos: [],
    filteredTodos: [],
    isFiltered: false
  };

export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            const newTodo: Todo = {
                id: Date.now(),
                title: action.payload.title,
                status: false,
            }
            state.todos.push(newTodo)
        },
        toggleStatus: (state, action: PayloadAction<Todo>) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[index].status = action.payload.status
        },
        filteredTodos: (state, action: PayloadAction<boolean | null>) => {
            state.filteredTodos = state.todos.filter((todo) => todo.status === action.payload)
          },
        setFiltered: (state) => {
          state.isFiltered = true
        },
        deleteTodos: (state, action) => {
          state.todos = state.todos.filter((todo) => {
            return todo.id !== action.payload;
          })
        },
          setTitle: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[index].title = action.payload.title
          }
    },
})

export const { addTodo, toggleStatus, filteredTodos, 
                setFiltered, deleteTodos, setTitle } = slice.actions

export const totalCompleteTodos = (state: Todo[]) => {
    return state.filter(todo => todo.status === true).length;
  };

  export const completedTodosList = (state: Todo[]) => {
    return state.filter(todo => todo.status === true);
  };

export default slice.reducer