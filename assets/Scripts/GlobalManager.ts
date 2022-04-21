export class GeneralInformations {
    //public globalProgress : number = 0;

    springFest?: string;
    playfullCity?: string;
    easterVillage?: string;
    birthdayParty?: string;
    christmasVillage?: string;
    medievalTown?: string;
    happyStreet?: string;
    backToKindergarden?: string;
    undergroundChamber?: string;
    invisablePeopleCity?: string;
    tutorialInstroction?: string;

    goButton?: string;
    exitButton?: string;

    inverseSettingsText? : string;
    choseSpeedSettingsText? : string;


     constructor( ) {

        this.springFest = "! Spring Fest";
        this.playfullCity =  "! Playful City";
        this.easterVillage =  "! Easter Village";
        this.birthdayParty =  "! Birthday Party";
        this.christmasVillage = "! Christmas Village";
        this.medievalTown =  "! Medieval Town";
        this.happyStreet =  "! Happy Street";
        this.backToKindergarden =  "! Back To Kindergarden";
        this.undergroundChamber = "! Underground Chamber";
        this.invisablePeopleCity =  "! City of the invisable people";

        this.tutorialInstroction =  "! Try to controll the player, so you can get your first task!";

        this.goButton =  "! GO";
        this.exitButton =  "! EXIT";

        this.inverseSettingsText =  "! Inverse the look controls";
        this.choseSpeedSettingsText =  "! Choose the speed of the player";
    } 
}


var downloading = false;
var settingData = false;



import { _decorator, Component, Node, assetManager, Label, EditBoxComponent, Animation, AffineTransform, sys, game, director, Scene, find } from 'cc';
import { GameStatuType } from './GameManager';
import { OpenLevelByName } from './Utilities/OpenLevelByName';
const { ccclass, property } = _decorator;

export class levelObject {
    
    sceneName?: string;
    ID?: number;
    status? : levelStatus;
    levelProgress? : number;

    constructor() {
        this.sceneName = "";
        this.ID = 0;
        this.status = 0
        this.levelProgress = 0;
    }

    setData(level: levelObject) {
        this.sceneName = level.sceneName;
        this.ID = level.ID;
        this.status = level.status;
        this.levelProgress = level.levelProgress;
    }
    

}

var globalInformations = new GeneralInformations;

//Prvi Razred
var kinderGardenData = new levelObject();
kinderGardenData.sceneName = "KinderGarden";
kinderGardenData.levelProgress = 6;

var elevator = new levelObject();
elevator.sceneName = "MainMenuLift1";

export {elevator};

var birthdayPartyData = new levelObject();
birthdayPartyData.sceneName = "BirthdayParty";

var playfulCityData = new levelObject();
playfulCityData.sceneName = "RaziganiGrad";

var springFestData = new levelObject();
springFestData.sceneName = "ProlecniKarneval";

var medivalVillageData = new levelObject();
medivalVillageData.sceneName = "MedivalVillage";

//Drugi Razred
var christmasVillage = new levelObject();
var easterVillageData = new levelObject();
var happyStreetData = new levelObject();
var undergroundChamberData = new levelObject();
var invisablePeopleCity = new levelObject();

export { kinderGardenData, birthdayPartyData, playfulCityData, springFestData, medivalVillageData, christmasVillage, easterVillageData, happyStreetData, undergroundChamberData, invisablePeopleCity, globalInformations};
 
@ccclass('GlobalManager')
export class GlobalManager extends Component {

    static getGlobal() {
        return globalInformations;
    }

    isMobileOrTablet : boolean = false;

    moveSpeed : number = 1.5;
    
    invertedRotation : boolean = false;


    gameStatus? : GameStatuType = GameStatuType.gameTutorial;

    
    @property(Number)
    projectNumber : Number = 0;

    levelsArray: Array<levelObject> = [];

    activeLevelData = elevator;


    @property(String)
    LanguageName?: String;

    @property(Label)
    springFest?: Label;
    @property(Label)
    playfullCity?: Label;
    @property(Label)
    easterVillage?: Label;
    @property(Label)
    birthdayParty?: Label;
    @property(Label)
    christmasVillage?: Label;
    @property(Label)
    medievalTown?: Label;
    @property(Label)
    happyStreet?: Label;
    @property(Label)
    backToKindergarden?: Label;
    @property(Label)
    undergroundChamber?: Label;
    @property(Label)
    invisablePeopleCity?: Label;


    @property(EditBoxComponent)
    LanguageBox?: EditBoxComponent;

    public static getInstance(): GlobalManager {
        if (!this.instance) {
            GlobalManager.instance = new GlobalManager();
            
        }
        return GlobalManager.instance;
    }

    static instance: GlobalManager;
    
    originUrl = "https://abedov.com/json"; 


    setWorldArray() {
        switch (this.projectNumber) {
            case 1:
                this.levelsArray.push(kinderGardenData);
                this.levelsArray.push(birthdayPartyData);
                this.levelsArray.push(playfulCityData);
                this.levelsArray.push(springFestData);
                this.levelsArray.push(medivalVillageData);
                break;
            case 2:
                this.levelsArray.push(christmasVillage);
                this.levelsArray.push(easterVillageData);
                this.levelsArray.push(happyStreetData);
                this.levelsArray.push(undergroundChamberData);
                this.levelsArray.push(invisablePeopleCity);
                break;
            default:
                break;
        }
    }
    


    onLoad() {
        
        

        GlobalManager.instance = this;

        this.setWorldArray();

        
        this.setPlatformType();

        game.addPersistRootNode(this.node);
    }

    start() {
       // this.schedule( this.printProgress(this.activeLevelData) , 1);
    }


    addProgressTest () {
        //globalInformations.globalProgress ++;
        this.refreshLevelButtons();
    }

    refreshLevelsStatus(){

    }

    refreshLevelButtons() {

    }

    
    setPlatformType() {
        
        if(sys.os == sys.OS.ANDROID || sys.os == sys.OS.IOS || sys.platform == sys.Platform.MOBILE_BROWSER) 
            this.isMobileOrTablet = true;
    }

    languageChanged() {

    }

    changeLanguage() {
        this.LanguageName = this.LanguageBox?.string;

        if(this.LanguageBox?.string == "SRB" || this.LanguageBox?.string == "ENG" ) {
            this.fetchGeneralDictionary()
            this.LanguageBox?.node.getComponent(Animation)!.play("Approved");
        }
        else 
            this.LanguageBox?.node.getComponent(Animation)!.play("WrongNudge");
        
    }

    fetchGeneralDictionary() {

        let remoteUrlRoot = this.originUrl + "/" + this.LanguageName + "/" + "generalinfo.txt" ;

        downloading = true;
        settingData = true;

        try {

            assetManager.loadRemote(remoteUrlRoot, function (err, textAsset) {

                try {

                   var parsedJSON = JSON.parse(textAsset.toString());
                
                globalInformations.backToKindergarden = parsedJSON["backToKindergarden"].toString()
                globalInformations.birthdayParty = parsedJSON["birthdayParty"].toString()
                globalInformations.choseSpeedSettingsText = parsedJSON["choseSpeedSettingsText"].toString()
                globalInformations.christmasVillage = parsedJSON["christmasVillage"].toString()
                globalInformations.easterVillage = parsedJSON["easterVillage"].toString()
                globalInformations.exitButton = parsedJSON["exitButton"].toString()
                globalInformations.goButton = parsedJSON["goButton"].toString()
                globalInformations.happyStreet = parsedJSON["happyStreet"].toString()
                globalInformations.inverseSettingsText = parsedJSON["inverseSettingsText"].toString()
                globalInformations.invisablePeopleCity = parsedJSON["invisablePeopleCity"].toString()
                globalInformations.medievalTown = parsedJSON["medievalTown"].toString()
                globalInformations.playfullCity = parsedJSON["playfullCity"].toString()
                globalInformations.springFest = parsedJSON["springFest"].toString()
                globalInformations.tutorialInstroction = parsedJSON["tutorialInstroction"].toString()
                globalInformations.undergroundChamber = parsedJSON["undergroundChamber"].toString()

               
               } catch (error) {
                   console.log("Nisam nasao trazeno polje za parsiranje" );
                   
                   return false;
               }
               downloading = false;
           });
           return true;
       } catch (error) {
           console.log("Nisam nasao trazenu adresu za parsiranje 2" );
           return false;
       }

       
    } 

    printProgress(levelData: levelObject) {
        console.log("Name - " + levelData.sceneName);
        console.log("Status - " + levelData.status);
        console.log("Progress - " + levelData.levelProgress);
    }
    

    update(){
        if(settingData == true)
            if(downloading == false) {
                this.setWorldsNames();
                settingData = false;
            }
        
        
            this.printProgress(this.activeLevelData);

    }

    setWorldsNames() {
        this.springFest!.string = globalInformations.springFest!;
        this.playfullCity!.string = globalInformations.playfullCity!;
        this.easterVillage!.string = globalInformations.easterVillage!;
        this.birthdayParty!.string = globalInformations.birthdayParty!;
        this.christmasVillage!.string = globalInformations.christmasVillage!;
        this.medievalTown!.string = globalInformations.medievalTown!;
        this.happyStreet!.string = globalInformations.happyStreet!;
        this.backToKindergarden!.string = globalInformations.backToKindergarden!;
        this.undergroundChamber!.string = globalInformations.undergroundChamber!;
        this.invisablePeopleCity!.string = globalInformations.invisablePeopleCity!;
    }

    findGeneralProgress(){
        var generalProgress = 0;
        for (let index = 0; index < GlobalManager.getInstance().levelsArray.length; index++) {
            //const element = array[index];
            if(GlobalManager.getInstance().levelsArray[index].status == levelStatus.unlocked) {
                generalProgress = index;
                return generalProgress;
            }

            
        }
        return generalProgress;
    }
    
}

export enum levelStatus {
    locked =    0,
    unlocked =   1,
    finished =   2,
    }

    
export class globalProgress {

    //Needs to fetch the data from the server
    KinderGardenLevel : levelObject = new levelObject; 

}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
