import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 12909,
};

export const sampleWithPartialData: IJob = {
  id: 3252,
  jobTitle: 'Customer Infrastructure Liaison',
  maxSalary: 17337,
};

export const sampleWithFullData: IJob = {
  id: 21805,
  jobTitle: 'Forward Usability Manager',
  minSalary: 1140,
  maxSalary: 27736,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
