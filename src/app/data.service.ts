import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "any"
})

export class DataService {

    info1: string[] = ["Shubhangi", "E52", "shubh@gmail.com"];
    info2: string[] = ["Yogesh", "E63", "yog@gmail.com"];
    info3: string[] = ["Meghraj", 'E73', "raj@gmail.com"];

    getInfo1(): string[]{
        return this.info1;
    }
    getInfo2() : string[]{
        return this.info2;
    }
    getInfo3(): string[]{
     return this.info3;
    }

    addInfo(info : any){
        this.info1.push(info.location);
        this.info1.push(info.education);
        return this.info1;
    }
    constructor(){

    }
}