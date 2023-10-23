import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 11367,
};

export const sampleWithPartialData: IJobHistory = {
  id: 1006,
  startDate: dayjs('2023-10-23T06:51'),
  endDate: dayjs('2023-10-22T17:09'),
};

export const sampleWithFullData: IJobHistory = {
  id: 29213,
  startDate: dayjs('2023-10-23T07:21'),
  endDate: dayjs('2023-10-23T05:23'),
  language: 'FRENCH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
