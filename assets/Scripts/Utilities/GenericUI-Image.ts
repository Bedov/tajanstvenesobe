
import { _decorator, Component, Node, Label, AudioSource, Sprite } from 'cc';
import { AudioManager } from '../AudioManager';
import { GameManager, GameStatuType } from '../GameManager';
import { GlobalManager } from '../GlobalManager';
import { JSONimage, JSONquestTekst, JSONtask1 } from '../RemoteScripts/JSONloader';
import { ScriptEffects } from './ScriptEffects';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GenericUI
 * DateTime = Wed Nov 17 2021 22:41:36 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = GenericUI.ts
 * FileBasenameNoExtension = GenericUI
 * URL = db://assets/Scripts/Utilities/GenericUI.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('GenericUIimage')
export class GenericUIimage extends Component {
    
    JSONtask!: JSONimage;
    
    @property(Node)
    genericImage!: Node;

    @property(Node)
    genericTekst!: Node;

    @property(Node)
    turnOffSoundButton!: Node;

    private audioSource: AudioSource = null!;

    soundParent?: Node = undefined;
    turningOff = false;

    start () {
        
        
        this.audioSource = this.node.getComponent(AudioSource)!;

        GameManager.getInstance().pushMeToAudioArray(this.audioSource);
    }

    turnOnGenericTaskJSONimage(JSONimage: JSONimage) {
        this.JSONtask = JSONimage;

        this.getComponent(ScriptEffects)?.fadeInActive();

        GameManager.getInstance().gameStatus = GameStatuType.gamePaused; 

        this.genericImage.getComponent(Sprite)!.spriteFrame = this.JSONtask.questImage!;
        
        this.solveIntroTaskButton();
        this.solveSoundActivness();
    }

    solveSoundActivness() {
        this.soundParent = this.node.getChildByName("SoundButtons")! ;

        if(this.JSONtask.questAudio == undefined || this.JSONtask.questAudio == null ) {
            this.soundParent.active = false;
            console.log("USAO");
            
        }
        else
            this.soundParent.active = true;

        this.turningOff = false;
    }

    solveIntroTaskButton() {
        this.node.getChildByName("GenericButton")!.getChildByName("Label")!.getComponent(Label)!.string = GlobalManager.getGlobal().goButton!;
    } 

    turnOnGenericTask(tekst: string) {

        this.getComponent(ScriptEffects)?.fadeInActive();

        this.genericImage.getComponent(Label)!.string = tekst;

        GameManager.getInstance().gameStatus = GameStatuType.gamePaused; 
    }

    turnOffGenericTask() {
        AudioManager.getInstance().clickSoundPlay();

        if(this.audioSource.playing)
            this.audioSource.stop();

        this.getComponent(ScriptEffects)?.fadeOutActive();
        GameManager.getInstance().gameStatus = GameStatuType.gameActive; 
    }

    soundButtonClicked(event: Event, customData: string) {
        if(!this.audioSource.playing) {
            this.audioSource.clip = this.JSONtask.questAudio!;
            if(this.JSONtask.questAudio != undefined) 
                this.audioSource.play();
        } else 
            this.audioSource.stop();

        
    }

    update() {
        if(this.audioSource.playing)
            this.turnOffSoundButton.active = true;
        else
            this.turnOffSoundButton.active = false;
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
