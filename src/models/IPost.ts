export enum ESorting {
  id = "id",
  title = "title",
  body = "body",
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
