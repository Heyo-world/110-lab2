
import { animation } from "./animation.ts";

animation("Snacks");
import { print_snacks, print } from "./snacks.ts";
print_snacks(["snack1", "snack2"]);
//from snacks.ts

const snacks_Tia: string[] = ['Snack 1', 'Snack 2', 'Snack 3'];



//from snacks.ts
for(const snack of snacks_Tia){
	print(snack); 
}
