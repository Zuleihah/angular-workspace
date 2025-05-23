import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/customer';
//import { ICustomer } from '../view-customer/view-customer.component';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) {}
  getCustomers(): Observable<ICustomer[]> {
    const customersList = this.httpClient.get<ICustomer[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return customersList
  }
  // async getCustomers(){
  //   const customersList: ICustomer[] = await this.httpClient.get("https://jsonplaceholder.typicode.com/users")
  //   return customersList
  // }

  getCustomerById(id: number): Observable<ICustomer>{
    const customer = this.httpClient.get<ICustomer>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return customer;
  }
  createCustomer(customer: ICustomer): Observable<ICustomer>{
    const newCustomer = this.httpClient.post<ICustomer>(
      `https://jsonplaceholder.typicode.com/users`, customer
    );
    return newCustomer;
  }

  updateCustomer(customer: ICustomer): Observable<ICustomer>{
    const updatedCustomer = this.httpClient.put<ICustomer>(
      `https://jsonplaceholder.typicode.com/users/${customer.id}`, customer
    );
    return updatedCustomer;
  }

  deleteCustomer(id:number): Observable<ICustomer>{
    const deletedCustomer = this.httpClient.delete<ICustomer>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return deletedCustomer;
  }
}
