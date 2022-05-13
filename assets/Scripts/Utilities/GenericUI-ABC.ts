
import { _decorator, Component, Node, Label, EventHandler, random, AudioSource, randomRangeInt, ButtonComponent, Button, Animation, Vec2, Vec3} from 'cc';
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
import { TaskABCquestion } from '../Tasks/TaskABCquestion';
import { GameManager, GameStatuType } from '../GameManager';
import { GlobalManager } from '../GlobalManager';
import { AudioManager } from '../AudioManager';
 
@ccclass('GenericUI-ABC')
export class GenericUIABC extends Component {
    
    JSONtask!: JSONtask1;

    @property(Node)
    genericTekst!: Node;

    @property(Node)
    A!: Node;

    @property(Node)
    B!: Node;

    @property(Node)
    C!: Node;

    soundParent?: Node[] = [];

    @property(Node)
    turnOffSoundButton!: Node;


    private audioSource: AudioSource = null!;

    ScriptableFromWrong? : ScriptEffects;
    corespondingTask? : Node;
    correctAnswer? : Number;

    audioPlaying : boolean = false;

    turningOff = false;

    fillAudioWithAnswers() {
        this.node.children.forEach(element => {
            if(element.name == "Aaudio" || element.name == "Baudio" || element.name == "Caudio" || element.name == "QuestionAudio") 
                this.soundParent?.push(element);
            
                element.children.forEach(element2 => {
                    if(element2.name == "Aaudio" || element2.name == "Baudio" || element2.name == "Caudio" || element2.name == "QuestionAudio") 
                        this.soundParent?.push(element2);
            });
        });
    }

    fillAudioJustQuestion() {
        this.soundParent?.push(this.node.getChildByName("QuestionAudio")!);
    }

    start () {
        
        
        this.fillAudioJustQuestion();


        this.audioSource = this.node.getComponent(AudioSource)!;
        GameManager.getInstance().pushMeToAudioArray(this.audioSource);

        if(this.node.getChildByName("Wrong") != undefined && this.node.getChildByName("Wrong") != null)
            this.ScriptableFromWrong =  this.node.getChildByName("Wrong")!.getComponent(ScriptEffects)! ;
    }


    solveSoundActivness() {
       // this.soundParent = this.node.getChildByName("SoundButtons")! ;

        if(this.JSONtask.questionAudio == undefined || this.JSONtask.questionAudio == null)
            this.soundParent!.forEach(element => {
                element.active = false;
            });
            
        else
            this.soundParent!.forEach(element => {
                element.active = true;
            });

        this.turningOff = false;
    }

    findThisSoundAndPlay(stringName : string) {
        switch (stringName) {
            case this.JSONtask.tacanOdgovor:
                if(this.JSONtask.tacanOdgovorAudio != undefined)
                    this.audioSource.playOneShot(this.JSONtask.tacanOdgovorAudio!, 1);
                break;
            case this.JSONtask.netacanOdgovor1:
                if(this.JSONtask.netacanOdgovor1Audio != undefined)
                    this.audioSource.playOneShot(this.JSONtask.netacanOdgovor1Audio!, 1);
            
                break;
            case this.JSONtask.netacanOdgovor2:
                if(this.JSONtask.netacanOdgovor2Audio != undefined)
                    this.audioSource.playOneShot(this.JSONtask.netacanOdgovor2Audio!, 1);
            
            break;
            default:
                break;
        }
    }

    soundButtonClicked(event: Event, customData: string) {

        switch (parseInt(customData)) {
            case 0:
                this.findThisSoundAndPlay(this.A.getComponent(Label)!.string);
                break;
            case 1:
                this.findThisSoundAndPlay(this.B.getComponent(Label)!.string);
                break;
            case 2:
                this.findThisSoundAndPlay(this.C.getComponent(Label)!.string);
                break;
            case 3:
                if(!this.audioSource?.playing) {
                    this.audioSource.clip = this.JSONtask.questionAudio!;
                    if(this.JSONtask.questionAudio != undefined) 
                        this.audioSource.play();
                        //Change button type
                } else 
                    this.audioSource.stop();
                
                break;
            default:
                break;
        }
    }

    answered(event: Event, customData: string) {

        if(this.audioSource?.playing)
            this.audioSource.stop();

        switch (parseInt(customData)) {
            case 0:
                if(this.A.getComponent(Label)!.string == this.JSONtask.tacanOdgovor)
                    this.rightAnwerA();
                else 
                    this.wrongAnswer();
                break;
            case 1:
                if(this.B.getComponent(Label)!.string == this.JSONtask.tacanOdgovor)
                    this.rightAnwerB();
                else 
                    this.wrongAnswer();
                break;
            case 2:
                if(this.C.getComponent(Label)!.string == this.JSONtask.tacanOdgovor)
                    this.rightAnwerC();
                else 
                    this.wrongAnswer();
            break;
            default:
                break;
        }
        
    }

    backToPosition() {
        var positionTemp = this.node.position;
        this.node.position = new Vec3(0, positionTemp.y, positionTemp.z); 
    }

    rightAnwerA() {
        this.backToPosition();
        this.getComponent(Animation)?.play("CorrectAnswerA");
        this.corespondingTask?.getComponent(Task)?.taskQuestionCompleted();
        AudioManager.getInstance().positiveSoundPlay();
    }

    rightAnwerB() {
        this.backToPosition();
        this.getComponent(Animation)?.play("CorrectAnswerB");
        this.corespondingTask?.getComponent(Task)?.taskQuestionCompleted();
        AudioManager.getInstance().positiveSoundPlay();
    }

    rightAnwerC() {
        this.backToPosition();
        this.getComponent(Animation)?.play("CorrectAnswerC");
        this.corespondingTask?.getComponent(Task)?.taskQuestionCompleted();
        AudioManager.getInstance().positiveSoundPlay();
    }

    rightAnwerAfterTheAnimation(){
        
 
        this.turnOffGenericTask();
        this.turningOff = true;
    }

    wrongAnswer() {
        if(this.audioSource?.playing)
            this.audioSource.stop();

        this.node.getComponent(Animation)!.play("WrongNudge");

        this.setRandomTask();

        AudioManager.getInstance().negativeSoundPlay();

    }

    putAnwersInPlace () {
        var nizOdgovora = new Array<string>();
        nizOdgovora[0] = this.JSONtask.tacanOdgovor!;
        nizOdgovora[1] = this.JSONtask.netacanOdgovor1!;
        nizOdgovora[2] = this.JSONtask.netacanOdgovor2!;

        nizOdgovora = this.randomizeAnswers(nizOdgovora);

        this.A.getComponent(Label)!.string = nizOdgovora[0];
        this.B.getComponent(Label)!.string = nizOdgovora[1];
        this.C.getComponent(Label)!.string = nizOdgovora[2];
    }

    randomizeAnswers(nizStringova: string[]) {
        var izlazniNiz = new Array<string>(); //   [nizStringova.length];
        var lengthTemp = nizStringova.length;

        for (let index = 0; index < lengthTemp; index++) {
            var izabraniRandomIndex = randomRangeInt(0, nizStringova.length);
            izlazniNiz[index] =  nizStringova[ izabraniRandomIndex ] ;
            nizStringova.splice(izabraniRandomIndex, 1);    
        }

        return izlazniNiz;

    }

    turnOnGenericTask(task: Node) {
        this.getComponent(Animation)?.play("BackToNormal");

        this.corespondingTask = task; 
        GameManager.getInstance().gameStatus = GameStatuType.gamePaused; 
        
        this.getComponent(ScriptEffects)?.fadeInActive();

        
        

        this.setRandomTask();

    }

    setRandomTask() {
        this.JSONtask = this.corespondingTask!.getComponent(TaskABCquestion)!.getRandomTask();
        this.genericTekst.getComponent(Label)!.string = this.JSONtask.question!;

        this.putAnwersInPlace ();
        this.solveSoundActivness();
    }

    turnOffGenericTask() {
        GameManager.getInstance().gameStatus = GameStatuType.gameActive; 

        this.getComponent(ScriptEffects)?.fadeOutActive();
        //this.ScriptableFromWrong?.fadeOutActive();
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
