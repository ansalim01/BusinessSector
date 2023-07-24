export enum ESorting {
  id = "id",
  title = "title",
  body = "body",
}
export enum EPost {
  userId = "number",
  id = "number",
  title = "string",
  body = "string",
}
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
