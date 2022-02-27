
import { _decorator, Component, Node, Label, AudioSource, Sprite } from 'cc';
import { GameManager, GameStatuType } from '../GameManager';
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

    private audioSource: AudioSource = null!;

    soundParent?: Node = undefined;
    turningOff = false;

    start () {
        this.audioSource = this.node.getComponent(AudioSource)!;
    }

    turnOnGenericTaskJSONimage(JSONimage: JSONimage) {
        this.JSONtask = JSONimage;

        this.getComponent(ScriptEffects)?.fadeInActive();

        GameManager.getInstance().gameStatus = GameStatuType.gamePaused; 

        this.genericImage.getComponent(Sprite)!.spriteFrame = this.JSONtask.questImage!;

        this.solveSoundActivness();
    }

    solveSoundActivness() {
        this.soundParent = this.node.getChildByName("SoundButtons")! ;

        console.log("USAO   + " + this.JSONtask.questAudio?.toString());

        if(this.JSONtask.questAudio == undefined || this.JSONtask.questAudio == null ) {
            this.soundParent.active = false;
            console.log("USAO");
            
        }
        else
            this.soundParent.active = true;

        this.turningOff = false;
    }

    turnOnGenericTask(tekst: string) {

        this.getComponent(ScriptEffects)?.fadeInActive();

        this.genericImage.getComponent(Label)!.string = tekst;

        GameManager.getInstance().gameStatus = GameStatuType.gamePaused; 
    }

    turnOffGenericTask() {
        this.getComponent(ScriptEffects)?.fadeOutActive();
        GameManager.getInstance().gameStatus = GameStatuType.gameActive; 
    }

    soundButtonClicked(event: Event, customData: string) {
        this.audioSource.playOneShot(this.JSONtask.questAudio!, 1);
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
