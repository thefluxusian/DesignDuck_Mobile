import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {OnsenModule} from 'ngx-onsenui';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {DesignDetailComponent} from './designDetail/designDetail.component';
import {MainDesignListComponent} from './main/mainDesignList.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule, MatButtonModule, MatIconModule, MatToolbarModule, MatToolbarRow} from "@angular/material";
import {CommonModule} from "@angular/common";

export const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {path: 'designDetail/:id', /*loadChildren: 'app/designDetail/designDetail.module#DesignDetailModule', */ component: DesignDetailComponent},
      {path: 'designList', component: MainDesignListComponent},
      {path: '', component: MainDesignListComponent},

    ]
  }
];
export const routing = RouterModule.forChild(routes);


@NgModule({
  declarations: [
    AppComponent,
    DesignDetailComponent,
    MainDesignListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    OnsenModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,

    routing,
    RouterModule.forRoot(
      routes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  entryComponents: [MainDesignListComponent],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})

export class AppModule {
}

