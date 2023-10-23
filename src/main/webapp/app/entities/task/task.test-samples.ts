import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 31137,
};

export const sampleWithPartialData: ITask = {
  id: 29055,
};

export const sampleWithFullData: ITask = {
  id: 10433,
  title: 'rip but trundle',
  description: 'experiment',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
