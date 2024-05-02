export enum Estado{
    To_Do="To_Do",
    In_progress="In_progress",
    In_review="In_review",
    Done="Done",

}

export type Tarea={
    Name:string,
    Estado:Estado,

}