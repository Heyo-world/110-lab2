
export let snacks_Jose: string[] = ["oreos", "chips", "skittles"]; 

const snacks_Tia: string[] = ['Lays chips', 'Popcorn', 'Doritos',  'New snack A', 'New snack B'];

export function print_snacks(snacks: string[]): void {
	console.log(snacks);
}
export function print(snack: string){
	console.log(snack);
}

for(const snack of snacks_Tia){
	print(snack);
}

for(const snack of snacks_Jose){
	print(snack);
}
