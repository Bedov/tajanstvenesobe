
import { _decorator, Component, Node, sys, systemEvent, SystemEvent, macro, KeyCode } from 'cc';
import { GameManager } from './GameManager';
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
 
@ccclass('DetectTypeOfDevice')
export class DetectTypeOfDevice extends Component {

    @property(Node)
    KeyboardMoveSymbol!: Node;

    @property(Node)
    MobileMoveSymbol!: Node;

    @property(Node)
    MobileMoveJoystick!: Node;

    @property(Node)
    KeyboardSeeSymbol!: Node;

    @property(Node)
    MobileSeeSymbol!: Node;

    _moveTimerBool = true;
    _moveTutorialEndBool = false;
    _movedontRepeatTutorialEndevent = false;
    _moveCounter = 1;

    _lookTimerBool = true;
    _lookTutorialEndBool = false;
    _lookdontRepeatTutorialEndevent = false;
    _lookCounter = 0.2;

    onLoad() {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        this.checkProgressForTutorial();
        //this.node.on(SystemEvent.EventType.TOUCH_MOVE, this.joystick_Mouse_Move, this);
    }

    checkProgressForTutorial() {
        if(GameManager.getInstance().Progress != 0) {
            this._moveTutorialEndBool = true;
            this._moveTimerBool = false;
            this._lookdontRepeatTutorialEndevent = true;
            this._lookTimerBool = false;
        }
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
        if(this._lookTutorialEndBool && this._lookdontRepeatTutorialEndevent == false) {
            
            var mobileSeeSymbole = this.MobileSeeSymbol.getComponent('ScriptEffects') as ScriptEffects;
            var keyboardSeeSymbol = this.KeyboardSeeSymbol.getComponent('ScriptEffects') as ScriptEffects;

            if(GameManager.getInstance().isMobileOrTablet)
                mobileSeeSymbole.fadeOutActive();
            else
                keyboardSeeSymbol.fadeOutActive();

            this._lookdontRepeatTutorialEndevent = true;
        }

        if(this._moveTutorialEndBool && this._movedontRepeatTutorialEndevent == false) {

            var MobileMoveSymbol= this.MobileMoveSymbol.getComponent('ScriptEffects') as ScriptEffects;
            var keyboardMoveSymbol = this.KeyboardMoveSymbol.getComponent('ScriptEffects') as ScriptEffects;

            if(GameManager.getInstance().isMobileOrTablet)
                MobileMoveSymbol.fadeOutActive();
            else
                keyboardMoveSymbol.fadeOutActive();
            

            this._movedontRepeatTutorialEndevent = true;
        }

        this._lookCounter -= deltaTime;

        if(this._lookCounter < 0 && this._lookTimerBool == true && !this._lookTutorialEndBool) {
            if(GameManager.getInstance().isMobileOrTablet) {
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
            if(GameManager.getInstance().isMobileOrTablet) {
                var MobileMoveSymbol = this.MobileMoveSymbol.getComponent('ScriptEffects') as ScriptEffects;
                MobileMoveSymbol.fadeInActive();
            }else {
                var KeyboardMoveSymbol = this.KeyboardMoveSymbol.getComponent('ScriptEffects') as ScriptEffects;
                KeyboardMoveSymbol.fadeInActive();

            }
            this._moveTimerBool = false;
        }
        

    }
    keyboard_Move() {
        if(!this._movedontRepeatTutorialEndevent)
            this._moveTutorialEndBool = true;
    }

    joystick_Mouse_Move() {
        if(!this._lookdontRepeatTutorialEndevent)
            this._lookTutorialEndBool = true;
    }

    start () {
        if(GameManager.getInstance().isMobileOrTablet) {
            this.KeyboardMoveSymbol.active = false;
            this.MobileMoveJoystick.active = true;
            this.MobileMoveSymbol.active = true;


            this.KeyboardSeeSymbol.active = false;
            this.MobileSeeSymbol.active = true;
        } else {
            this.KeyboardMoveSymbol.active = true;
            this.MobileMoveJoystick.active = false;
            this.MobileMoveSymbol.active = false;

            this.KeyboardSeeSymbol.active = true;
            this.MobileSeeSymbol.active = false;
        }
        
       
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
