export class Joke {
    public setup:string;
    public punchline: string;
    public hide: boolean;
    public iLike:boolean;
    public totalLikes:number;

    constructor(setup:string, punchline: string){
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
        this.iLike = false;
        this.totalLikes = 10;
    }

    toggle(){
        this.hide = !this.hide;
    }
}