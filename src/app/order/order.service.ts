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

    deleteOrder(i: any) {
        return this.orderDetails.splice(i, 1);
    }

    getOrders(): OrderDetails[] {
        return this.orderDetails;
    }

    saveOrders(order: OrderDetails) {
        return this.orderDetails.push(order);
    }

    updateOrder(order: any, i: any) {
        this.orderDetails.forEach((item, index) => {
            if(i === index) {
                item = order;
            }
        });
    }


}