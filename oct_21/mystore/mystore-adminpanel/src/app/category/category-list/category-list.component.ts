import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories = []

  constructor(
    private toastr: ToastrService,
    private service: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories() {
    this.service
      .getCategories()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.categories = response['data']
        } else {
          this.toastr.error(response['error'])
        }
      })
  }

}
