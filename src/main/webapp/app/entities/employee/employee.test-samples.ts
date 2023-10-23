import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 1002,
};

export const sampleWithPartialData: IEmployee = {
  id: 8936,
  phoneNumber: 'yippee vastly',
  salary: 19789,
};

export const sampleWithFullData: IEmployee = {
  id: 25684,
  firstName: 'Elaina',
  lastName: 'Mertz',
  email: 'Vance_Witting-Shanahan@gmail.com',
  phoneNumber: 'stud',
  hireDate: dayjs('2023-10-23T07:02'),
  salary: 26095,
  commissionPct: 15259,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
