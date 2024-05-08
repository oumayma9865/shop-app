import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'cart',
        loadComponent: () => import('./home/cart/cart.page').then( m => m.CartPage)
      },
      {
        path: 'gifts/:id',
        children: [
          {
            path: '',
            loadComponent: () => import('./home/items-detail/items-detail.page').then( m => m.ItemDetailPage)
          },
          {
            path: 'cart',
           
            loadComponent: () => import('./home/cart/cart.page').then( m => m.CartPage)
            },
           
        
          ]
        },
        ],
      },
      {
        path: 'cart',
       
        loadComponent: () => import('./home/cart/cart.page').then( m => m.CartPage)
        },
      {
        path: 'profile',
        loadComponent: () => import('./home/profile/profile.page').then(m => m.ProfilePage)
      },
      {
        path: 'checkout',
        loadComponent: () => import('./home/checkout/checkout.page').then( m => m.CheckoutPage)
      },
    
  
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./home/sign-in/sign-in.page').then( m => m.SignInPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./home/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'auth-screen',
    loadComponent: () => import('./home/auth-screen/auth-screen.page').then( m => m.AuthScreenPage)
  },
  {
    path: 'splash',
    loadComponent: () => import('./home/splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'confirm',
    loadComponent: () => import('./home/confirm/confirm.page').then( m => m.ConfirmPage)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./home/checkout/checkout.page').then( m => m.CheckoutPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./homeadmin/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'pie-chart',
    loadComponent: () => import('./homeadmin/pie-chart/pie-chart.page').then( m => m.PieChartPage)
  },
  {
    path: 'grouped-vertical-bar-chart',
    loadComponent: () => import('./homeadmin/grouped-vertical-bar-chart/grouped-vertical-bar-chart.page').then( m => m.GroupedVerticalBarChartPage)
  },
  {
    path: 'tab',
    loadComponent: () => import('./homeadmin/tab/tab.page').then( m => m.TabPage)
  },
  {
    path: 'listseller',
    loadComponent: () => import('./homeadmin/listseller/listseller.page').then( m => m.ListsellerPage)
  },

  {
    path: 'selleradd',
    loadComponent: () => import('./homeadmin/selleradd/selleradd.page').then( m => m.SelleraddPage)
  },
  {
    path: 'seller-details.modal',
    loadComponent: () => import('./homeadmin/seller-details.modal/seller-details.modal.page').then( m => m.SellerDetailsModalPage)
  },
 
 
]
