import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Product } from '../../../product/interfaces/product-interfaces';
import { ProductsService } from '../../../product/products.service';

declare var window: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id!: string;
  allProducts!: Product[];
  modal: any;
  activeProduct!: Product;

  constructor(
      private modalService: ModalService,
      private prodService: ProductsService
    ) {
      
  }

  ngOnInit(): void {
    this.allProducts = this.prodService.products;
    console.log('ID received by Parents', this.id);
    this.activeProduct = (this.allProducts.find( p => p.id == this.id ))!;
    this.modal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );

    this.openModal();

  }

  // closeOpen() {
  //   this.modalService.emit();
  // }
  

  openModal( ) {
    console.log('All products given by input: ', this.allProducts);
    console.log('Processing Modal');

    this.modal.show();
    this.modalService.putConditionInFalse();
  }

  closeModal() {
    console.log('Closing Modal');
    this.modal.hide();
    // this.activeProduct = {
    //   name: '',
    //   amount: 1,
    //   price: '',
    //   id: '',
    //   img1: '',
    //   img2: '',
    //   img3: '',
    //   desc: '',
    //   category: {
    //     _id: '',
    //     name: ''
    //   },

    // }
    this.modalService.emit();
  }

}
