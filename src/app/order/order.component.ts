import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { OrderDetailsService } from './order.service';

@Component({
    selector: 'order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

    orderLabels = [];
    orderDetails = [];
    isDesc: boolean = false;
    column: string = 'CategoryName';

    ngOnInit() {

        this.orderLabels = [
            { label: 'Id', field: 'id' },
            { label: 'Name', field: 'name' },
            { label: 'Weight', field: 'weight' },
            { label: 'Destination', field: 'destination' },
            { label: 'Creation Date', field: 'creation_date' },
            { label: 'Client Id', field: 'client_id' },

        ];

        const orderService = new OrderDetailsService;
        this.orderDetails = orderService.getOrders();

    }

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

    

}
