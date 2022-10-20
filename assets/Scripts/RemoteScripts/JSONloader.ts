
import { _decorator, Component, Node, JsonAsset, assetManager, Game, AudioClip, AudioSource, SpriteFrame, ImageAsset, Texture2D, Sprite, game} from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = JSONloader
 * DateTime = Fri Nov 26 2021 15:46:48 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = JSONloader.ts
 * FileBasenameNoExtension = JSONloader
 * URL = db://assets/Scripts/RemoteScripts/JSONloader.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

var tasksInProgress = 0;

 
import { GameManager } from "../GameManager";
import { GlobalManager } from '../GlobalManager';
import { Task } from '../Tasks/Task';

@ccclass('JSONloader')
export class JSONloader extends Component {
    
    gameManager? : GameManager ;
    downloadTask: number = 0;

    downloadInProgress = false;

    public downloadedCheckpoint = -1;

    originUrl = "https://stickandrope.com/klett/json"; 

    onLoad(){
        console.log("Tasks in prigress : ", tasksInProgress);
        

        this.gameManager = this.node.getComponent(GameManager)!;

        this.schedule(this.printTasks, 1);
        
    }

    printTasks() {
        console.log("Tasks in Progress: " + tasksInProgress);
        
    }


    fetchQuestions(folderURL: String, taskJSON: Array<JSONtask1>, expectedQuestions: Number) {
        let remoteUrlRoot = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/" + folderURL + "/" ;


        for (let index = 1; index < Number(expectedQuestions) + 1; index++) {
            //console.log("URL: " + remoteUrlRoot + index.toString() + ".txt");
            var questionURL = remoteUrlRoot + index.toString() + ".txt";

            if(!this.returnQuestion(remoteUrlRoot, questionURL, taskJSON, index)) {
                taskJSON.pop();
                
                index = 13;
            }
                
        }
    }

    returnQuestionInput(questionURL: String, taskJSON: JSONtask2) {
        this.downloadInProgress = true;

        let remoteUrlRoot = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/" + questionURL;
        var audioURL = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/";

        try {
            tasksInProgress++;
            console.log("Task Added input question 1 : " + questionURL);
             assetManager.loadRemote(remoteUrlRoot.toString(), function (err, textAsset) {

                 try {
                    var parsedJSON = JSON.parse(textAsset.toString());
                    taskJSON.question = parsedJSON["question"];
                    taskJSON.tacanOdgovor = parsedJSON["tacanOdgovor"];
                    
                    
                    
                    if( parsedJSON["questionAudio"] != undefined)  {

                        /*
                        try {
                            assetManager.loadRemote<AudioClip>(audioURL + parsedJSON["questionAudio"], (AudioClip), (err, audioClip) =>  {
                                taskJSON.questionAudio = audioClip ;
                            });
                            
                        } catch (error) { */
                            console.log("Zvuk nije dobro ucitan");
                            taskJSON.audioIsLoaded = false;
                        //} 
                    } else 
                        console.log("Ne postoje zvukovi za ovu putanju");

                    tasksInProgress--;
                    console.log("Task input reduced 1"  + questionURL);
                } catch (error) {
                    console.log("Nisam nasao trazeno polje za parsiranje" + error );
                    return false;
                }console.log(" BITNOOO  " + taskJSON.questionAudio);
            });
            return true;
        } catch (error) {
            console.log("Nisam nasao trazenu adresu za parsiranje 2" + error );
            return false;
        }
        

    }

    returnQuestion(remoteUrlRoot: string, questionURL: string, taskJSON: Array<JSONtask1>, index : number) {
        this.downloadInProgress = true;
        
        let remoteUrl = this.originUrl + "/" + this.gameManager?.LevelName  + "/" + this.gameManager?.LanguageName + "/" + questionURL + ".txt";

        try {

             assetManager.loadRemote(questionURL, function (err, textAsset) {

                 try {              
                    tasksInProgress++;
                    console.log("Task Added return question 3 : " + questionURL);
                    var tempTask = new JSONtask1;
                    var parsedJSON = JSON.parse(textAsset.toString());
                    tempTask.question = parsedJSON["question"];
                    tempTask.tacanOdgovor = parsedJSON["tacanOdgovor"];
                    
                    if(parsedJSON["netacanOdgovor1"] != undefined) {
                        tempTask.netacanOdgovor1 = parsedJSON["netacanOdgovor1"];
                        tempTask.netacanOdgovor2 = parsedJSON["netacanOdgovor2"];
                    }                    
                    
                    if( parsedJSON["questionAudio"] != undefined)  {

                        console.log("Sta je : parsedJSON[questionAudio] " + parsedJSON["questionAudio"]);

                        /*
                        try {
                            //tasksInProgress++;
                            //console.log("Task Added 4");
                            assetManager.loadRemote<AudioClip>(remoteUrlRoot + parsedJSON["questionAudio"], (AudioClip), (err, audioClip) =>  {
                                tempTask.questionAudio =  audioClip ;
                                //tasksInProgress--;
                                //console.log("Task reduced 4");
                            });

                        } catch (error) { */
                            console.log("Zvuk nije dobro ucitan");
                            tempTask.audioIsLoaded = false;
                        //} 
                    } else 
                        console.log("Ne postoje zvukovi za ovu putanju");
                        
                    
                    if(tempTask.question != undefined)
                        taskJSON.push(tempTask);

                    tasksInProgress--;
                    console.log("Task reduced return question 3" + questionURL);
                } catch (error) {
                    console.log("Nisam nasao trazeno polje za parsiranje" + error );
                    return false;
                }
            });
            return true;
        } catch (error) {
            console.log("Nisam nasao trazenu adresu za parsiranje 2" + error );
            return false;
        }
        

    }
    update() {
        if( this.downloadInProgress == true && tasksInProgress == 0) {
            this.downloadInProgress = false;
            GameManager.getInstance().downloadedCheckpoint++;
        }

        GameManager.instance.taskInProgressManager = Number( tasksInProgress);
        
    }

    fetchQuestTekst(questURL: string, tekstObject: JSONquestTekst) {
        this.downloadInProgress = true;

        let remoteUrlRoot = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/" + questURL ;
        var audioURL = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/";
        //let questURLfull = remoteUrlRoot 

        try {

            tasksInProgress++;
            console.log("Task Added quest 5"  + questURL);
            assetManager.loadRemote(remoteUrlRoot, function (err, textAsset) {

                try {

                   var parsedJSON = JSON.parse(textAsset.toString());

                   tekstObject.quest = parsedJSON["quest"];
                   
                   if( parsedJSON["questAudio"] != undefined)  {
                        
                       try {
                            //tasksInProgress++;
                                //console.log("Task Added 6");
                           assetManager.loadRemote<AudioClip>(audioURL + parsedJSON["questAudio"], (AudioClip), (err, audioClip) =>  {
                            tekstObject.questAudio =  audioClip ;
                            //tasksInProgress--;
                            //console.log("Task reduced 6");
                           });
                        
                       } catch (error) {
                           console.log("Zvuk nije dobro ucitan");
                           tekstObject.audioIsLoaded = false;
                       } 
                   } else 
                       console.log("Ne postoje zvukovi za ovu putanju");

                    console.log("Task reduced quest 5"  + questURL);
                    tasksInProgress--;

               } catch (error) {
                   console.log("Nisam nasao trazeno polje za parsiranje" + error );
                   return false;
               }
           });
           return true;
       } catch (error) {
           console.log("Nisam nasao trazenu adresu za parsiranje 2" + error );
           return false;
       }
    }

    
    fetchImageQuestTekst(questURL: string, imageObject: JSONimage) {
        this.downloadInProgress = true;

        let remoteUrlRoot = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/" + questURL ;
        var rootURL = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/";
        //let questURLfull = remoteUrlRoot 

        try {
            tasksInProgress++;
            console.log("Task Image-Text Quest Added 7"  + questURL);
            assetManager.loadRemote(remoteUrlRoot, function (err, textAsset) {

                try {

                   var parsedJSON = JSON.parse(textAsset.toString());

                   imageObject.quest = parsedJSON["quest"];
                   
                   if( parsedJSON["questImage"] != undefined)  {

                    tasksInProgress++;
                    console.log("Task Image-Image Quest Added 9" + questURL);

                    try {
                        assetManager.loadRemote<ImageAsset>(rootURL + parsedJSON["questImage"], (err, fetchedImage) =>  {
                            console.log("Sta skidam " + rootURL + parsedJSON["questImage"]);
                            
                            const spriteFrame = new SpriteFrame();
                            const texture = new Texture2D();
                            texture.image = fetchedImage;
                            spriteFrame.texture = texture;
                            imageObject.questImage = spriteFrame ;

                            tasksInProgress--;
                            console.log("Task Image-Image Quest reduced 9"  + questURL);

                        });
                     
                    } catch (error) {
                        console.log("Slika nije dobro ucitana");
                        imageObject.audioIsLoaded = false;
                    } 
                } else 
                    console.log("Ne postoji slika za ovu putanju");

                    
                   if( parsedJSON["questAudio"] != undefined)  {

                       try {
                            //tasksInProgress++;
                            //console.log("Task Added 8");
                           assetManager.loadRemote<AudioClip>(rootURL + parsedJSON["questAudio"], (AudioClip), (err, audioClip) =>  {
                            imageObject.questAudio =  audioClip ;
                            //tasksInProgress--;
                            //console.log("Task reduced 8");
                           });
                        
                       } catch (error) {
                           console.log("Zvuk nije dobro ucitan");
                           imageObject.audioIsLoaded = false;
                       } 
                   } else 
                       console.log("Ne postoje zvukovi za ovu putanju");


                    
                    console.log("Task Image-Text Quest Reduced 7"  + questURL);
                    tasksInProgress--;

               } catch (error) {
                   console.log("Nisam nasao trazeno polje za parsiranje" + error );
                   return false;
               }
           });
           return true;
       } catch (error) {
           console.log("Nisam nasao trazenu adresu za parsiranje 2" + error );
           return false;
       }

       
    }

    
    
}

export class JSONtask2 {
    
    type?: string;
    question?: string;
    questionAudio? : AudioClip;
    tacanOdgovor?: string;
    tacanOdgovorAudio? : AudioClip;

    audioIsLoaded? : boolean;

    constructor( ) {
        this.type = "";
        this.question = "";
        this.questionAudio = undefined;
        this.tacanOdgovor = "";
        this.tacanOdgovorAudio = undefined;

        this.audioIsLoaded = true;
    }

}

export class JSONtask1 {
    
    type?: string;
    question?: string;
    questionAudio? : AudioClip;
    tacanOdgovor?: string;
    tacanOdgovorAudio? : AudioClip;
    netacanOdgovor1?: string;
    netacanOdgovor1Audio? : AudioClip;
    netacanOdgovor2?: string;
    netacanOdgovor2Audio? : AudioClip;
    audioIsLoaded? : boolean;

    constructor( ) {
        this.type = "";
        this.question = "";
        this.questionAudio = undefined;
        this.tacanOdgovor = "";
        this.tacanOdgovorAudio = undefined;
        this.netacanOdgovor1 = "";
        this.netacanOdgovor1 = undefined;
        this.netacanOdgovor2 = "";
        this.netacanOdgovor2 = undefined;
        this.audioIsLoaded = true;
    }

}
export class JSONobject {
    quest?: string;
    questImage?: SpriteFrame;
    questAudio? : AudioClip;
    audioIsLoaded? : boolean;

    constructor( ) {
        this.quest = undefined;
        this.questImage = undefined;
        this.questAudio = undefined;
        this.audioIsLoaded = true;
    }
}

export class JSONquestTekst extends JSONobject{
    
    quest?: string;

    constructor( ) {
        super();
        this.quest = "";
    }
}

export class JSONimage extends JSONobject {
    
    quest?: string;
    questImage?: SpriteFrame;


    constructor( ) {
        super();
        this.quest = "";
        this.questImage = undefined;
    }
}




/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
