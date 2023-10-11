import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
info1: string[] =["Passionate & Enthusiastic graduate greatly influenced by the urge to learn more. Perfectionist in work. Looking forward for an opportunity that would help me to grow technically and at the same time to know my maximum potential that would help with the growth of the from that I'm about to work."]
info2: string[] =[" St. John's Matriculation Higher Secondary School ((10th))"," St. John's Matriculation Higher Secondary School ((12th))"]
info3: string[] =[" K.G college of arts and science ((Bachelors in Computer Application))","University of the West of Scotland ((MSC Project Management))"]

getinfo1(): string[]{
  return this.info1
}

getinfo2(): string[]{
  return this.info2
}

getinfo3(): string[]{
  return this.info3
}
  constructor() { }
}
