
import { _decorator, Component, Node, director, Label, sys, AudioSource, Scene, LightComponent, find, loader, assetManager } from 'cc';
import { DetectTypeOfDevice } from './DetectTypeOfDevice';
import { DetectTypeOfDeviceElevator } from './DetectTypeOfDeviceElevator';
import { elevator, GlobalManager, levelObject } from './GlobalManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameManager
 * DateTime = Tue Nov 30 2021 13:26:28 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = GameManager.ts
 * FileBasenameNoExtension = GameManager
 * URL = db://assets/Scripts/GameManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *

 */
import { JSONloader } from "./RemoteScripts/JSONloader";
import { LoadingHandler } from './RemoteScripts/LoadingHandler';


/*
var localSceneData = new  levelObject();
export { localSceneData };
*/

 export enum GameStatuType {
    gamePaused =    0,
    gameActive =   1,
    gameTutorial =   2,
    }

@ccclass('GameManager')
export class GameManager extends Component {

    gameStatus? : GameStatuType = GameStatuType.gameTutorial;
    typeInputResult? : Label ;
    jsonLoader? : JSONloader ;
    loadingHandler? : LoadingHandler;

    @property(Boolean)
    elevatorScript = false;

    inputKeyboard? : Node ;

    settingsUI? : Node;

    @property(Node)
    Canvas?: Node;

    @property(Node)
    WorldRoot?: Node;

    @property(Node)
    TaskManager?: Node;

    @property(Node)
    Player?: Node;

    @property(String)
    LevelName?: String;

    @property(String)
    LanguageName?: String;

    moveSpeed : number = 1.5;
    invertedRotation : boolean = false;

    isMobileOrTablet : boolean = false;

    taskInProgressManager : number = 1;

    downloadedCheckpoint : number = 0;

    audioArray?: Array<AudioSource> = [];

    trophies? : Node ;

    startProgress: number = 0;


    detectType: DetectTypeOfDevice | DetectTypeOfDeviceElevator | undefined ;

    debugMode = false;

    public static getInstance(): GameManager {
        if (!this.instance) {
            GameManager.instance = new GameManager();
            
        }
        return GameManager.instance;
    }

    static instance: GameManager;


    setProgress(tempProgress: number){
        GlobalManager.getInstance().activeLevelData!.levelProgress = tempProgress;
    }

    getProgress() {
        return  GlobalManager.getInstance().activeLevelData!.levelProgress;
    }

    onLoad() {
        GameManager.instance = this;

        if(this.elevatorScript) {

            this.startProgress = Number(GlobalManager.getInstance().activeLevelData!.levelProgress);

            this.detectType = find("Canvas")!.getComponent(DetectTypeOfDeviceElevator)!;
        
            //assetManager.cacheManager!.autoClear = true;
            //assetManager.cacheManager!.clearCache();
            //assetManager.releaseUnusedAssets();

            //sys.garbageCollect();
        } // this.Player!.getComponent(FirstPersonCameraMovementElevator)!;
        else {
            this.detectType = find("Canvas")!.getComponent(DetectTypeOfDevice)!; 
        }
        
        this.jsonLoader = this.node.getComponent(JSONloader)!;
        this.loadingHandler = this.node.getComponent(LoadingHandler)!;

        this.typeInputResult = this.Canvas?.getChildByName("GenericUI-Input")?.getChildByName("EditBoxPC")?.getChildByName("Result")!.getComponent(Label)!;
    
        this.trophies = this.Canvas!.getChildByName("BottomUI")!.getChildByName("TrofejiLayout")!;

        console.log("GameManager onLoad aktivan level: " + GlobalManager.getInstance().activeLevelData.sceneName);

        this.setPlatformType();
    }

    setTheKeyboard() {
        if(this.isMobileOrTablet) {

            this.Canvas!.getChildByName("GenericUI-Input")!.getChildByName("EditBox")!.active = true;
            this.Canvas!.getChildByName("GenericUI-Input")!.getChildByName("EditBoxPC")!.active = false;

            this.typeInputResult = this.Canvas!.getChildByName("GenericUI-Input")!.getChildByName("EditBox")!.getChildByName("Result")!.getComponent(Label)!

        } else {
            this.Canvas!.getChildByName("GenericUI-Input")!.getChildByName("EditBox")!.active = false;
            this.Canvas!.getChildByName("GenericUI-Input")!.getChildByName("EditBoxPC")!.active = true;

            this.typeInputResult = this.Canvas!.getChildByName("GenericUI-Input")!.getChildByName("EditBoxPC")!.getChildByName("Result")!.getComponent(Label)!
        }
    }

    getTaskManager(){
        return this.TaskManager;
    }


    pushMeToAudioArray(audioComponent: AudioSource) {
        this.audioArray?.push(audioComponent);
    }

    setVolume(volume: number){
        console.log("Lenght " +  this.audioArray?.length );
        
        this.audioArray?.forEach(element => {
            console.log("element " + element.name + "  VOLUME: " + element.volume);
            
        });
        
        this.audioArray?.forEach(element => {
            element.volume = volume;
            console.log("Volumen " +  element.volume);
        });
    }

    setPlatformType() {
        this.inputKeyboard = this.Canvas!.getChildByName("BottomUI")!.getChildByName("Keyboard")!;
        this.settingsUI = this.Canvas!.getChildByName("Settings")!;
 
        if(sys.os == sys.OS.ANDROID || sys.os == sys.OS.IOS || sys.platform == sys.Platform.MOBILE_BROWSER) 
            this.isMobileOrTablet = true;

        this.setTheKeyboard();
    }



    backToMenu() {
        GlobalManager.getInstance().activeLevelData =  elevator; //  this.findSceneDataByName("MainMenuLift1");
        GlobalManager.getInstance().activeLevelData.levelProgress = 2;

        if(this.debugMode == true)
            director.loadScene("MainMenu");
        else {
            GlobalManager.getInstance().activeLevelData = elevator;
            director.loadScene("MainMenuLift1");
        }
            
    }

}



