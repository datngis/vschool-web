import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { AnalyticsResolver } from './modules/admin/dashboard/analytics.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    // // Redirect empty path to '/example'
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },

    // // Redirect signed in user to the '/example'
    // //
    // // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // // path. Below is another redirection for that path to redirect the user to the desired
    // // location. This is a small convenience to keep all main routes together here on this file.
    // { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'admin' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'classy',
        },
        children: [
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import(
                        'app/modules/auth/confirmation-required/confirmation-required.module'
                    ).then((m) => m.AuthConfirmationRequiredModule),
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/forgot-password/forgot-password.module'
                    ).then((m) => m.AuthForgotPasswordModule),
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/reset-password/reset-password.module'
                    ).then((m) => m.AuthResetPasswordModule),
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.module').then(
                        (m) => m.AuthSignInModule
                    ),
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.module').then(
                        (m) => m.AuthSignUpModule
                    ),
            },
            {
                path: 'dashboard',
                resolve  : {
                    data: AnalyticsResolver
                },
                loadChildren: () =>
                    import('app/modules/admin/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    ),
            }  
            
        ],
    },

    // Admin routes
    // {
    //     path: '',
    //     canActivate: [NoAuthGuard],
    //     canActivateChild: [NoAuthGuard],
    //     component: LayoutComponent,
    //     resolve: {
    //         initialData: InitialDataResolver,
    //     },
    //     data: {
    //         layout: 'dense',
    //     },
    //     children: [            
    //         {
    //             path: 'dashboard',
    //             pathMatch: 'prefix',
    //             resolve  : {
    //                 data: AnalyticsResolver
    //             },
    //             loadChildren: () =>
    //                 import('app/modules/admin/dashboard/dashboard.module').then(
    //                     (m) => m.DashboardModule
    //                 ),
    //         }  
    //     ],
    // },   
];
