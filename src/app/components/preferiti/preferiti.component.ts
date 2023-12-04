import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent implements OnInit {

  lists: Product[] | undefined


  constructor(private prodSrv: ProductsService) { }

  ngOnInit(): void {

    this.lists = this.prodSrv.favorite2
    console.log(this.prodSrv.favorite2);
    
  }

}
