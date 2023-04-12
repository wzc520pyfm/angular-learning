import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product | undefined;

  // 注入此组件的ActivatedRoute, 用于访问路由信息
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // 从路由参数中获取productId
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // 在产品列表中查找productId的产品
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
