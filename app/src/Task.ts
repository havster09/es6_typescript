import {ITask} from "./ITask";

export class Task implements ITask{
    jobDescription:string;
    durationMinute:number;
    constructor(jobDescription:string,durationMinute:number){
        this.jobDescription = jobDescription;
        this.durationMinute = durationMinute;
        console.log(`creating instance ${this.jobDescription}`);
    }

    showId=(smNum:number)=>{console.log(this.jobDescription,smNum)};
}

export class HardTask extends Task implements ITask{
    constructor(jobDescription:string,durationMinute:number){
        super(jobDescription,durationMinute);
        console.log(`hard task will take ${this.durationMinute}`);
    }
}

