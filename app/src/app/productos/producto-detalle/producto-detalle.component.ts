import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  producto: Producto;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.data.subscribe(data => {
      this.producto = data['producto'];
    });
  }
  ngOnInit(): void {
  }

}
