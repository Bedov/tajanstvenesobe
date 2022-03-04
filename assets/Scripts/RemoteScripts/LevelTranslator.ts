
import { _decorator, Component, Node, Label } from 'cc';
import { GameManager } from '../GameManager';
import { GlobalManager } from '../GlobalManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LevelTranslator
 * DateTime = Thu Mar 03 2022 16:46:49 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = LevelTranslator.ts
 * FileBasenameNoExtension = LevelTranslator
 * URL = db://assets/Scripts/RemoteScripts/LevelTranslator.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LevelTranslator')
export class LevelTranslator extends Component {
   
    subtitle?: Label;

    start () {
        this.subtitle =  GameManager.getInstance().TaskManager!.getChildByName("Subtitle")!.getComponent(Label)!;

        this.subtitle.string = GlobalManager.getGlobal().tutorialInstroction!;
    }

}



//"inverseSettingsText":"Inverse the look controls", "choseSpeedSettingsText":"Choose the speed of the player" }