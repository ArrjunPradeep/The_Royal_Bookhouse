import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { IProduct } from "./romance.model";

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  providers:[ProductService],
  styleUrls: ['./romance.component.css']
})
export class RomanceComponent implements OnInit {

  title:String="PRODUCT MANAGEMENT";
  imageWidth:number=50;
  imageMargin:number=2;
  showImage:boolean=false;

  toggleImage():void{
    this.showImage=!this.showImage;
  }
  
  products:IProduct[];

  constructor(private ps:ProductService) { }

  ngOnInit():void{
    this.ps.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }
}