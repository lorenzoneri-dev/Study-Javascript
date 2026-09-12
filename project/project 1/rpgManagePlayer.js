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
    
    static shield = {
        name: "shield",
        price: 150,
        minLevelRequired: 5,
    };
    
    static fireMagicPower = {
        name: "Fire Magic Power",
        price: 300,
        minLevelRequired: 15,
    };
    
}

function getPlayerStatus(player) {
    return {
        name: player.name,
        level: player.level,
        money: player.money,
        lifePoint: player.lifePoint,
        inventory: player.inventory
    };
}

async function shop(player) {
    
    const readline = require("readline/promises");

    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Menu");
    console.log("1. Sword");
    console.log("2. Shield");
    console.log("3. Fire Magic Power");
    console.log("4. Exit");
    

    while(true) {
        const answer = await input.question("Write a number: ");
        const choice = Number(answer.trim());

        if(!Number.isInteger(choice) || choice < 1 || choice > 4) {
            console.log("The value is not correct.");
            continue;
        }

        switch(choice) {
            case 1:
                if(player.money >= ObjectShop.sword.price){
                    if(player.level >= ObjectShop.sword.minLevelRequired){
                        player.inventory.push(ObjectShop.sword.name);
                        player.money -= ObjectShop.sword.price;
                        console.log("You bought the sword");
                    }else{
                        console.log("You don't have the level required")
                    }
                }else{
                    console.log("You don't have enough money")
                };
                break;
            case 2:
                if(player.money >= ObjectShop.shield.price){
                    if(player.level >= ObjectShop.shield.minLevelRequired){
                        player.inventory.push(ObjectShop.shield.name);
                        player.money -= ObjectShop.shield.price;
                        console.log("You bought the shield");
                    }else{
                        console.log("You don't have the level required")
                    }
                }else{
                    console.log("You don't have enough money")
                };
                break;
            case 3:
                if(player.money >= ObjectShop.fireMagicPower.price){
                    if(player.level >= ObjectShop.fireMagicPower.minLevelRequired) {
                        player.inventory.push(ObjectShop.fireMagicPower.name);
                        player.money -= ObjectShop.fireMagicPower.price;
                        console.log("You bought the Fire Magic Power");
                    }else{
                        console.log("You don't have the level required");
                    }
                }else{
                    console.log("You don't have enough money");
                };
                break;
            case 4:
                console.log("Goodbye");
                input.close();
                console.log(getPlayerStatus(player));
                return;
        }
        console.log(getPlayerStatus(player));
    }
}

console.log(getPlayerStatus(player));
shop(player);
