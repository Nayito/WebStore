import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-modaldesc',
  templateUrl: './modaldesc.component.html',
  styleUrls: ['./modaldesc.component.scss']
})
export class ModaldescComponent implements OnInit {
  @Input() product: Product;
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
