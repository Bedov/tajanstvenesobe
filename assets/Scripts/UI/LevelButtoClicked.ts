
import { _decorator, Component, Node, ButtonComponent, find } from 'cc';
import { GlobalManager } from '../GlobalManager';
import { ButtonColorsLogic } from '../Goldberg/ButtonColorsLogic';
import { OpenLevelByName } from '../Utilities/OpenLevelByName';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LevelButtoClicked
 * DateTime = Fri Apr 08 2022 15:01:05 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = LevelButtoClicked.ts
 * FileBasenameNoExtension = LevelButtoClicked
 * URL = db://assets/Scripts/UI/LevelButtoClicked.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LevelButtonClicked')
export class LevelButtonClicked extends Component {
    
    @property(String)
    levelName!: String;

    @property(Boolean)
    lockedButton: Boolean = true;

    buttonColorsLogic?: ButtonColorsLogic;

    start () {
        this.buttonColorsLogic = this.node.parent!.getComponent(ButtonColorsLogic)!;
    }

    levelButtonClicked() {
        var canvas = find("Canvas")!;
        
        if(!this.lockedButton) {
            canvas.getComponent(OpenLevelByName)!.loadAndPlaySceneByNameD( this.levelName.toString() );
            this.buttonColorsLogic!.lockAllButtons();
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
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
