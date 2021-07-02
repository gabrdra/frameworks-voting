import { Component, Input} from '@angular/core'
//import { Booth } from './Booth.component'
@Component({
    selector: 'VotingCard',
    template: `<h3>{{title}}</h3>
    <div  *ngIf="state === 'open'; else results">
        <Booth [options]="opt" (vote)="onVote($event)"></Booth>
    </div>
    <ng-template #results>
        <Results [votes] = 'votes'></Results>
    </ng-template>
    `
  })
export default class VotingCardComponent {
    opt: Array<string> = []
    @Input()
    title = ""
    @Input()
    state = ""
    @Input()
    votes: Array<{option:string, count:number}> = []
    ngOnInit(){
        this.votes.forEach(vote => {
            this.opt.push(vote.option)
        });
        //console.log(this.opt)
    }
    //ngOnChanges(changes: SimpleChange){
    //    console.log(changes);
    //}
    //public set votes(v: [{option:string, count:number}]){
    //    this.votes = v
    //    this.votes.forEach(vote => {
    //        this.opt.push(vote.option)
    //    });
    //}
    onVote(vote: string){
        this.votes.every(v => {
            if(v.option===vote){
                v.count++;
                this.state = 'closed'
                return false;
            }
            return true;
        });
    }
}