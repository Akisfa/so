var podaci = [
    "Razredna: Mladenka Sokolov",
    "Ucenici: 20",
    "Ucionica: 22",
    "Trajanje Casova: 30 min"
];










console.log(podaci);
var snapshot = {
    "Snapshot":"Nodes",
    "Nodes":"Files",
    "Screenshot":"DLL",
    "Github":"https://github.com/",
    "Copyright":"2021",
    "Done":"19.06.2021",
    "Programming":"Dimirosky",
    "Language":"HTML, CSS, JS",
    "Copy":"Github DLL© 2021",
    "Got by":"Johnny the great",
    "Credits to":"akisfa",
    "Started":"31.08.2021",
    "Engineers":"akisfa(Dimirosky)",
    "Site support main develop":"Github&Snapshot",
    "Organised site support":"akisfa(Dimirosky)"

}
document.getElementById("snapshot").innerHTML = JSON.stringify(snapshot);