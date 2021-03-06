
import { _decorator, Component, Node, sys, systemEvent, SystemEvent, macro, KeyCode, UIOpacityComponent } from 'cc';
import { GameManager, GameStatuType } from './GameManager';
import { GlobalManager } from './GlobalManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DetectTypeOfDevice
 * DateTime = Mon Nov 15 2021 18:42:05 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = DetectTypeOfDevice.ts
 * FileBasenameNoExtension = DetectTypeOfDevice
 * URL = db://assets/Scripts/DetectTypeOfDevice.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 const KEYCODE = {
    UP: macro.KEY.up,
    DOWN: macro.KEY.down,
    LEFT: macro.KEY.left,
    RIGHT: macro.KEY.right,
    SHIFT: macro.KEY.shift,
}


import { ScriptEffects } from "./Utilities/ScriptEffects";
 
@ccclass('DetectTypeOfDeviceElevator')
export class DetectTypeOfDeviceElevator extends Component {

    KeyboardMoveSymbol!: Node;
    MobileMoveJoystick!: Node;
    KeyboardSeeSymbol!: Node;
    MobileSeeSymbol!: Node;

    MobileMoveSymbol!: Node;

    _moveTimerBool = true;
    _moveTutorialEndBool = false;
    _movedontRepeatTutorialEndevent = false;
    _moveCounter = 1;

    _lookTimerBool = true;
    _lookTutorialEndBool = false;
    _lookdontRepeatTutorialEndevent = false;
    _lookCounter = 0.2;

    _tutorialEnded = false;
    _preTutorailEnded = false;

    onLoad() {
        this.scheduleOnce(this.startTutorial, 6);
        this.scheduleOnce(this.endPretutoral, 5);

        this.MobileMoveJoystick = this.node.getChildByName("joystick")!;
    }

    endPretutoral() {
        this._preTutorailEnded = true;
        if(GlobalManager.getInstance().activeLevelData.levelProgress != 0) {
            this._moveTutorialEndBool = true;
            this._lookTutorialEndBool = true;
        }
    }

    startTutorial() {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        this.KeyboardMoveSymbol = this.node.getChildByName("DesktopMoveTutorial")!;
        this.KeyboardSeeSymbol = this.node.getChildByName("DesktopLookTutorial")!;
        this.MobileSeeSymbol = this.node.getChildByName("MobileLookTutorial")!;
        this.MobileMoveSymbol = this.node.getChildByName("MobileMoveTutorial")!;
        this.setPlatform();
        
    }

    start() {
        
        this.setPlatformInitial();

    }

    setPlatformInitial() {
        
        if(GlobalManager.getInstance().isMobileOrTablet) {
            this.MobileMoveJoystick.active = true;
        } else 
            this.MobileMoveJoystick.active = false;

    }

    setPlatform() {
        
        if(GlobalManager.getInstance().isMobileOrTablet) {
            this.KeyboardMoveSymbol.active = false;
            this.MobileMoveSymbol.active = true;
            this.KeyboardSeeSymbol.active = false;
            this.MobileSeeSymbol.active = true;
        } else {
            this.KeyboardMoveSymbol.active = true;
            this.MobileMoveSymbol.active = false;
            this.KeyboardSeeSymbol.active = true;
            this.MobileSeeSymbol.active = false;
        }
    }

    checkProgressForTutorial() {
        //if(GlobalManager.getInstance().Progress != 0) {
            this._moveTutorialEndBool = true;
            this._moveTimerBool = false;
            this._lookdontRepeatTutorialEndevent = true;
            this._lookTimerBool = false;
       //}
    }

    onDestroy(){
        systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        //this.node.off(SystemEvent.EventType.TOUCH_MOVE, this.joystick_Mouse_Move, this); 
    }

    onKeyDown(e: any) {
        if(e.keyCode == KEYCODE.UP || e.keyCode == KEYCODE.LEFT || e.keyCode == KEYCODE.DOWN || e.keyCode == KEYCODE.RIGHT ) 
            this._moveTutorialEndBool = true;

    }

    update(deltaTime: number) {
        if(this._preTutorailEnded == false)
            return;

        if(this._lookTutorialEndBool && this._lookdontRepeatTutorialEndevent == false) {
            
            var mobileSeeSymbole = this.MobileSeeSymbol.getComponent('ScriptEffects') as ScriptEffects;
            var keyboardSeeSymbol = this.KeyboardSeeSymbol.getComponent('ScriptEffects') as ScriptEffects;

            if(GlobalManager.getInstance().isMobileOrTablet)
                mobileSeeSymbole.fadeOutActive();
            else
                keyboardSeeSymbol.fadeOutActive();

            this._lookdontRepeatTutorialEndevent = true;
        }

        if(this._moveTutorialEndBool && this._movedontRepeatTutorialEndevent == false) {

            var MobileMoveSymbol= this.MobileMoveSymbol.getComponent('ScriptEffects') as ScriptEffects;
            var keyboardMoveSymbol = this.KeyboardMoveSymbol.getComponent('ScriptEffects') as ScriptEffects;

            if(GlobalManager.getInstance().isMobileOrTablet)
                MobileMoveSymbol.fadeOutActive();
            else
                keyboardMoveSymbol.fadeOutActive();
            

            this._movedontRepeatTutorialEndevent = true;
        }

        this._lookCounter -= deltaTime;

        if(this._lookCounter < 0 && this._lookTimerBool == true && !this._lookTutorialEndBool) {
            if(GlobalManager.getInstance().isMobileOrTablet) {
                var mobileSeeSymbole = this.MobileSeeSymbol.getComponent('ScriptEffects') as ScriptEffects;
                mobileSeeSymbole.fadeInActive();
            }else {
                var keyboardSeeSymbol = this.KeyboardSeeSymbol.getComponent('ScriptEffects') as ScriptEffects;
                keyboardSeeSymbol.fadeInActive();

            }
            this._lookTimerBool = false;
        }

        if(this._lookTutorialEndBool) {
            this._moveCounter -= deltaTime;
        }



        if(this._moveCounter < 0 && this._moveTimerBool == true && this._lookTutorialEndBool && !this._moveTutorialEndBool) {
            if(GlobalManager.getInstance().isMobileOrTablet) {
                var MobileMoveSymbol = this.MobileMoveSymbol.getComponent('ScriptEffects') as ScriptEffects;
                MobileMoveSymbol.fadeInActive();
            }else {
                var KeyboardMoveSymbol = this.KeyboardMoveSymbol.getComponent('ScriptEffects') as ScriptEffects;
                KeyboardMoveSymbol.fadeInActive();

            }
            this._moveTimerBool = false;
        }

        if(this._lookTutorialEndBool && this._moveTutorialEndBool && !this._tutorialEnded) {
            
            GlobalManager.getInstance().gameStatus = GameStatuType.gameActive; 

            this._tutorialEnded = true;
        }


        

    }
    keyboard_Move() {
        if(!this._movedontRepeatTutorialEndevent && this._preTutorailEnded)
            this._moveTutorialEndBool = true;
    }

    joystick_Mouse_Move() {
        if(!this._lookdontRepeatTutorialEndevent && this._preTutorailEnded)
            this._lookTutorialEndBool = true;
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
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
