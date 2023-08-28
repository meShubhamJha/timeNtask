import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());

export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ id: string }>()
);

export const updateTodo = createAction(
  '[Todo] Update Todo',
  //   here we will give id and status
  props<{ id: string; stage: string }>()
);

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo API] Todo Load Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo API] Todo Load Failure',
  props<{ error: string }>()
);
