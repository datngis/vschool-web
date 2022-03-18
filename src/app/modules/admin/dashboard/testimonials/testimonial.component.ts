import { Component, OnInit, OnDestroy , Input} from '@angular/core';



/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
    selector: 'testimonial',
    templateUrl: './testimonial.component.html',
})
export class TestimonialComponent implements OnInit {
    isactive1 = true;
    isactive2 = false;
    isactive3 = false;
    isactive4 = false;

    constructor(
    ) {}
    
    
    ngOnInit() {
        
    }

    changetab(tab : number){
        if (tab == 1) {
            this.isactive1 = true;
            this.isactive2 = false;
            this.isactive3 = false;
            this.isactive4 = false;

        }else if(tab == 2){
            this.isactive2 = true;
            this.isactive1 = false;
            this.isactive3 = false;
            this.isactive4 = false;
        } else if(tab == 3) {
            this.isactive3 = true;
            this.isactive1 = false;
            this.isactive2 = false;
            this.isactive4 = false;
        }else {
            this.isactive4 = true;
            this.isactive1 = false;
            this.isactive2 = false;
            this.isactive3 = false;
        }
    }
}