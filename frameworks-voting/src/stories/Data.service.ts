import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class DataService {
    title = ''
    votes = [{option:'', count:0}, {option:'',count:0}]
    getTitle(){
        return this.title
    }
    setTitle(t:string){
        this.title = t
    }
    getVotes(){
        return this.votes
    }
    setVotes(v: Array<{option:string, count:number}>){
        this.votes = v
    }
}