import { BooksComponent } from './books/books.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routesConfig: Routes = [
    {
        path: 'books',
        component: BooksComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/books',
        pathMatch: 'full'
    }
];
