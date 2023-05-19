import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bandadetalle } from '../banda-detalle';
import { bandaService } from '../banda.service';

@Component({
  selector: 'app-banda-detalle',
  templateUrl: './banda-detalle.component.html',
  styleUrls: ['./banda-detalle.component.css']
})
export class bandadetalleComponent implements OnInit {

  bandaId!: string;
  @Input() bandadetalle!: bandadetalle;

  constructor(
    private route: ActivatedRoute,
    private bandaService: bandaService) { }

  getbanda(){
    this.bandaService.getBanda(this.bandaId).subscribe(banda=>{
      this.bandadetalle = banda;
    })
  }

  ngOnInit() {
    if(this.bandadetalle === undefined){
      this.bandaId = this.route.snapshot.paramMap.get('id')!
      if(this.bandaId){
        this.getbanda();
      }
    }
  }

}
