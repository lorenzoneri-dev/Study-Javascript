let spesa = [];

async function aggiungiSpesa(spesa) {
    const readline = require("readline/promises");

    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const nome = await input.question("Write the name of the product: ");

    let importo;
    while(true){
        const importoInput = await input.question("Write the price of the product: ");
        importo = Number(importoInput.trim());

        if(Number.isFinite(importo) && importo > 0){
            break;
        }

        console.log("You must write a positive number.")
    };

    const categoria = await input.question("Write the category of the product:  ")
    const data = await input.question("Write the date of the day (DD/MM/AAAA): ");

    const nuovaSpesa = {
        nome,
        importo,
        categoria,
        data
    };

    spesa.push(nuovaSpesa);
    input.close();
}

aggiungiSpesa(spesa).then(() => {
    console.log(spesa);
});