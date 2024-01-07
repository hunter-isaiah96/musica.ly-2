import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SplitterModule } from 'primeng/splitter';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { PrimeNGConfig } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PlayerControlsComponent } from './components/player-controls/player-controls.component';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PlayerControlsComponent,
    SplitterModule,
    ToolbarModule,
    AutoCompleteModule,
    SearchBarComponent,
    MenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'musica.ly';
  menuItems = [
    {
      label: 'Navigation',
      items: [
        {
          label: 'Charts',
          escape: false,
          icon: 'pi pi-chart-pie',
          iconClass: 'text-xl',
          routerLink: '/',
        },
        // {
        //   label: 'Schedule',
        //   escape: false,
        //   icon: 'pi pi-calendar',
        //   iconClass: 'text-xl',
        //   routerLink: '/schedule',
        // },
      ],
    },
    // {
    //   label: 'Playlists',
    //   items: [
    //     {
    //       label: 'My Songs',
    //       escape: false,
    //     },
    //     {
    //       label: 'Chillstep',
    //       escape: false,
    //     },
    //   ],
    // },
  ];
  constructor(private primeConfig: PrimeNGConfig) {
    this.primeConfig.ripple = true;
  }
}
