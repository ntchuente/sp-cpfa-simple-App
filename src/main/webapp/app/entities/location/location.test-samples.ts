import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 12269,
};

export const sampleWithPartialData: ILocation = {
  id: 21086,
  postalCode: 'considering',
  stateProvince: 'exercise next',
};

export const sampleWithFullData: ILocation = {
  id: 17620,
  streetAddress: 'ostracise ostracize',
  postalCode: 'seat wisely',
  city: 'Reingerhaven',
  stateProvince: 'mmm',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
