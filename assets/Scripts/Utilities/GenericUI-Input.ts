
import { _decorator, Component, Node, Label, EventHandler, random, AudioSource, Animation, randomRangeInt, ButtonComponent, Button, Game, EditBoxComponent, Vec3} from 'cc';
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
 import { JSONloader } from "../RemoteScripts/JSONloader";
 import { JSONtask1 } from "../RemoteScripts/JSONloader";
import { GameManager, GameStatuType } from '../GameManager';
import { TaskInput } from '../Tasks/TaskInput';
import { GlobalManager } from '../GlobalManager';
 
@ccclass('GenericUI-Input')
export class GenericUIinput extends Component {
    
    JSONtask!: JSONtask1;

    @property(Node)
    genericTekst!: Node;

    @property(Node)
    turnOffSoundButton!: Node;

    editBoxPC? : EditBoxComponent;
    soundParent?: Node = undefined;

    private audioSource: AudioSource = null!;

    ScriptableFromWrong? : ScriptEffects;
    corespondingTask? : Node;
    correctAnswer? : Number;

    typeInputResult? : Label;

    turningOff = false;

    start () {
        
        
        this.turnOffSoundButton.active = true;

        this.audioSource = this.node.getComponent(AudioSource)!;

        GameManager.getInstance().pushMeToAudioArray(this.audioSource);

        if(this.node.getChildByName("Wrong") != undefined && this.node.getChildByName("Wrong") != null)
            this.ScriptableFromWrong =  this.node.getChildByName("Wrong")!.getComponent(ScriptEffects)! ;


        this.setPCorMobileKeyboard();
    }

    setPCorMobileKeyboard(){
        if(GameManager.getInstance().isMobileOrTablet) {

            this.node.getChildByName("EditBox")!.active = true;
            this.node.getChildByName("EditBoxPC")!.active = false;

            this.typeInputResult = this.node.getChildByName("EditBox")!.getChildByName("Result")!.getComponent(Label)!
            

        } else {
            this.node.getChildByName("EditBox")!.active = false;
            this.node.getChildByName("EditBoxPC")!.active = true;

            this.typeInputResult = this.node.getChildByName("EditBoxPC")!.getChildByName("Result")!.getComponent(Label)!
            this.editBoxPC = this.node.getChildByName("EditBoxPC")!.getComponent(EditBoxComponent)!;
        }
    }

    solveSoundActivness() {
        console.log("Solve Sound Activness!!! " + this.JSONtask.questionAudio);

        this.soundParent = this.node.getChildByName("SoundButtons")! ;
        
        
        
        if(this.JSONtask.questionAudio == undefined || this.JSONtask.questionAudio == null)
            this.soundParent.active = false;
        else
            this.soundParent.active = true;

        this.turningOff = false;
    }

    solveIntroTaskButton() {
        this.node.getChildByName("GenericButton")!.getChildByName("Label")!.getComponent(Label)!.string = GlobalManager.getGlobal().goButton!;
    } 

    soundButtonClicked(event: Event, customData: string) {
        if(!this.audioSource.playing) {
            this.audioSource.clip = this.JSONtask.questionAudio!;
            if(this.JSONtask.questionAudio != undefined)
                this.audioSource.play();
        } else 
            this.audioSource.stop();

                
    }

    backToPosition() {
        var positionTemp = this.node.position;
        this.node.position = new Vec3(0, positionTemp.y, positionTemp.z); 
    }

    answered(event: Event, customData: string) {
        

        if(this.typeInputResult?.string == this.JSONtask.tacanOdgovor)
            this.rightAnwer();
        else 
            this.wrongAnswer();
        
    }
    rightAnwer() {
        this.backToPosition();
        this.getComponent(Animation)?.play("CorrectAnswer");
        this.corespondingTask?.getComponent(Task)?.taskQuestionCompleted();
    }

    rightAnwerAfterTheAnimation() {
        
        //this.ScriptableFromWrong?.fadeOutActive();
        this.clearStringFromEditBox();
        this.turnOffGenericTask();
        this.turningOff = true;
        
        
    }

    clearStringFromEditBox() {
        this.typeInputResult!.string = "";

        if(this.editBoxPC) 
            this.editBoxPC.string = "";
    }

    wrongAnswer() {
        //if(!this.turningOff)
        //    this.ScriptableFromWrong?.fadeInActive();

        this.node.getComponent(Animation)!.play("WrongNudge");

        this.setRandomTask();

        this.clearStringFromEditBox();
        

    }


    turnOnGenericTask(task: Node) {
        this.getComponent(Animation)?.play("BackToNormal");
        
        this.corespondingTask = task; 
        GameManager.getInstance().gameStatus = GameStatuType.gamePaused; 

        
        
        this.getComponent(ScriptEffects)?.fadeInActive();

        this.setRandomTask();
        this.solveIntroTaskButton();
        

        if(GameManager.getInstance().isMobileOrTablet) {
            GameManager.getInstance().inputKeyboard!.active = true;
            
        }

    }

    setRandomTask() {

        this.JSONtask = this.corespondingTask!.getComponent(TaskInput)!.getRandomTask();
        this.genericTekst.getComponent(Label)!.string = this.JSONtask.question!;

        this.solveSoundActivness();
    }

    turnOffGenericTask() {
        if(this.audioSource.playing)
            this.audioSource.stop();

        GameManager.getInstance().gameStatus = GameStatuType.gameActive; 

        GameManager.getInstance().inputKeyboard!.active = false;

        this.getComponent(ScriptEffects)?.fadeOutActive();
        //this.ScriptableFromWrong?.fadeOutActive();
    }

    update() {
        if(this.audioSource.playing) {
            this.turnOffSoundButton.active = true;
        }
        else {
            this.turnOffSoundButton.active = false;
        }


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
