import json


def get_names_from_file(file_path):
	contents = open(file_path).read().strip()
	lines = contents.split("\n")
	names = [line.strip() for line in lines if line.strip()]
	return names

actions = get_names_from_file("actions.txt")
animals = get_names_from_file("animals.txt")
colors = get_names_from_file("colors.txt")

jo = {
	"actions": actions,
	"animals": animals,
	"colors": colors
}

output_json_path = "../src/names.json"
with open(output_json_path, "w") as f:
	json.dump(jo, f, indent="\t")
print(f"Saved: {output_json_path}")
