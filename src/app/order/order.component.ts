import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { OrderDetails } from './order.model';
import { OrderDetailsService } from './order.service';

@Component({
    selector: 'order',
    templateUrl: './order.component.html',
    providers: [OrderDetailsService],
    styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

    orderLabels = [];
    orderDetails = [];
    orders: OrderDetails = {
        id: 0,
        name: null,
        weight: null,
        destination: null,
        creation_date: null,
        client_id: 0
    }

    isDesc: boolean = false;
    column: string = 'CategoryName';

    constructor(private _orderService: OrderDetailsService) {
    }

    ngOnInit() {

        this.orderLabels = [
            { label: 'Id', field: 'id' },
            { label: 'Name', field: 'name' },
            { label: 'Weight', field: 'weight' },
            { label: 'Destination', field: 'destination' },
            { label: 'Creation Date', field: 'creation_date' },
            { label: 'Client Id', field: 'client_id' },

        ];        

           this.getOrders();
    }

    getOrders(){
        this.orderDetails = this._orderService.getOrders();
 
    };

    columnSort(property) {
        this.isDesc = !this.isDesc;
        this.column = property;
        let direction = this.isDesc ? 1 : -1;

        this.orderDetails.sort(function (a, b) {
            if (a[property] < b[property]) {
                return -1 * direction;
            }
            else if (a[property] > b[property]) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
    };

    saveOrder(): void {
        this._orderService.updateOrders(this.orders);
    }



}
