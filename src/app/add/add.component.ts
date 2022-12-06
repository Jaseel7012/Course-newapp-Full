import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title=""
  desc=""
  date=""
  duration=""
  view=()=>{
    const data:any=[
      {
        "title":this.title,
        "desc":this.desc,
        "date":this.date,
        "duration":this.duration
      }
    ]
    console.log(data)

  }
  

}
