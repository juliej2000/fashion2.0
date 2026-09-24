const Dvder = [
    {
        pris: 200,
        titel: "Biler",
        type: "Dvd",
        stand: "God - men brugt",
        information: ["Dansk tale", "Danske undertekster", "1 time og 56 minutter"],
        billede: "img/biler.jpg",
        tekst: "Biler er en amerikansk computeranimeret film fra 2006, produceret af Pixar Animation Studios og udgivet af Walt Disney Pictures. Filmen følger racerbilen Lightning McQueen, der ved et uheld ender i den lille by Radiator Springs, hvor han lærer vigtige livslektioner om venskab og ydmyghed."
    },
    {
        pris: 300,
        titel: "The Batman",
        type: "4k ultra HD + blu-ray",
        stand: "Perfekt - som ny",
        information: ["Engelsk tale", "Engelske undertekster", "2 time og 56 minutter"],
        billede: "img/thebatman2.jpg",
        tekst: "The Batman er en amerikansk superheltefilm fra 2022, instrueret af Matt Reeves. Filmen følger Bruce Wayne, også kendt som Batman, mens han kæmper mod kriminalitet i Gotham City. Med en mørkere og mere realistisk tilgang til karakteren, udforsker filmen Batmans detektivfærdigheder og hans kamp mod skurke som Riddler og Penguin."
        
    },
     {
        pris: 400,
        titel: "De grønne slagtere",
        type: "Dvd",
        stand: "Stadig i original emballage",
        information: ["Dansk tale", "Danske undertekster", "1 time og 40 minutter"],
        billede: "img/degrønneslagtere.png",
        tekst: "De grønne slagtere er en dansk sort komediefilm fra 2003, instrueret af Anders Thomas Jensen. Filmen følger to slagtere, Bjarne og Svend, der åbner deres egen slagterbutik i København. De bliver hurtigt populære, men deres succes fører til uventede og mørke konsekvenser, da de begynder at eksperimentere med deres kødprodukter på en uetisk måde."
    }
];

console.log(Dvder);

const container = document.querySelector(".container");
container.innerHTML = "";

Dvder.forEach(visDvder);

function visDvder(dvd) {
    container.innerHTML += `
        <article class="card">
            <h2>${dvd.titel}</h2>
            <h3>${dvd.type}</h3>
            <p>kr. ${dvd.pris},-</p>
            <p>Stand: ${dvd.stand}</p>
            <p>Information: ${dvd.information.join(", ")}</p>
            <img src="${dvd.billede}" alt="${dvd.titel}">
            <p>${dvd.tekst || ""}</p>
            <button type="button" onclick="window.location.href='productdetails.html'">Læs mere</button>
        </article>
    `;
}