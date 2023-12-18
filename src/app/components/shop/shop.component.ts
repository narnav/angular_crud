import { Component } from '@angular/core';
import { ProdsService } from '../../services/prods.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css'
})
export class ShopComponent {
    myProds: any[] = []
    constructor(private prodSrv: ProdsService) {
        this.getData()
    }
    getData(){
        this.prodSrv.getProducts().subscribe(res => this.myProds =res)
    }

    delItem(item:any){
        this.prodSrv.delProduct(item.id).subscribe(res => this.getData())
    }

    addProd(desc:any,price:number){
        this.prodSrv.addProduct({"desc":desc,"price":price}).subscribe(res => this.getData())
    }
}
