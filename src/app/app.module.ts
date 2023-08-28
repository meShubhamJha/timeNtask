import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyheaderComponent } from './myheader/myheader.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { MytaskComponent } from './mytask/mytask.component';
import { MytasklistComponent } from './mytasklist/mytasklist.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

import { TabsComponent } from './tabs/tabs.component';
import { MytaskAllComponent } from './mytask-all/mytask-all.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ControlsComponent } from './controls/controls.component';
import { PopupFormComponent } from './popup-form/popup-form.component';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    MyfooterComponent,
    MytaskComponent,
    MytasklistComponent,
    TabsComponent,
    MytaskAllComponent,
    ControlsComponent,
    PopupFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
