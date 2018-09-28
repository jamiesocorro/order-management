import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy, ViewContainerRef, OnChanges, Input, Output } from '@angular/core';
import { OrderDetailsService } from '../../service/order.service';

@Component({
    selector: 'update-order',
    templateUrl: './update-order.component.html'
})


export class UpdateOrderComponent implements OnChanges {

    @Input()
    order: any;

    orderCopy = null;

    constructor(private _orderService: OrderDetailsService) {
        
    }

    ngOnChanges() {
        this.orderCopy = { ...this.order };
    }

    updateOrder(order) {
        this._orderService.updateOrder(order);
    }

    setDefault() {
        this.orderCopy = { ...this.order }
    }

}
