import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'Booth',
    template: `<button *ngFor="let option of options" click='vote.emit({{option}})'> {{ option }} </button>`
  })
export default class BoothComponent {
    @Input()
    options = ['test']
    @Output()
    vote = new EventEmitter<string>()
}