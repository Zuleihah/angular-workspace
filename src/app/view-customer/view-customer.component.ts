import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from '../interfaces/customer';
import { CustomerService } from '../services/customer.service';


// export interface ICustomer {
//   name: string;
//   email: string;
//   phone: string;
//   gender: string;
//   website:string
// }

// const ELEMENT_DATA: ICustomer[] = [
//   {name:"Favour", email:"fav@gmail.com", phone:"fav123", gender:"Male", website:"FavHouse"},
//   {name:"Ella", email:"elle@gmail.com", phone:"elle123", gender:"Female", website:"EllaHouse"},
//   {name:"Sarah", email:"sar@gmail.com", phone:"sar123", gender:"Female", website:"sarHouse"},
//   {name:"", email:"", phone:"", gender:"", website:""},
//   {name:"", email:"", phone:"", gender:"", website:""},
//   {name:"", email:"", phone:"", gender:"", website:""},
//   {name:"", email:"", phone:"", gender:"", website:""},
//   {name:"", email:"", phone:"", gender:"", website:""},
//   {name:"", email:"", phone:"", gender:"", website:""},
//   {name:"", email:"", phone:"", gender:"", website:""},
// ];


@Component({
  selector: 'app-view-customer',
  standalone: false,
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css',
})



export class ViewCustomerComponent implements OnInit {
  constructor(private router:Router, private customerService:CustomerService){}
  
ngOnInit(): void {
  this.onGetCustomers()
}
  goToCreateCustomer(){
    this.router.navigateByUrl('createCustomer')
  }


  messageFromChild!: string;
  receiveMessageFromChild($event: string){
    this.messageFromChild = $event;
  } 


  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'website'];
  dataSource!: ICustomer[];

  onGetCustomers(){
    this.customerService.getCustomers().subscribe((data)=> {
      console.log(data);
      this.dataSource = data;
    })
  }

  footerTextFromParent: string = "This is footer parent text";
  //displayedColumns: string[] = ['name', 'email', 'phone', 'gender', 'website'];
  //dataSource = ELEMENT_DATA;
}


