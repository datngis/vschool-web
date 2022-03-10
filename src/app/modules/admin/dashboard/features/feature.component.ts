import { Component, OnInit, OnDestroy , Input} from '@angular/core';



/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
    selector: 'feature',
    templateUrl: './feature.component.html',
})
export class FeatureComponent implements OnInit {
    isactive1 = true;
    isactive2 = false;
    isactive3 = false;
    constructor(
    ) {}
    
    
    ngOnInit() {
        
    }

    changetab(tab : number){
        if (tab == 1) {
            this.isactive1 = true;
            this.isactive2 = false;
            this.isactive3 = false;
        }else if(tab == 2){
            this.isactive2 = true;
            this.isactive1 = false;
            this.isactive3 = false;
        } else {
            this.isactive3 = true;
            this.isactive1 = false;
            this.isactive2 = false;
        }
    }
}