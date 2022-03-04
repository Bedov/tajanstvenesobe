export class GeneralInformations {
    
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

var globalInformations = new GeneralInformations;

import { _decorator, Component, Node, assetManager, Label, EditBoxComponent, Animation, AffineTransform } from 'cc';
const { ccclass, property } = _decorator;


 
@ccclass('GlobalManager')
export class GlobalManager extends Component {

    static getGlobal() {
        return globalInformations;
    }

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
    
    originUrl = "https://abedov.com/json"; 

    onLoad() {
        this.fetchGeneralDictionary();
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

    update(){
        if(settingData == true)
            if(downloading == false) {
                this.setWorldsNames();
                settingData = false;
            }

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
