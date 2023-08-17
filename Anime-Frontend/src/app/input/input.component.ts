import { Component, OnInit } from '@angular/core';
import { VtuberApiService } from '../vtuber-api.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  // constructor(private vtuberApiService: VtuberApiService){}
  // selectedImage: any;

  // getTestInit(){
  //   const Gura = "Gawr Gura";
  //   this.vtuberApiService.getVtuber(Gura).subscribe(
  //     (data: any)=>{
  //       this.selectedImage = data;
  //     },
  //     (error:any) => {
  //       console.error(error);
  //     }
  //   )
  //   console.log('test console log 1');
  //   console.log(this.selectedImage);
  // }

  // ngOnInit(): void {
  //   this.getTestInit();
  //   console.log('test console log 2');
  // }
}
