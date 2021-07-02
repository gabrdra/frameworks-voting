import { Component, Input } from '@angular/core'

@Component({
    selector: 'VotingCard',
    template: `<h3>{{title}}</h3>`
  })
  export default class VotingCardComponent {
      @Input()
      title = "You Good?"
      @Input()
      state = ""
      @Input()
      votes = [{}]
  }