
let snacks_Jose: string[] = ["m&m's", "oreos", "skittles", "french bread", "New Snack 1", "New Snack 2", "Final Best Snack"]; 

const snacks_Tia: string[] = ['Lays chips', 'Popcorn', 'Doritos'];

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
