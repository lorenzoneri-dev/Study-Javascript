let player = {
    name: "Lollo",
    level: 10,
    money: 500,
    lifePoint: 100,
    inventory: ["Stick"],
}

class ObjectShop {

    sword = {
        name: "Sword",
        price: 50,
        minLevelRequired: 1,
    };
    
    shild = {
        name: "Shild",
        price: 150,
        minLevelRequired: 5,
    };
    
    fireMagicPower = {
        name: "Fire Magic Power",
        price: 300,
        minLevelRequired: 15,
    };
    
}

function showPlayerStats(player) {
    console.log(player);
}

function shop(ObjectShop , player) {

    console.log("Menu");
    console.log("1. Sword");
    console.log("2. Shild");
    console.log("3. fireMagicPower");
    console.log("4. Exit");
    
    let choose = prompt("Write a number: ");
    choose = parseInt(choose);

    while(choose <= 4 || choose >= 1) {
        console.log("The value is not correct, so write the number again:");
        choose = prompt("Write a number: "); 
    }

    console.log("The value is not correct, so write the number again:");
    choose = new int("Write a number: ");
    switch(choose) {
        case '1':
            if(player.money >= sword.price){
                if(player.level >= sword.minLevelRequired){
                    player.intentory.push(sword);
                    player.money -= sword.price;
                    console.log("You brought the sword");
                }else{
                    console.log("You don't have the level required")
                }
            }else{
                console.log("You don't have enought money")
            };
            break;
        case '2':
            if(player.money >= shild.price){
                if(player.level >= shild.minLevelRequired){
                    player.intentory.push(shild);
                    player.money -= shild.price;
                    console.log("You brought the shild");
                }else{
                    console.log("You don't have the level required")
                }
            }else{
                console.log("You don't have enought money")
            };
            break;
        case '3':
            if(player.money >= fireMagicPower.price){
                if(player.level >= fireMagicPower.minLevelRequired) {
                    player.intentory.push(fireMagicPower);
                    player.money -= fireMagicPower.price;
                    console.log("You brought the fireMagicPower");
                }else{
                    console.log("You don't have the level required");
                }
            }else{
                console.log("You don't have enought money");
            };
            break;
        case '4':
            console.log("Goodbye");
            break;
    }
}