import { print_snacks } from "./snacks";

print_snacks(["snack1", "snack2"]);
//from snacks.ts
import{print} from "./snacks.ts";
const snacks_Tia: string[] = ['Snack 1', 'Snack 2', 'Snack 3'];



//from snacks.ts
for(const snack of snacks_Tia){
	print(snack); 
}
