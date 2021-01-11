import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compare } from '../models/compare.model';
import { Products } from '../models/product.model';
import { CompareService } from '../services/compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
id:any;

  compareList:any;
  constructor(private myRoute:ActivatedRoute,private route:Router,private compareService:CompareService) {
    
    
    this.id=this.myRoute.snapshot.params["id"];
    console.log(this.id);
    this.compareService.getComparelist(this.id).subscribe(data=>{
      this.compareList=data;
      console.log(data);
    })
   }
   addToCompare(item:any)
   {this.compareList.User_Id=this.id;
     this.compareList.Prod_Id=item.Prod_Id;
     this.compareService.addToComparlist(this.compareList).subscribe(data=>console.log(data));
   }
   removeFromCompare(cmp1:Compare)
   {
     this.compareService.removeFromComparelist(this.id,cmp1).subscribe(data=>console.log(data));
     window.location.reload();
   }
  
  ngOnInit(): void {
  }

}
