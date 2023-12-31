import { SelectName } from '../../types';

export interface FilterFormProps {
  handleSubmitForm: (endpoint: Array<SelectName>, param: [string, string][]) => void;
}

export interface FormFilterValues {
  character: boolean;
  location: boolean;
  episodes: boolean;
  text: string;
  name: string;
  status: statusTypes;
  species: string;
  type: string;
  gender: genderTypes;
  dimension: string;
  episode: string;
  locationName: string;
  locationType: string;
  episodeName: string;
}

export interface FormSelectValues {
  character: boolean;
  location: boolean;
  episodes: boolean;
}

export interface SearchValues {
  text: string;
  name: string;
  status: statusTypes;
  species: string;
  type: string;
  gender: genderTypes;
  dimension: string;
  episode: string;
  locationName: string;
  locationType: string;
  episodeName: string;
}

export interface CharacterSearchValues {
  name: string;
  status: statusTypes;
  species: string;
  type: string;
  gender: genderTypes;
  episode: string;
}

export interface CheckboxField {
  id: number;
  label: string;
  name: SelectName;
  isChecked: boolean;
}

export interface SearchFilterInputs {
  id: number;
  name: keyof SearchValues;
  placeholder: string;
}

export interface IfieldValidValues {
  [key: string]: Array<string>;
}

export type FilterInputs = { [key in SelectName]: Array<SearchFilterInputs> };

export type statusTypes = 'alive' | 'dead' | 'unknown';
export type genderTypes = 'female' | 'male' | 'genderless' | 'unknown';
