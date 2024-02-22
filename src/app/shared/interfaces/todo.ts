export interface Todo {
    id: string,
    title: string,
    description: string
}

export type createTodo= Omit <Todo , 'id'>
