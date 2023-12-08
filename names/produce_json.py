import json
import os



def get_names_from_file(file_path, capitalize=False):
	contents = open(file_path).read().strip()
	lines = contents.split("\n")
	names = [line.strip() for line in lines if line.strip()]

	if capitalize:
		names = [name.capitalize() for name in names]

	names.sort()
	return names

files = os.listdir()
txt_files = [f for f in files if f.endswith(".txt")]
txt_files.sort()

jo = {}
print(f"Looking for names in txt files:")
for idx, txt_file in enumerate(txt_files):
	name = txt_file.split(".")[0]
	names = get_names_from_file(txt_file, capitalize=True)
	jo[name] = names
	print(f"\t[{idx+1}] Found {len(names)} entries for {name}.")

output_json_path = "../src/names.json"
with open(output_json_path, "w") as f:
	json.dump(jo, f, indent="\t")
print(f"Saved: {output_json_path}")
