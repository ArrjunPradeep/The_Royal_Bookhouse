import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { IProduct } from "../romance/romance.model";

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  providers:[ProductService],
  styleUrls: ['./thriller.component.css']
})
export class ThrillerComponent implements OnInit {
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