import { Component, Input} from '@angular/core'

@Component({
    selector: 'Results',
    template: `
    <ol>
    <li *ngFor="let vote of votes">{{vote.option}} - {{vote.count}} votes </li>
    </ol>
    `
  })
export default class ResultsComponent {
    @Input()
    votes: Array<{option:string, count:number}> = []
}