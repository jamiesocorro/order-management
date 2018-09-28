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
        const orders = this.orderDetails = JSON.parse(localStorage.getItem('orderDetails')) as any;
    
        if (!orders){
             this.orderDetails = [];
            return this.orderDetails;
        }
           
        return orders;
    }

    saveOrders(order: OrderDetails) {
        this.orderDetails.push(order);
        localStorage.setItem('orderDetails', JSON.stringify(this.orderDetails));
    }

    updateOrder(order: any) {
        let originalOrder = this.orderDetails.find(m => m.id === order.id);
        originalOrder = order;

        this.orderDetails.forEach((orderOrig) => {
            if (orderOrig.id == originalOrder.id) {
                orderOrig.name = originalOrder.name;
                orderOrig.weight = originalOrder.weight;
                orderOrig.destination = originalOrder.destination;
                orderOrig.creation_date = originalOrder.creation_date;
                orderOrig.client_id = originalOrder.client_id;

            }
        });

        localStorage.setItem('orderDetails', JSON.stringify(this.orderDetails));
    }


}