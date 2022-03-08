import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { Navigation } from 'app/core/navigation/navigation.types';
import { BaseService } from '../../../services/auth/base.service';
import { cloneDeep } from 'lodash-es';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { defaultNavigation } from 'app/mock-api/common/navigation/data';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private _navigation: ReplaySubject<Navigation> =
        new ReplaySubject<Navigation>(1);

    private readonly _defaultNavigation: FuseNavigationItem[] =
        defaultNavigation;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _baseServices: BaseService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation> {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation> {
        return this._baseServices.getMenu().pipe(
            tap((resMenu) => {
                let rootId = 0;

                const dataRes = [];
                resMenu.data.forEach((item) => {
                    if (item.ParentId === 0) {
                        rootId = item.Id;
                    }

                    dataRes.push(item);
                });

                const tree = (data, root) => {
                    // tslint:disable-next-line: one-variable-per-declaration
                    const r = [];
                    const o = {};
                    let currentIdPArent = '';
                    data.forEach((a) => {
                        if (o[a.id] && o[a.id].children) {
                            a.children = o[a.id] && o[a.id].children;
                        }
                        a.i18n = a.name;
                        a.text = a.name;
                        //a.id = a.id;
                        a.icon = a.icon ? a.icon : ``;
                        o[a.id] = a;
                        a.title = a.name;
                        a.type = 'basic';
                        a.link =
                            a.path !== ''
                                ? a.path.charAt(0) === '/'
                                    ? a.path
                                    : `/${ a.path }`
                                : '';
                        if (a.parentID === root) {
                            r.push(a);
                        } else {
                            o[a.parentID] = o[a.parentID] || {};
                            o[a.parentID].children =
                                o[a.parentID].children || [];
                            let param = {
                                ...a,
                                id: a.parentID != 0 ? a.parentID + '.' + a.id : a.id,
                            };
                            o[a.parentID].children.push(param);
                        }
                    });
                    return r;
                };

                let menuData = tree(dataRes, 0);
                menuData.forEach((item, index) => {
                    if (item.parentID == 0 && item.children?.length > 0) {
                        menuData[index].type = 'collapsable'
                    }
                    return menuData;
                });

                let param: Navigation = {
                    default: cloneDeep(menuData),
                    //default: cloneDeep(this._defaultNavigation),
                    compact: cloneDeep(menuData),
                    futuristic: cloneDeep(menuData),
                    horizontal: cloneDeep(menuData),
                };
                this._navigation.next(param);
            })
        );
    }
}
