import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts', // 惯例: app-组件名
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  // Input 指出product的值从父组件传入
  @Input() product!: Product | undefined;
}
