export class TodoModel{
  // status:string = 'started';
  // title:string = '';

  constructor(
    public title:string ='',
    public status: string = 'started'
    ){}

  toggle():void{
    this.status =
      this.status === 'started' ? 'completed' : 'started';
  }
}