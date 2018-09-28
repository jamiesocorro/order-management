import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy, ViewContainerRef, OnChanges, Input } from '@angular/core';
import { OrderDetailsService } from '../../service/order.service';

@Component({
    selector: 'create-order',
    templateUrl: './create-order.component.html'
})


export class CreateOrderComponent implements OnInit {

    @Input()
    orders: any;

    constructor(private _orderService: OrderDetailsService) {
    }

    ngOnInit() {

    }

    saveOrder(): void {
        this._orderService.saveOrders(this.orders);
    }

}
