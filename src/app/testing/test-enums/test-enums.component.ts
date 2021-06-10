import {
  Acciones,
  TestEnum,
  fcActions,
  fcActionsObj,
} from './../../utils/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-enums',
  templateUrl: './test-enums.component.html',
  styleUrls: ['./test-enums.component.scss'],
})
export class TestEnumsComponent implements OnInit {
  names = ['Miguel', 'Giancarlo', 'Patrick'];

  constructor() {}

  ngOnInit(): void {
    this.logCompleted();
  }

  logCompleted() {
    const action = this.getAction();
    const accionEjecutar: Acciones = {
      accion: TestEnum.SAVE_PRO_DETA,
      metodo: 'PUT',
    };
    const action2 = this.getAction2(accionEjecutar);
    console.log('action2', action2);

    const action3 = this.getAction3({
      accion: TestEnum.SAVE_PRO_DETA,
    });
    console.log('action3', action3);

    if (action.actionType === TestEnum.SAVE_PRO_DETA) {
      console.log('enum', TestEnum.SAVE_PRO_DETA);
    }

    const url = 'cadena{0}guion{1}dospuntos';
    const propiedad = null;
    const reemplaso = url
      .replace('{0}', '-')
      .replace('{1}', propiedad?.toString() || 'e');
    console.log(reemplaso);
  }

  getAction() {
    return fcActions.find(
      (action) => action.actionType === TestEnum.SAVE_PRO_DETA
    );
  }

  getAction2(accion: Acciones) {
    return fcActionsObj[accion.accion]?.[accion.metodo];
  }

  // uso de parametros nombrados
  getAction3({ accion, metodo = 'POST' }) {
    return fcActionsObj[accion][metodo];
  }
}
