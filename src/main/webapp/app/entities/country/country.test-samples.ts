import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 26208,
};

export const sampleWithPartialData: ICountry = {
  id: 3057,
};

export const sampleWithFullData: ICountry = {
  id: 16483,
  countryName: 'creolise failing expire',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
