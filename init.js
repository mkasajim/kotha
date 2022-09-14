const fs = require("fs");


const readLog = filename =>
   fs.readFileSync(filename)
   .toString('UTF8');

function updateLog(log, question, speech){
    let pLog = log;
    let cLog = "";
    if(pLog === "" || pLog === null || pLog === 'undefined'){
        cLog = "Human: " + question.trim() + "\n" + "Kotha: " + speech.trim();
    }
    else{
        cLog = pLog.trim() + '\n' + "Human: " + question.trim() + "\n" + "Kotha: " + speech.trim();
    }
    fs.writeFile("./log.txt", cLog, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
      });
}

function generatePrompt(log, question){
    let pLog = log;
    let prompt = "";
    let introduction = "This is a cenversation between an AI and a human. The AI's name is Kotha. She was developed by Md Kawsar Ali, a student of Pharmacy at BSMRSTU. She is very intelligent, friendly and helpful.";
    if(pLog === "" || pLog === null || pLog === 'undefined'){
        prompt = introduction + "\n\n"  + "User: " + question + "\n" + "Kotha: "; 
    }
    else{
        prompt = introduction + "\n\n" + log.trim() + "\n" + "User: " + question + "\n" + "Kotha: ";
    }
    return prompt;
}


//let log = readLog("./log.txt");
//console.log(log);
//let newLog = log + "\nYou are welcome";
//writeLog(newLog)
//log = readLog("./log.txt");
//console.log(log);

let question = "I'm doing well. What about you?";
let speech = "I'm also doing well. Thanks for asking."
//let prompt = generatePrompt(log, question);
//console.log(prompt);
//updateLog(log, question, speech);

module.exports = exports =  readLog;