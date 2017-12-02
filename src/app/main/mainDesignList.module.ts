

import {NgModule} from "@angular/core";
import {MainDesignListComponent} from "./mainDesignList.component";
import {OnsenModule} from "ngx-onsenui";
import {MatMenuModule, MatMenuTrigger, MatButtonModule, MatSelectModule} from "@angular/material";

@NgModule({
  declarations: [
    MainDesignListComponent
  ],
  imports: [
    OnsenModule,
    MatSelectModule,


  ],
})

export class MainDesignListModule { }
