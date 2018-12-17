import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };
import { ChartsModule } from 'ng2-charts';
import { GraficaComponent } from './components/grafica/grafica.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, GraficaComponent],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
