export class Post {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public sub_header?: string,
    public category?: string,
  ) {}
}


