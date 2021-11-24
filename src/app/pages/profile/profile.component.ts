import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 187,
      FirstName: 'Alexandre',
      LastName: 'Rodrigues',
      Prefix: 'Sr.',
      Position: 'Programador',
      Picture: 'alxrds.png',
      BirthDate: new Date('1981/04/29'),
      HireDate: new Date('2021/09/14'),
      /* tslint:disable-next-line:max-line-length */
      Notes: 'Programador Java / Angular',
      Address: 'Aparecida de Goiânia - GO'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
