import { createReducer, on } from '@ngrx/store';
import { Todo } from './todo.model';

import {
  addTodo,
  removeTodo,
  updateTodo,
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
} from './todo.actions';

export interface TodoState {
  todos: Todo[];
  error: string;
  status: string;
}

export const initialState: TodoState = {
  todos: [],
  error: '',
  status: 'pending',
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),

  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),

  on(updateTodo, (state, { id, stage }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, stage } : todo
    ),
  })),

  on(loadTodos, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
    error: '',
    status: 'success',
  })),
  // Handle todos load failure
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
