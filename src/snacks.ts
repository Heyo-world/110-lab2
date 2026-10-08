const snacks: string[] = ['Lays chips', 'Popcorn', 'Doritos'];

export function print(snack: string){
	console.log(snack);
}

for(const snack of snacks){
	print(snack);
}
