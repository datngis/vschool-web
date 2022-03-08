import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import {
    compactNavigation,
    defaultNavigation,
    futuristicNavigation,
    horizontalNavigation,
} from 'app/mock-api/common/navigation/data';
import { BaseService } from 'services/auth/base.service';

@Injectable({
    providedIn: 'root',
})
export class NavigationMockApi {
    private readonly _compactNavigation: FuseNavigationItem[] =
        compactNavigation;
    private readonly _defaultNavigation: FuseNavigationItem[] =
        defaultNavigation;
    private readonly _futuristicNavigation: FuseNavigationItem[] =
        futuristicNavigation;
    private readonly _horizontalNavigation: FuseNavigationItem[] =
        horizontalNavigation;

    /**
     * Constructor
     */
    constructor(
        private _fuseMockApiService: FuseMockApiService,
        private _baseServices: BaseService
    ) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
   async registerHandlers() {
        // -----------------------------------------------------------------------------------------------------
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
      //  let memuDefault =  await this.loadMenu()
        this._fuseMockApiService.onGet('api/common/navigation').reply(() => {
            // // Fill compact navigation children using the default navigation
            // this._compactNavigation.forEach((compactNavItem) => {
            //     this._defaultNavigation.forEach((defaultNavItem) => {
            //         if ( defaultNavItem.id === compactNavItem.id )
            //         {
            //             compactNavItem.children = cloneDeep(defaultNavItem.children);
            //         }
            //     });
            // });

            // // Fill futuristic navigation children using the default navigation
            // this._futuristicNavigation.forEach((futuristicNavItem) => {
            //     this._defaultNavigation.forEach((defaultNavItem) => {
            //         if ( defaultNavItem.id === futuristicNavItem.id )
            //         {
            //             futuristicNavItem.children = cloneDeep(defaultNavItem.children);
            //         }
            //     });
            // });

            // // Fill horizontal navigation children using the default navigation
            // this._horizontalNavigation.forEach((horizontalNavItem) => {
            //     this._defaultNavigation.forEach((defaultNavItem) => {
            //         if ( defaultNavItem.id === horizontalNavItem.id )
            //         {
            //             horizontalNavItem.children = cloneDeep(defaultNavItem.children);
            //         }
            //     });
            // });

            // let menuDefault: FuseNavigationItem[] = [];
            // this._baseServices.getMenu().subscribe((res) => {
            //     res.data.forEach(defaultIdItem => {
            //         let dataItem: FuseNavigationItem| any = {
            //             id:defaultIdItem.Id,
            //             type: 'basic',
            //             icon: defaultIdItem.Icon,
            //             title: defaultIdItem.Name,
            //             link: defaultIdItem.Path,
            //             parent: defaultIdItem.ParentId
            //         }
            //         menuDefault.push(dataItem)

            //     })
            // })

            // Return the response
            return [
                200,
                {
                    default: cloneDeep(this._defaultNavigation),
                },
            ];
        });
    }
  
}
