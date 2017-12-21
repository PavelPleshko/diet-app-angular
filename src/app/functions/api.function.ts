export const apiURL = 'http://localhost:3000';

export function getUrl(path:string){

	let url = apiURL + path;
	return url;
}
