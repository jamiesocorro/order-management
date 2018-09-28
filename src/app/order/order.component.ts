import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { OrderDetails } from '../shared/model/order.model';
import { OrderDetailsService } from '../shared/service/order.service';
import { UserDetailsService } from '../shared/service/user.service';

@Component({
    selector: 'order',
    templateUrl: './order.component.html',
    providers: [OrderDetailsService, UserDetailsService],
    styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

    adminUser = null;
    column: string = 'CategoryName';
    currentOrder: any;
    isDesc: boolean = false;
    orderLabels = [];
    orderDetails = [];
    orders: OrderDetails = {
        id: null,
        name: null,
        weight: null,
        destination: null,
        creation_date: null,
        client_id: null
    }

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

        this.adminUser = JSON.parse(localStorage.getItem('adminUser')) as any;
    }

    initOrder() {
        this.orders = {
            id: 0,
            name: null,
            weight: null,
            destination: null,
            creation_date: null,
            client_id: 0
        }

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

    deleteOrder(i): void {
        this._orderService.deleteOrder(i);
    }        

     getOrders() {
        this.orderDetails = this._orderService.getOrders();
    };



}
