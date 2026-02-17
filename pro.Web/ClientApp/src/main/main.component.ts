import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Message } from '.././message/message';
import { Shared } from '.././shared/shared';
import { IResponse, IRolMenuView, IRolSubMenuView } from '../interface/interface-pro.interface';
import { ServiceProService } from '../service/service-pro.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  iRolMenuView: IRolMenuView;
  inRolMenuView: IRolMenuView[] = [];

  iRolSubMenuView: IRolSubMenuView;
  inRolSubMenuView: IRolSubMenuView[] = [];

  expand: boolean = true;
  matExpansionPanel: MatExpansionPanel;

  mode: MatDrawerMode = 'side';
  opened: boolean = true;
  closed: boolean = false;
  focus: boolean = false;

  contentWidth: string = '';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  @HostListener('window:resize', ['$event']) ngResize() {
    if (window.innerWidth >= this.shared.screen) {
      // DESKTOP
      this.mode = 'side'
      this.opened = true;
      this.closed = true;
      this.focus = true;
    } else {
      // MOVIL      
      this.mode = 'over'
      this.opened = false;
      this.closed = false;
      this.focus = false;
      this.expand = true;
    }
  }

  constructor(private cd: ChangeDetectorRef, public servicePro: ServiceProService, public shared: Shared, public message: Message, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.ngResize();
    this.ngController('getRolMenuView');
  }

  ngAfterViewInit() { }

  ngClean(option: string, data?: any): void {

    switch (option) {
      case 'iRolMenuView': {
        this.iRolMenuView = { idRol: 0, rol: '', idMenu: 0, menu: '', ruta: '', icono: '', orden: 0, idOrganizacion: this.shared.idOrganizacion, fecha: '', activo: true };
        break;
      }
      case 'inRolMenuView': {
        this.inRolMenuView = [];
        break;
      }
      case 'iRolSubMenuView': {
        this.iRolSubMenuView = { idRol: 0, rol: '', idMenu: 0, menu: '', idSubMenu: 0, subMenu: '', subMenuR: '', ruta: '', icono: '', orden: 0, idOrganizacion: this.shared.idOrganizacion, fecha: '', activo: true };
        break;
      }
      case 'inRolSubMenuView': {
        this.inRolSubMenuView = [];
        break;
      }
      case 'shared.inRolMenuView': {
        this.shared.inRolMenuView = [];
        break;
      }
      case 'shared.inRolSubMenuView': {
        this.shared.inRolSubMenuView = [];
        break;
      }
    }

  }

  ngModelSet(option: string, data?: any): void {

    switch (option) {
      case 'iRolMenuView': {
        this.ngClean('iRolMenuView');
        this.iRolMenuView.idRol = this.shared.idRol;
        break;
      }
      case 'iRolSubMenuView': {
        this.ngClean('iRolSubMenuView');
        this.iRolSubMenuView.idRol = this.shared.idRol;
        break;
      }
    }

  }

  ngModelGet(option: string, data?: any): void {

    switch (option) {
      case 'inRolMenuView': {
        const model: IRolMenuView[] = data as IRolMenuView[];
        this.inRolMenuView = model;
        break;
      }
      case 'inRolSubMenuView': {
        const model: IRolSubMenuView[] = data as IRolSubMenuView[];
        this.inRolSubMenuView = model;
        break;
      }
    }

  }

  ngController(option: string, data?: any): void {

    switch (option) {
      case 'getRolMenuView': {
        this.ngModelSet('iRolMenuView');
        this.ngGetRolMenuView(1, this.iRolMenuView);
        break;
      }
      case 'getRolSubMenuView': {
        this.ngModelSet('iRolSubMenuView');
        this.ngGetRolSubMenuView(1, this.iRolSubMenuView);
        break;
      }
    }

  }

  ngHandle(option: string, data?: any): void {

    switch (option) {
      case '': {

        break;
      }
    }

  }

  ngValidate(option: string, data?: any): boolean {
    let b: boolean = true;

    switch (option) {
      case '': {

        break;
      }
    }

    return b;
  }

  async ngGetRolMenuView(option: number, model: IRolMenuView) {

    await this.servicePro.ngGetRolMenuView(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('inRolMenuView', r.data);
          this.ngController('getRolSubMenuView');
        }
        else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  async ngGetRolSubMenuView(option: number, model: IRolSubMenuView) {

    await this.servicePro.ngGetRolSubMenuView(option, model)
      .then((r: IResponse) => {

        if (r.success) {
          this.ngModelGet('inRolSubMenuView', r.data);
          this.ngMenu();
        }
        else {
          this.message.dialogMessage(this.shared.ngFalse());
        }

      }).catch(
        (e: any) => {
          console.error(e);
          this.message.dialogMessage(this.shared.ngError(e));
        }
      ).finally(() => { });

  }

  ngMenu(): void {
    this.shared.inRolMenuView = this.inRolMenuView.map(v => ({ idRol: v.idRol, rol: v.rol, idMenu: v.idMenu, menu: v.menu, ruta: v.ruta, icono: v.icono, orden: v.orden, idOrganizacion: v.idOrganizacion, fecha: v.fecha, activo: v.activo }));
  }

  ngCloseSide(): void {
    if (window.innerWidth <= this.shared.screen) {
      this.sidenav.close();
    }
  }

  ngClosePanel(): void {
    if (this.shared.rd == true) {
      this.sidenav.close();
    }
  }

  ngOpenPanel(idMenu: number, matExpansionPanel: MatExpansionPanel, event: Event): void {
    event.stopPropagation();
    this.ngClean('shared.inRolSubMenuView');

    if (this.matExpansionPanel != undefined) {
      if (this.matExpansionPanel != matExpansionPanel) {
        this.matExpansionPanel.close();
      }
    }

    this.matExpansionPanel = matExpansionPanel;

    if (this.matExpansionPanel.expanded == true) {
      this.shared.inRolSubMenuView.push(...this.inRolSubMenuView.filter(v => v.idMenu == idMenu));
    }

  }

}
