import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient , withFetch} from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent,{
  providers: [
    provideHttpClient(withFetch(),) // Configure HttpClient to use fetch API
    ,provideAnimations(),
    provideStore(),
    appRoutes
]
}).catch(err => console.error(err));


