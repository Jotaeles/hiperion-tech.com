import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, AboutComponent, DevelopmentComponent, ContactComponent, AppMovilComponent, AwsComponent, IntelligenceComponent,
		 IotComponent, DomoticaComponent, ErrorsComponent } from './components/index.paginas';

const APP_ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'acerca-de-hiperion', component: AboutComponent },
	{ path: 'inteligencia-artificial', component: IntelligenceComponent },
	{ path: 'internet-de-las-cosas', component: IotComponent },
	{ path: 'domotica', component: DomoticaComponent },
	{ path: 'desarrollo-web', component: DevelopmentComponent },
	{ path: 'desarrollo-de-aplicaciones', component: AppMovilComponent },
	{ path: 'amazon-web-services', component: AwsComponent },
	{ path: 'contacto', component: ContactComponent },
	{ path: '404', component: ErrorsComponent },
	{ path: '', pathMatch: 'full', redirectTo: ''},
	{ path: '**', component: ErrorsComponent}
];

	export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});