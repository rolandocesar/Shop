import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

import { CartService } from '../../services/cart.service';
import { Product } from '../../../product/interfaces/product-interfaces';
import { ProductsService } from '../../../product/products.service';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit, AfterViewInit {


  @Input() product!: Product;
  conditionToWasAdded: boolean = false;
  wasAdded: boolean = false;

  // To activate Modal
  wasModalTriggered: boolean = false;
  id!: string;

  constructor( private cartService: CartService,
      private modalService: ModalService
    ) {
      this.modalService.subjectChange.subscribe( value => {
        if ( value ) {
          this.wasModalTriggered = false;
          console.log('Modal was closed , it is from single-product-component(Parent) listening service');
        } else {
          console.log('Modal was opened , it is from single-product-component(Parent) listening service');
        }
      } )
  }

  ngAfterViewInit(): void {
    console.log('viewInit');
    // this.allProducts = this.prodService.products;
  }

  ngOnInit(): void {

    

    this.cartService.msgSameProduct.subscribe( value => {
      if ( value ) {
        console.log('In OnInit if value is true');
        this.conditionToWasAdded = true;
        Swal.fire('Info', 'Este producto ya lo has agregado al carrito anteriormente', 'warning');
      } else {
        console.log('In OnInit if value is false');
        this.conditionToWasAdded = false;
      }
    } )
  }

  addToCart( event: any ) {
    const { id } = event.target;
    this.cartService.addProductToCart( id );
    if ( !this.conditionToWasAdded ) {
      
      this.wasAdded = !this.wasAdded;
      setTimeout(() => {
        this.wasAdded = !this.wasAdded;
      }, 1400);

    }


  }

  // Modal

  triggerModal( event: any ) {
    const id = event.target.id;
    console.log('Modal is being call');
    this.wasModalTriggered = true;
    this.id = id;
  }

  // openModal() {
  //   console.log('Open Modal');
  //   this.changeOpenModal();
  // }

  // changeOpenModal() {
  //   this.isOpenModal = !this.isOpenModal;
  // }

  // openModal( event: any ) {
  //   // console.log('Opening Modal From single-product.component: ');
  //   console.log('All products given by input: ', this.allProducts);
  //   // console.log('ActiveProduct',this.activeProduct );
  //   const id = event.target.id;
  //   // console.log(id);
  //   let clickedProd = this.allProducts.find( p => p.id === id );
  //   // console.log('Clicked product', clickedProd);
  //   this.activeProduct = clickedProd!;
  //   // console.log('ActiveProduct',this.activeProduct );

  //   console.log('Processing Modal');
  //   this.modal.show();
  // }

  // closeModal() {
  //   console.log('Closing Modal');
  //   this.modal.hide();
  // }

}
