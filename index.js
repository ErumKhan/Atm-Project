#! /user/bin/env node
import inquirer from "inquirer";
let myBalance = 500000; //Doller
let myPin = 1111;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!!");
    let operationAnswers = await inquirer.prompt([
        {
            name: "operations",
            message: "please Select anyone Option",
            type: "list",
            choices: [{ value: "Withdraw" }, { value: "Check Balance" }]
        }
    ]);
    if (operationAnswers.operations === "Withdraw") {
        let amountChoices = await inquirer.prompt([
            {
                name: "Choices",
                message: "Please select anyone option",
                type: "list",
                choices: [{ value: "1000" }, { value: "5000" }, { value: "10000" }, { value: "20000" }, { value: "other" }]
            },
        ]);
        if (myBalance < amountChoices.Choices) {
            console.log("Sorry!!!Insufficient Amount !!!");
        }
        else if (amountChoices.Choices === "1000") {
            myBalance -= amountChoices.Choices;
            console.log("Your remaining balance is: " + myBalance);
        }
        else if (amountChoices.Choices === "5000") {
            myBalance -= amountChoices.Choices;
            console.log("Your remaining balance is: " + myBalance);
        }
        else if (amountChoices.Choices === "10,000") {
            myBalance -= amountChoices.Choices;
            console.log("Your remaining balance is: " + myBalance);
        }
        else if (amountChoices.Choices === "20,000") {
            myBalance -= amountChoices.Choices;
            console.log("Your remaining balance is: " + myBalance);
        }
        else if (amountChoices.Choices === "other") {
            let amounts = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount",
                    type: "number"
                },
            ]);
            if (myBalance < amounts.amount) {
                console.log("Sorry!!!Insufficient Amount !!!");
            }
            else {
                myBalance -= amounts.amount;
                console.log("Your remaining balance is: " + myBalance);
            }
        }
    }
    else if (operationAnswers.operations === "Check Balance") {
        console.log(`Your balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code!!!");
}
