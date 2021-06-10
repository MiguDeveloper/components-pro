export enum TestEnum {
  SAVE_PRO,
  SAVE_PRO_DETA,
}

export const fcActions = [
  {
    actionType: TestEnum.SAVE_PRO,
    url: '{0}/persInfo ',
    method: 'PUT',
  },
  {
    actionType: TestEnum.SAVE_PRO_DETA,
    url: '{0}/details ',
    method: 'PUT',
  },
];

export const fcActionsObj = {
  [TestEnum.SAVE_PRO]: {
    PUT: {
      actionType: TestEnum.SAVE_PRO,
      url: '{0}/persInfo ',
      method: 'PUT',
    },
  },
  [TestEnum.SAVE_PRO_DETA]: {
    POST: {
      actionType: TestEnum.SAVE_PRO_DETA,
      url: '{0}/details ',
      method: 'POST',
    },
    PUT: {
      actionType: TestEnum.SAVE_PRO_DETA,
      url: '{0}/details ',
      method: 'PUT',
    },
    DELETE: {
      actionType: TestEnum.SAVE_PRO_DETA,
      url: '{0}/details ',
      method: 'DELETE',
    },
  },
};

export class Acciones {
  accion: TestEnum;
  metodo = 'POST';
}
