#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//                   GAME VARIABLE
let enemies = ["Aliens", "Zombie", "Warrior", "Assassin"]
let maxEnemyHealth = 75
let enemyAttackDamageToHero = 25

//                   HERO VARIABLE

let heroHealth = 100
let heroAttackDamageToEnemy = 50
let numHealthpotion = 3
let healthpotionHealAmount = 30
let healthpotionDropChance = 50

//                   WHILE LOOP CONDITION
let gameRunning = true
console.log(chalk.bold.bgBlueBright("\n\t***Welcome to the DEADZONE!***\n"));
Game:
while(gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth +1)
    let enemyIndex = Math.floor(Math.random() * enemies.length)
    let enemy = enemies[enemyIndex]
    console.log(chalk.bold.bgMagentaBright(`# You encountered a ${enemy} has appeared with ${enemyHealth} health!\n`));

    while(enemyHealth > 0) {
        console.log(chalk.bold.bgGreenBright(`# ${enemy} has appeared with health : ${enemyHealth} !\n`));
    
    let options = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "What would you like to do?",
        choices: ["1.Attack", "2.Take Health Potion", "3.Run Away"]
    })
   if (options.ans === "1.Attack") {
    let heroAttackDamageToEnemy = 50
    let damageToEnemy = Math.floor(Math.random() * heroAttackDamageToEnemy + 1)
    let damageToHero  = Math.floor(Math.random() * enemyAttackDamageToHero + 1)
    
    enemyHealth -= damageToEnemy
    heroHealth -=  damageToHero

    console.log(chalk.bold.bgGreenBright(`# You attacked ${enemy} for ${damageToEnemy} !`));
    console.log(chalk.bold.bgCyan(`# Damage and ${enemy} attacked you for ${damageToHero} damage !`));

   if (heroHealth < 1) {
    console.log(chalk.bold.bgGray("# You have died ! OR you have  taken too much damage and you are too weak to continue!"));
    break;
   }
    
   } 
    else if (options.ans === "2.Take Health Potion") {
        if (numHealthpotion > 0) {
            heroHealth += healthpotionHealAmount
            numHealthpotion--
            console.log(chalk.bold.bgMagenta(`You took a health potion and recovered ${healthpotionHealAmount}!`));
            console.log(chalk.bold.bgBlueBright(` health ! You now have ${heroHealth} health.!`));
            console.log(chalk.bold.bgRedBright(`you have ${numHealthpotion}health potion left!`));
        } else {
            console.log(chalk.bold.bgBlueBright("You don't have any health potions left.Defeat enemy for a chance get health potion"));
        }
    }
    else if (options.ans === "3. Run Away") {
        console.log(chalk.bold.bgRedBright(`# you run away from ${enemy}!`));
        continue Game;
    }
}
if (heroHealth <1) {
    console.log(chalk.bold.bgYellowBright("# You have died! OR you have  taken too much damage and you are too weak to continue!"));
    break;
}
console.log(chalk.bold.bgYellowBright(`# ${enemy} was defeated!`));
console.log(chalk.bold.bgMagentaBright(`# you have ${heroHealth} health!`));

let randomNumber = Math.floor(Math.random() * 100 + 1);
if (randomNumber < healthpotionDropChance) {
    numHealthpotion++
    console.log(chalk.bold.bgBlueBright(`# Your health is  ${heroHealth} health potion left!`));
    console.log(chalk.bold.bgGray(`# Your health portion is ${numHealthpotion}!`));
    console.log(chalk.bold.bgGreenBright("# You found a health potion! You have gained (1) health potion!"));
}
let userOption =  await inquirer.prompt({
    type: "list",
    name: "ans",
    message: "Do you want to continue?",
    choices: ["1. Yes", "2. No"]
})
if(userOption.ans === "1. continue"){
    console.log(chalk.bold.bgMagentaBright("# you are continuing on your adventure !"))
}else {
    console.log(chalk.bold.bgRedBright("you successfully Exit from DEADZONE!"));
    break;
}
    console.log(chalk.bold.bgYellowBright("Thank you for playing! Goodbye!\n"));

}

