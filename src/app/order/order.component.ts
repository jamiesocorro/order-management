import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy, ViewContainerRef } from '@angular/core';

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

        this.orderDetails = [
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
