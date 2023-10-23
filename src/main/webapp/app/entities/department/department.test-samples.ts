import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 14980,
  departmentName: 'readily',
};

export const sampleWithPartialData: IDepartment = {
  id: 32554,
  departmentName: 'scenario',
};

export const sampleWithFullData: IDepartment = {
  id: 556,
  departmentName: 'whoa sugary credit',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'through after drat',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
