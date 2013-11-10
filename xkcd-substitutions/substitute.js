console.log("inside script");
var replacements = [
	["witnesses", "these dudes I know"],
	["allegedly", "kinda probably"],
	["new study", "Tumblr post"],
	["rebuild", "avenge"],
	["space", "spaaace"],
	["Google Glass", "Virtual Boy"],
	["smartphone", "pokedex"],
	["electric", "atomic"],
	["senator", "elf-lord"],
	["car", "cat"],
	["election", "eating contest"],
	["congressional leader", "river spirit"],
	["Homeland Security", "Homestar Runner"],
	["could not be reached for comment", "is guilty and everyone knows it"]
];

var innerHTML = document.body.innerHTML;
for (var i = 0; i < replacements.length; i++){
	var regex = new RegExp(replacements[i][0], "gi");
	innerHTML = innerHTML.replace(regex, replacements[i][1]);
}

document.body.innerHTML = innerHTML;