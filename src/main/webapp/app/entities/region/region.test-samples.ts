import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 30879,
};

export const sampleWithPartialData: IRegion = {
  id: 27979,
};

export const sampleWithFullData: IRegion = {
  id: 16460,
  regionName: 'blah',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
