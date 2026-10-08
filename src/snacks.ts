
let snacks_Jose: string[] = ["m&m's", "oreos", "skittles", "french bread"]; 

const snacks_Tia: string[] = ['Lays chips', 'Popcorn', 'Doritos'];

export function print_snacks(snacks: string[]): void {
	console.log(snacks);
}

for(const snack of snacks_Tia){
	print(snack);
}

for(const snack of snacks_Jose){
	print(snack);
}
