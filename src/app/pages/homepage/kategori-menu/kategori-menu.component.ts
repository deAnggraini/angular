import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StrukturService } from 'src/app/modules/_services/struktur.service';

@Component({
  selector: 'app-kategori-menu',
  templateUrl: './kategori-menu.component.html',
  styleUrls: ['./kategori-menu.component.scss']
})
export class KategoriMenuComponent implements OnInit {

  backend_img: string = environment.backend_img;
  listData: any[] = [];
  constructor(private categori: StrukturService) { }

  ngOnInit(): void {
    this.categori.categories$.subscribe(d => {
      this.listData = d;
    })
  }

}
