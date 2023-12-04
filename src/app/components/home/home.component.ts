import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ProductsService } from 'src/app/Service/products.service';
import { Product } from 'src/app/Models/product';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  sub!: Subscription;
  products: Product[] | undefined
  favorite: Product[] = []
  click = false
  total: number = 0
  buys: Product[] = []

  constructor(private prodSrv: ProductsService) { 
  }

  ngOnInit(): void {
    this.recupera()
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  recupera() {
    this.sub = this.prodSrv.getProduct().subscribe((risultato) => {
      this.products = risultato;
      console.log(risultato);
      
    });
  }

  addFavorite(i: number){
    let prod: any = this.products?.filter((prod) => prod.id - 1 == i)
    this.favorite.push(prod[0]);
    this.prodSrv.favorite2.push(prod[0]);
    console.log(this.favorite);
    
  }

  addCart(i:number){
    let buyt: any = this.products?.filter(((prod) => prod.id - 1 == i))
    this.buys.push(buyt[0])
    this.total += buyt[0].price
    console.log(this.buys);
    
  }

}
