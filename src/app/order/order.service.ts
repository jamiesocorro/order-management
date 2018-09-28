import { Injectable } from '@angular/core';
import { OrderDetails } from './order.model';

@Injectable() 
export class OrderDetailsService {
    private orderDetails: OrderDetails[] = [
        {
            id: 1,
            name: 'order1',
            weight: '32kg',
            destination: 'usa',
            creation_date: '09-27-2018',
            client_id: 1
        },
        {
            id: 2,
            name: 'order2',
            weight: '33kg',
            destination: 'ph',
            creation_date: '09-27-2018',
            client_id: 1
        },
        {
            id: 3,
            name: 'order3',
            weight: '34kg',
            destination: 'sg',
            creation_date: '09-27-2018',
            client_id: 2
        }
    ];

    getOrders(): OrderDetails[] {
        return this.orderDetails;
    }

    updateOrders(order: OrderDetails) {
        return this.orderDetails.push(order);
    }
}