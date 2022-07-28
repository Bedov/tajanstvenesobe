
import { _decorator, Component, Node, Label, AudioSource, Sprite, Game, Animation } from 'cc';
import { AudioManager } from '../AudioManager';
import { GameManager, GameStatuType } from '../GameManager';
import { GlobalManager } from '../GlobalManager';
import { JSONquestTekst, JSONtask1, JSONimage, JSONobject } from '../RemoteScripts/JSONloader';
import { Task } from '../Tasks/Task';

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
 
@ccclass('GenericUI')
export class GenericUI extends Component {

    JSONbasicReference!: JSONobject;
    
    @property(Node)
    genericTekst!: Node;

    @property(Node)
    genericImage!: Node;

    @property(Node)
    turnOffSoundButton!: Node;

    private audioSource: AudioSource = null!;

    soundParent?: Node = undefined;
    turningOff = false;

    tempTask?: Task = undefined;

    aniationPlaying: boolean = false;

    start () {
        this.audioSource = this.node.getComponent(AudioSource)!;

        //GameManager.getInstance().pushMeToAudioArray(this.audioSource);

    }

    turnOnGenericTaskJSONwithReturn(JSONtask: JSONquestTekst, tempTask: Task) {
        this.tempTask = tempTask;

        this.turnOnGenericTaskJSON(JSONtask);
    }

    turnOnGenericTaskJSON(JSONtask: JSONquestTekst) {
        this.JSONbasicReference = JSONtask;
        
        this.getComponent(ScriptEffects)?.fadeInActive();

        this.genericTekst.getComponent(Label)!.string = JSONtask.quest!.toString();

        this.solveSoundActivness(JSONtask);
        this.solveIntroTaskButton();

        GameManager.getInstance().gameStatus = GameStatuType.gamePaused; 
    }


    turnOnGenericTaskJSONimagewithReturn(JSONtask: JSONquestTekst, tempTask: Task, lastTask: Boolean) {
        this.tempTask = tempTask;

        this.turnOnGenericTaskJSONimage(JSONtask);

        console.log("TEST TEST");
        
        if(lastTask && !this.aniationPlaying) {
            this.aniationPlaying = true;
            this.getComponent(Animation)!.play("EndPanelAnimation");
        }
            

    }


    turnOnGenericTaskJSONimage(JSONimage: JSONimage) {
        this.JSONbasicReference = JSONimage;

        this.getComponent(ScriptEffects)?.fadeInActive();

        this.genericTekst.getComponent(Label)!.string = JSONimage.quest!.toString();
        this.genericImage.getComponent(Sprite)!.spriteFrame = JSONimage.questImage!;

        this.solveSoundActivness(JSONimage);
        

        GameManager.getInstance().gameStatus = GameStatuType.gamePaused; 
    }

    solveIntroTaskButton() {
        if(this.tempTask)
            if(this.tempTask.getComponent(Task)?.uvodniTask == true)
                this.node.getChildByName("GenericButton")!.getChildByName("Label")!.getComponent(Label)!.string = ">";
            else
                this.node.getChildByName("GenericButton")!.getChildByName("Label")!.getComponent(Label)!.string = GlobalManager.getGlobal().goButton!;
    } 

    solveSoundActivness(task: JSONobject) {
        this.soundParent = this.node.getChildByName("SoundButtons")! ;

        if(task.questAudio == undefined || task.questAudio == null ) {
            this.soundParent.active = false;
        }
        else
            this.soundParent.active = true;
        
        this.turningOff = false;
    }

    turnOnGenericTaskWithReturn(tekst: string, tempTask: Task) {

        this.tempTask = tempTask;

        this.getComponent(ScriptEffects)?.fadeInActive();
        this.genericTekst.getComponent(Label)!.string = tekst;

        GameManager.getInstance().gameStatus = GameStatuType.gamePaused; 
    }

    turnOnGenericTask(tekst: string) {
        

        this.getComponent(ScriptEffects)?.fadeInActive();
        this.genericTekst.getComponent(Label)!.string = tekst;

        GameManager.getInstance().gameStatus = GameStatuType.gamePaused; 
    }

    turnOffGenericTask() {

        AudioManager.getInstance().clickSoundPlay();

        if(this.audioSource?.playing)
            this.audioSource.stop();

        this.getComponent(ScriptEffects)?.fadeOutActive();

        GameManager.getInstance().gameStatus = GameStatuType.gameActive; 

        if(this.tempTask != undefined) {

            this.tempTask.taskCompleted();
            this.tempTask = undefined;
        }
    }

    soundButtonClicked(event: Event, customData: string) {
        //if (!this.audioSource.playing) {
        //    this.audioSource.playing;
        //}
        
        if(!this.audioSource?.playing && this.JSONbasicReference.questAudio) {
            this.audioSource.clip = this.JSONbasicReference.questAudio!;
            
        console.log("Volumen: " + this.audioSource.volume);
        
            //this.audioSource.playOneShot(this.JSONbasicReference.questAudio!, 1);
            this.audioSource.play();
        } else  {
            this.audioSource.stop();

        }

        
    }

    update() {
        
           
        if(this.audioSource?.playing) 
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
