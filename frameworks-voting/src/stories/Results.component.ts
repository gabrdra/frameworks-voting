import { Component, Input} from '@angular/core'

@Component({
    selector: 'Results',
    template: `
    <ol>
    <li *ngFor="let vote of votes">{{vote.option}} - {{vote.count}} votes {{(vote.count*100 / sum).toFixed(0)}}%</li>
    </ol>
    `
  })
export default class ResultsComponent {
  sum = 0
  @Input()
  votes: Array<{option:string, count:number}> = []
  ngOnInit(){
    this.votes.forEach(vote => {
      this.sum+=vote.count
    });
  }
}