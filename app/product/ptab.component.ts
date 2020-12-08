import {Component} from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';

@Component({
    selector:'ptab',
    templateUrl:'./ptab.component.html',
    styleUrls:['./ptab.component.css']
})
export class PtabComponent{
    parr:Product[];
    flag=false;
    pob:Product;

    constructor(private pservice:ProductService){
    }
    ngOnInit(){
        this.pservice.getAllProduct().subscribe(result=>this.parr=result);
    }
    updateProduct(p:Product){
        this.flag=true;
        this.pob=p;
    }
    deleteProduct(p:Product){
        console.log(p);
        this.pservice.deleteProduct(p).subscribe(result=>this.parr=result);

    }
    displayForm(){
        this.flag=true;
    }
}