import { Component} from '@angular/core'
import {DataService} from "./Data.service"
@Component({
    selector: 'App',
    template: `
    <div *ngIf="votingOpen === false; else votingcard">
    <Form (submitEvent)="onSubmitEvent()"></Form>
    </div>
    <ng-template #votingcard>
        <VotingCard [title] = 'title' [state] = 'state' [votes] = 'votes'></VotingCard>
    </ng-template>`
  })
export default class AppComponent {
    votingOpen = false
    title = ''
    state = 'open'
    votes: Array<{option:string, count:number}> = []
    constructor(public data:DataService){}
    onSubmitEvent(){
        this.title = this.data.getTitle()
        this.votes = this.data.getVotes()
        this.votingOpen = true
    }
}