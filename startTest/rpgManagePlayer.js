
let player = {
    name: "Lollo",
    level: 10,
    money: 500,
    lifePoint: 100,
    inventory: ["Stick"],
}

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

function shop(sword, shild, fireMagicPower , player) {

    console.log("Menu");
    console.log("1. Sword");
    console.log("2. Shild");
    console.log("3. fireMagicPower");
    console.log("4. Exit");
    
    const readline = require("readline");
    let choose = 0;

    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askChoice() {
        input.question("Write a number: ", (answer) => {
            choose = parseInt(answer);

            while (choose < 1 || choose > 4 || isNaN(choose)) {
                console.log("The value is not correct.");
                input.question("Write a number: ", (answer) => {
                    choose = parseInt(answer);
                });
            }

            input.close();

            switch(choose) {
                case 1:
                    if(player.money >= objectShop.sword.price){
                        if(player.level >= objectShop.sword.minLevelRequired){
                            player.inventory.push(objectShop.sword.name);
                            player.money -= objectShop.sword.price;
                            console.log("You brought the sword");
                        }else{
                            console.log("You don't have the level required")
                        }
                    }else{
                        console.log("You don't have enought money")
                    };
                    break;
                case 2:
                    if(player.money >= objectShop.shild.price){
                        if(player.level >= objectShop.shild.minLevelRequired){
                            player.inventory.push(objectShop.shild.name);
                            player.money -= objectShop.shild.price;
                            console.log("You brought the shild");
                        }else{
                            console.log("You don't have the level required")
                        }
                    }else{
                        console.log("You don't have enought money")
                    };
                    break;
                case 3:
                    if(player.money >= objectShop.fireMagicPower.price){
                        if(player.level >= objectShop.fireMagicPower.minLevelRequired) {
                            player.inventory.push(objectShop.fireMagicPower.name);
                            player.money -= objectShop.fireMagicPower.price;
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
}

const objectShop = new ObjectShop();

showPlayerStats(player);
shop(objectShop, player);
