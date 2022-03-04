
import { _decorator, Component, Node, JsonAsset, assetManager, Game, AudioClip, AudioSource, SpriteFrame, ImageAsset, Texture2D, Sprite} from 'cc';
const { ccclass, property } = _decorator;

//const fs = require('fs');
//import{  fs} from 'fs-extra';
//https://docs.cocos.com/creator/3.1/manual/en/asset/dynamic-load-resources.html

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

//var static instance: JSONloader;
 
import { GameManager } from "../GameManager";
import { GlobalManager } from '../GlobalManager';
import { Task } from '../Tasks/Task';

@ccclass('JSONloader')
export class JSONloader extends Component {
    
    gameManager? : GameManager ;

    originUrl = "https://abedov.com/json"; 

    onLoad(){

        this.gameManager = this.node.getComponent(GameManager)!;
        
    }



    fetchQuestions(folderURL: String, taskJSON: Array<JSONtask1>) {

        let remoteUrlRoot = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/" + folderURL + "/" ;


        for (let index = 1; index < 3; index++) {
            //console.log("URL: " + remoteUrlRoot + index.toString() + ".txt");
            var questionURL = remoteUrlRoot + index.toString() + ".txt";

            if(!this.returnQuestion(remoteUrlRoot, questionURL, taskJSON, index)) {
                taskJSON.pop();
                index = 13;
            }
                
        }
    }

    returnQuestionInput(questionURL: String, taskJSON: JSONtask2) {


        let remoteUrlRoot = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/" + questionURL;
        var audioURL = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/";

        try {

             assetManager.loadRemote(remoteUrlRoot.toString(), function (err, textAsset) {

                 try {
                    var parsedJSON = JSON.parse(textAsset.toString());
                    taskJSON.question = parsedJSON["question"];
                    taskJSON.tacanOdgovor = parsedJSON["tacanOdgovor"];
                    
                    if( parsedJSON["questionAudio"] != undefined && parsedJSON["tacanOdgovorAudio"] != undefined && parsedJSON["netacanOdgovor1Audio"] != undefined && parsedJSON["netacanOdgovor2Audio"] != undefined)  {

                        try {
                            assetManager.loadRemote<AudioClip>(audioURL + parsedJSON["questionAudio"], (AudioClip), (err, audioClip) =>  {
                                taskJSON.questionAudio =  audioClip ;
                            });
                            //assetManager.loadRemote<AudioClip>(remoteUrlRoot + parsedJSON["tacanOdgovorAudio"], (AudioClip), (err, audioClip) =>  {
                            //    tempTask.tacanOdgovorAudio =  audioClip ;
                            //});
       
                        } catch (error) {
                            console.log("Zvuk nije dobro ucitan");
                            taskJSON.audioIsLoaded = false;
                        } 
                    } else 
                        console.log("Ne postoje zvukovi za ovu putanju");


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

    returnQuestion(remoteUrlRoot: string, questionURL: string, taskJSON: Array<JSONtask1>, index : number) {

        
        let remoteUrl = this.originUrl + "/" + this.gameManager?.LevelName  + "/" + this.gameManager?.LanguageName + "/" + questionURL + ".txt";

        try {

             assetManager.loadRemote(questionURL, function (err, textAsset) {

                 try {
                    var tempTask = new JSONtask1;
                    var parsedJSON = JSON.parse(textAsset.toString());
                    tempTask.question = parsedJSON["question"];
                    tempTask.tacanOdgovor = parsedJSON["tacanOdgovor"];
                    tempTask.netacanOdgovor1 = parsedJSON["netacanOdgovor1"];
                    tempTask.netacanOdgovor2 = parsedJSON["netacanOdgovor2"];
                    
                    if( parsedJSON["questionAudio"] != undefined && parsedJSON["tacanOdgovorAudio"] != undefined && parsedJSON["netacanOdgovor1Audio"] != undefined && parsedJSON["netacanOdgovor2Audio"] != undefined)  {

                        try {
                            assetManager.loadRemote<AudioClip>(remoteUrlRoot + parsedJSON["questionAudio"], (AudioClip), (err, audioClip) =>  {
                                tempTask.questionAudio =  audioClip ;
                            });
                            assetManager.loadRemote<AudioClip>(remoteUrlRoot + parsedJSON["tacanOdgovorAudio"], (AudioClip), (err, audioClip) =>  {
                                tempTask.tacanOdgovorAudio =  audioClip ;
                            });
                            assetManager.loadRemote<AudioClip>(remoteUrlRoot + parsedJSON["netacanOdgovor1Audio"], (AudioClip), (err, audioClip) =>  {
                                tempTask.netacanOdgovor1Audio =  audioClip ;
                            });
                            assetManager.loadRemote<AudioClip>(remoteUrlRoot + parsedJSON["netacanOdgovor2Audio"], (AudioClip), (err, audioClip) =>  {
                                tempTask.netacanOdgovor2Audio =  audioClip ;
                            });
                        } catch (error) {
                            console.log("Zvuk nije dobro ucitan");
                            tempTask.audioIsLoaded = false;
                        } 
                    } else 
                        console.log("Ne postoje zvukovi za ovu putanju");
                        
                    //RAZMISLITI JOS
                    if(tempTask.question != undefined)
                        taskJSON.push(tempTask);

                        /*
                    console.log("Stas to pojo: " + parsedJSON["question"].toString());
                    console.log("Stas to pojo: " + parsedJSON["tacanOdgovor"].toString());
                    console.log("Stas to pojo: " + parsedJSON["netacanOdgovor1"].toString());
                    console.log("Stas to pojo: " + parsedJSON["netacanOdgovor2"].toString());

                    console.log("Stas to pojo: " + parsedJSON["questionAudio"].toString());
                    console.log("Stas to pojo: " + parsedJSON["tacanOdgovorAudio"].toString());
                    console.log("Stas to pojo: " + parsedJSON["netacanOdgovor1Audio"].toString());
                    console.log("Stas to pojo: " + parsedJSON["netacanOdgovor2Audio"].toString());
                    */
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

    fetchQuestTekst(questURL: string, tekstObject: JSONquestTekst) {

        let remoteUrlRoot = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/" + questURL ;
        var audioURL = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/";
        //let questURLfull = remoteUrlRoot 

        try {

            assetManager.loadRemote(remoteUrlRoot, function (err, textAsset) {

                try {

                   var parsedJSON = JSON.parse(textAsset.toString());

                   tekstObject.quest = parsedJSON["quest"];
                   
                   if( parsedJSON["questAudio"] != undefined)  {

                       try {
                           assetManager.loadRemote<AudioClip>(audioURL + parsedJSON["questAudio"], (AudioClip), (err, audioClip) =>  {
                            tekstObject.questAudio =  audioClip ;
                           });
                        
                       } catch (error) {
                           console.log("Zvuk nije dobro ucitan");
                           tekstObject.audioIsLoaded = false;
                       } 
                   } else 
                       console.log("Ne postoje zvukovi za ovu putanju");


               
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

        let remoteUrlRoot = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/" + questURL ;
        var rootURL = this.originUrl + "/" + this.gameManager?.LanguageName + "/" + this.gameManager?.LevelName + "/";
        //let questURLfull = remoteUrlRoot 

        try {

            assetManager.loadRemote(remoteUrlRoot, function (err, textAsset) {

                try {

                   var parsedJSON = JSON.parse(textAsset.toString());

                   imageObject.quest = parsedJSON["quest"];
                   
                   if( parsedJSON["questAudio"] != undefined)  {

                       try {
                           assetManager.loadRemote<AudioClip>(rootURL + parsedJSON["questAudio"], (AudioClip), (err, audioClip) =>  {
                            imageObject.questAudio =  audioClip ;
                           });
                        
                       } catch (error) {
                           console.log("Zvuk nije dobro ucitan");
                           imageObject.audioIsLoaded = false;
                       } 
                   } else 
                       console.log("Ne postoje zvukovi za ovu putanju");


                    if( parsedJSON["questImage"] != undefined)  {

                        try {
                            assetManager.loadRemote<ImageAsset>(rootURL + parsedJSON["questImage"], (err, fetchedImage) =>  {
                                console.log("Sta skidam " + rootURL + parsedJSON["questImage"]);
                                
                                const spriteFrame = new SpriteFrame();
                                const texture = new Texture2D();
                                texture.image = fetchedImage;
                                spriteFrame.texture = texture;
                                imageObject.questImage = spriteFrame ;
                            });
                         
                        } catch (error) {
                            console.log("Slika nije dobro ucitana");
                            imageObject.audioIsLoaded = false;
                        } 
                    } else 
                        console.log("Ne postoji slika za ovu putanju");


                   console.log("Stas to pojo: " + parsedJSON["quest"].toString());
                   console.log("Stas to pojo: " + parsedJSON["questAudio"].toString());
                   console.log("Stas to pojo: " + parsedJSON["questImage"].toString());

               
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
        this.questAudio = undefined;
        this.audioIsLoaded = true;
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
