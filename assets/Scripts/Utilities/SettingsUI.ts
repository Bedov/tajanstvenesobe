
import { _decorator, Component, Node, EventHandler, SliderComponent,  Label, Slider, Toggle } from 'cc';
import { GameManager, GameStatuType } from '../GameManager';
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
 import { GlobalManager } from '../GlobalManager';
 
@ccclass('SettingsUI')
export class SettingsUI extends Component {
    
    @property(Node)
    genericTekst!: Node;

    @property(Slider)
    speedSlider!: Slider;

    @property(Toggle)
    inversionToggle!: Toggle;

    defaultMoveSpeed : number = 1.5;

   /* onLoad(){
        const sliderEventHandler = new EventHandler();
        // This Node is the node to which your event processing code component belongs
        sliderEventHandler.target = this.node;
        // This is the script class name
        sliderEventHandler.component = 'example';
        sliderEventHandler.handler = 'callback';
        sliderEventHandler.customEventData = 'foobar';

        const slider = this.node.getComponent(SliderComponent);
        slider!.slideEvents.push(sliderEventHandler);
    } */

    start () {
        this.defaultMoveSpeed = GameManager.getInstance().moveSpeed;
    }

    sliderChanged(event: Event, customEventData: string){
        GameManager.getInstance().moveSpeed = this.speedSlider.progress + this.defaultMoveSpeed;
    }

    toggleChanged(event: Event, customEventData: string){
        
        
        
    }

    toggleChecked(event: Event, customEventData: string){
        GameManager.getInstance().invertedRotation = this.inversionToggle.isChecked!;
        console.log(" TOGGLE " + GameManager.getInstance().invertedRotation );
        
        
    }

    solveIntroTaskButton() {
         this.node.getChildByName("GenericButton")!.getChildByName("Label")!.getComponent(Label)!.string = GlobalManager.getGlobal().exitButton!;

         this.node.getChildByName("Speed")!.getComponent(Label)!.string = GlobalManager.getGlobal().choseSpeedSettingsText!;
         this.node.getChildByName("Inverse")!.getComponent(Label)!.string = GlobalManager.getGlobal().inverseSettingsText!;
    } 

    turnOnSetting() {
        this.getComponent(ScriptEffects)!.fadeInActive();
        //this.genericTekst.getComponent(Label)!.string = tekst.toString();
        this.solveIntroTaskButton();

        GameManager.getInstance().gameStatus = GameStatuType.gamePaused; 
    }

    turnOffSetting() {
        
        this.getComponent(ScriptEffects)?.fadeOutActive();
        GameManager.getInstance().gameStatus = GameStatuType.gameActive; 
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
