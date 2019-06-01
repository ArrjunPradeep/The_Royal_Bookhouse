import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { IProduct } from "../romance/romance.model";
import { Router } from '@angular/router';
@Component({
  selector: 'app-addfantasy',
  templateUrl: './addfantasy.component.html',
  styleUrls: ['./addfantasy.component.css']
})
export class AddfantasyComponent implements OnInit {

  constructor(private ps:ProductService,private router: Router) { }

  productItem=new IProduct(null,null,null,null,null,null);

  ngOnInit() {
  }


  AddProduct(){
    console.log(this.productItem)
    this.ps.newProduct(this.productItem);
    alert("Success");
    this.router.navigate(['']);
  }
}