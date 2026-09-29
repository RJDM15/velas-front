import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { Home } from './features/home/home';
import { Collections } from './features/collections/collections';
import { Custom } from './features/custom/custom';
import { Agent } from './features/agent/agent';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'Login',
        component: Login
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'Register',
        component: Register
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'Collections',
        component: Collections
    },
    {
        path: 'collections',
        component: Collections
    },
    {
        path: 'Custom',
        component: Custom
    },
    {
        path: 'custom',
        component: Custom
    },
    {
        path: 'Agent',
        component: Agent
    },
    {
        path: 'agent',
        component: Agent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
