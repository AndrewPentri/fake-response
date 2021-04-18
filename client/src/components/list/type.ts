/**
* Модуль содержит типы для представления List и его контейнера
* */

export interface IListRecord {
    id: number | undefined,
    name: string,
    method: string,
    uri: string,
    body?: string
}
