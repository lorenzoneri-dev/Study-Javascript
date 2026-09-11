
let player = {
    name: "Lollo",
    level: 10,
    money: 500,
    lifePoint: 100,
    inventory: ["Stick"],
};

class ObjectShop {

    static sword = {
        name: "Sword",
        price: 50,
        minLevelRequired: 1,
    };
    
    static shild = {
        name: "Shild",
        price: 150,
        minLevelRequired: 5,
    };
    
    static fireMagicPower = {
        name: "Fire Magic Power",
        price: 300,
        minLevelRequired: 15,
    };
    
}

function showPlayerStats(player) {
    console.log("Player: ", player);
}

function shop(player) {
    
    const readline = require("readline");

    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Menu");
    console.log("1. Sword");
    console.log("2. Shild");
    console.log("3. fireMagicPower");
    console.log("4. Exit");
    

    function askChoice() {
        input.question("Write a number: ", (answer) => {
            const choice = Number(answer.trim());

            if(!Number.isInteger(choice) || choice < 1 || choice > 4) {
                console.log("The value is not correct.");
                askChoice();
                return;
            }

            switch(choice) {
                case 1:
                    if(player.money >= ObjectShop.sword.price){
                        if(player.level >= ObjectShop.sword.minLevelRequired){
                            player.inventory.push(ObjectShop.sword.name);
                            player.money -= ObjectShop.sword.price;
                            console.log("You brought the sword");
                        }else{
                            console.log("You don't have the level required")
                        }
                    }else{
                        console.log("You don't have enought money")
                    };
                    break;
                case 2:
                    if(player.money >= ObjectShop.shild.price){
                        if(player.level >= ObjectShop.shild.minLevelRequired){
                            player.inventory.push(ObjectShop.shild.name);
                            player.money -= ObjectShop.shild.price;
                            console.log("You brought the shild");
                        }else{
                            console.log("You don't have the level required")
                        }
                    }else{
                        console.log("You don't have enought money")
                    };
                    break;
                case 3:
                    if(player.money >= ObjectShop.fireMagicPower.price){
                        if(player.level >= ObjectShop.fireMagicPower.minLevelRequired) {
                            player.inventory.push(ObjectShop.fireMagicPower.name);
                            player.money -= ObjectShop.fireMagicPower.price;
                            console.log("You brought the fireMagicPower");
                        }else{
                            console.log("You don't have the level required");
                        }
                    }else{
                        console.log("You don't have enought money");
                    };
                    break;
                case 4:
                    console.log("Goodbye");
                    break;
            }

            input.close();
            showPlayerStats(player);
        });
    }

    askChoice();
};

showPlayerStats(player);
shop(player);
