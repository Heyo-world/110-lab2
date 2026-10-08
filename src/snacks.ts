
let snacks_Jose: string[] = ["m&m's", "oreos", "skittles", "french bread"]; 

const snacks_Tia: string[] = ['Lays chips', 'Popcorn', 'Doritos'];

function print(snack: string){
	console.log(snack);
}

for(const snack of snacks_Tia){
	print(snack);
}

for(const snack of snacks_Jose){
	print(snack);
}
