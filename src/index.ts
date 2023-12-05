import nameJsonModule from '../names.json';

interface NamesJson {
	actions: string[],
	animals: string[],
	colors: string[],
}

export const nameJson: NamesJson = nameJsonModule;
