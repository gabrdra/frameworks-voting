import {Component, EventEmitter, Output} from '@angular/core'
import {DataService} from "./Data.service"
@Component({
    selector: 'Form',
    template: `<form>
    title:
    <input type="text" [(ngModel)]="title" name="title">
    <br>
    <div *ngFor="let vote of votes; index as i">
        option: <input type="text" [(ngModel)]="vote.option" name="{{i}}option"> count: <input type="number" [(ngModel)]="vote.count" name="{{i}}count"> <br>
    </div>
    <input type="submit" value="send" (click)='submit()'>
    <br>
    <button type="button" (click)='addAlternative()'>add alternative</button>
    <button type="button" (click)='removeAlternative()'>remove alternative</button>
    </form>
    <div style= "white-space:pre;">{{errors}}</div>`
  })
export default class FormComponent {
    title = ""
    votes = [{option:'', count:0}, {option:'',count:0}]
    errors = ""
    @Output()
    submitEvent = new EventEmitter()
    constructor(public data:DataService){}
    addAlternative(){
        this.votes =[...this.votes, {option:'', count:0}]
    }
    removeAlternative(){
        if(this.votes.length > 2){
            this.votes.pop()
        }
    }
    submit(){
        this.errors = ""
        if(this.title.trim().length<5){
            this.errors += "the title should have at least 5 letters. \n"
        }
        for (let i = 0; i < this.votes.length; i++) {
            let vote = this.votes[i]
            if(vote.option.length < 1){
                this.errors += "option " + (i+1) + " can not be empty. \n"
            }            
            if(vote.count < 0 || vote.count == null){
                this.errors += "count " + (i+1) + " can not be smaller than 0. \n"
            }
        }
        if(this.errors.length < 1){
            this.data.title = this.title
            this.data.votes = this.votes
            this.submitEvent.emit()
        }
    }
}
