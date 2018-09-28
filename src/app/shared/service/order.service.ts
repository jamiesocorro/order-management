import { Injectable } from '@angular/core';
import { OrderDetails } from '../model/order.model';

@Injectable()
export class OrderDetailsService {
    private orderDetails: OrderDetails[] = [];    

    deleteOrder(i: any) {
        this.orderDetails.splice(i, 1);
        localStorage.setItem('orderDetails', JSON.stringify(this.orderDetails));
    }

    getOrders(): OrderDetails[] {
        return this.orderDetails = JSON.parse(localStorage.getItem('orderDetails')) as any;
    }

    saveOrders(order: OrderDetails) {
        this.orderDetails.push(order);
        localStorage.setItem('orderDetails', JSON.stringify(this.orderDetails));
    }

    updateOrder(order: any) {
        let originalOrder = this.orderDetails.find(m => m.id === order.id);
        originalOrder = order;

        localStorage.setItem('orderDetails', JSON.stringify(this.orderDetails));
    }


}