import nameJsonModule from './names.json';

export const nameJson: NamesJson = nameJsonModule;

type NamesJson = {
	actions: string[],
	animals: string[],
	colors: string[],
};
