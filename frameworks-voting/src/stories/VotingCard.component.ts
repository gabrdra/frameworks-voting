import { Component, Input } from '@angular/core'
//import { Booth } from './Booth.component'
@Component({
    selector: 'VotingCard',
    template: `<h3>{{title}}</h3>
    <Booth [options]="['yes']"></Booth>`
  })
export default class VotingCardComponent {
    opt: Array<string> = []
    @Input()
    title = ""
    @Input()
    state = ""
    @Input()
    votes = [{}]
    //public set votes(v: [{option:string, count:number}]){
    //    this.votes = v
    //    this.votes.forEach(vote => {
    //        this.opt.push(vote.option)
    //    });
    //}
    onVote(vote: string){
        console.log(vote)
    }
}