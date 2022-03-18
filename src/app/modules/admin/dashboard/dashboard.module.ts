import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CdkTableModule} from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { DashboardComponent } from './dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { FeatureComponent } from './features/feature.component';
import * as $ from 'jquery';
import { TestimonialComponent } from './testimonials/testimonial.component';

const dashboardRoutes: Route[] = [
    {
        path     : '',
        component: DashboardComponent,
    },
    {
        path     : 'feature',
        component: FeatureComponent,
    },
    {
        path     : 'testimonial',
        component: TestimonialComponent,
    },
];

@NgModule({
    declarations: [
        DashboardComponent, FeatureComponent, TestimonialComponent
    ],
    imports     : [
        RouterModule.forChild(dashboardRoutes),
        CdkTableModule,
        MatButtonModule,
        MatSelectModule,
        MatMomentDateModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        MatPaginatorModule,
        MatTabsModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatTooltipModule,
        NgApexchartsModule,
        SharedModule,
        MatButtonToggleModule,
        SlickCarouselModule,
        MatSortModule,
        MatTableModule,
    ]
})
export class DashboardModule
{
}
