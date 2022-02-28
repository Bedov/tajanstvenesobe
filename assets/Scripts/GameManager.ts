
import { _decorator, Component, Node, director, Label, sys } from 'cc';
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

    @property(Number)
    Progress: Number = 0;

    moveSpeed : number = 1.5;
    invertedRotation : boolean = false;

    isMobileOrTablet : boolean = false;

    public static getInstance(): GameManager {
        if (!this.instance) {
            GameManager.instance = new GameManager();
            
        }
        return GameManager.instance;
    }

    static instance: GameManager;

    onLoad() {
        GameManager.instance = this;
        this.jsonLoader = this.node.getComponent(JSONloader)!;
        this.typeInputResult = this.Canvas?.getChildByName("GenericUI-Input")?.getChildByName("EditBoxPC")?.getChildByName("Result")!.getComponent(Label)!;
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

    start () {
        this.inputKeyboard = this.Canvas!.getChildByName("BottomUI")!.getChildByName("Keyboard")!;
        this.settingsUI = this.Canvas!.getChildByName("Settings")!;
 
        if(sys.os == sys.OS.ANDROID || sys.os == sys.OS.IOS || sys.platform == sys.Platform.MOBILE_BROWSER) 
            this.isMobileOrTablet = true;

        this.setTheKeyboard();

        console.log("Sys platform " + sys.platform);
        console.log("isMobileOrTablet " + this.isMobileOrTablet);
        
    }

    backToMenu() {
        director.loadScene("MainMenu");
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}


