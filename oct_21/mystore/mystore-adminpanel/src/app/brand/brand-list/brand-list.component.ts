import { BrandService } from './../brand.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands = []

  constructor(
    private toastr: ToastrService,
    private service: BrandService) { }

  ngOnInit(): void {
    this.loadBrands()
  }

  loadBrands() {
    this.service
      .getBrands()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.brands = response['data']
        } else {
          this.toastr.error(response['error'])
        }
      })
  }

}
