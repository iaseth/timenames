import nameJsonModule from './names.json';

export const nameJson: NamesJson = nameJsonModule;

interface NamesJson {
	actions: string[],
	animals: string[],
	colors: string[],
}

export function getTimeName (time: number = 0): string {
	time = time || Date.now();
	const seconds = Math.floor(time / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	const ss = seconds % 60;
	const mm = minutes % 60;
	const hh = hours % 24;

	const ssName = nameJson.animals[ss];
	const mmName = nameJson.actions[mm % nameJson.actions.length];
	const hhName = nameJson.colors[hh];

	const name = `${hhName} ${mmName} ${ssName}`;
	return name;
}
