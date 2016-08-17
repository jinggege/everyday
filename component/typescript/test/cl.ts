export class Part1{
  private index:number = 0;
  private id:number = 0;
  private dt:string = "";

  constructor(dataType:string){
    this.dt = dataType;
    this.start();
  }

  public start(){
    let outT = setTimeout(function(){
      console.log("delay");
      clearTimeout(outT);
    },1001);

  }

  public stop(){

  }

  private getDate(){

  }










}
