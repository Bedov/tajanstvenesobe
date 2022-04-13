
import { _decorator, Component, Node, director, loader, Label, assetManager, AssetManager, Scene, Game } from 'cc';
import { GameManager, localSceneData } from '../GameManager';
import { GlobalManager, levelObject } from '../GlobalManager';
import { ScriptEffects } from './ScriptEffects';
const { ccclass, property } = _decorator;

var labelTemp :Label ;
/**
 * Predefined variables
 * Name = OpenLevelByName
 * DateTime = Sun Dec 19 2021 13:54:02 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = OpenLevelByName.ts
 * FileBasenameNoExtension = OpenLevelByName
 * URL = db://assets/Scripts/Utilities/OpenLevelByName.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('OpenLevelByName')
export class OpenLevelByName extends Component {
    
    @property(Node)
    loadingPanel!: Node;

    @property(Label)
    loadingPercentLable!: Label;

    start () {
        labelTemp = this.loadingPercentLable;
    }

    findSceneDataByName(sceneName: string) {
      var levelsArray = GlobalManager.getInstance().levelsArray;

      levelsArray.forEach(element => {
          if(element.sceneName == sceneName)
            return element;
      });


      return new levelObject;
    }

    loadAndPlaySceneByName(event : Event, customEventData: string) {
        this.loadingPanel.getComponent(ScriptEffects)?.fadeInActive();
          
        

        director.preloadScene(customEventData, function  (completedCount, totalCount, item) {
            if (labelTemp) {
              var percent = 0;
              if (totalCount > 0) {
                percent = 100 * completedCount / totalCount;
              }
              labelTemp.string = Math.round(percent) + '%';
            }  

        },function() {  director.loadScene(customEventData) } ) ;

       // director.loadScene(sceneName);
    }

    loadAndPlaySceneByNameD(customEventData: string) {
      this.loadingPanel.getComponent(ScriptEffects)?.fadeInActive();
      
      if( this.findSceneDataByName(customEventData)  != null) 
        localSceneData.setData( this.findSceneDataByName(customEventData) );
        //localSceneData = this.findSceneDataByName(customEventData);
      else
        console.log("Can't find the right scene!");

      director.preloadScene(customEventData, function  (completedCount, totalCount, item) {
          if (labelTemp) {
            var percent = 0;
            if (totalCount > 0) {
              percent = 100 * completedCount / totalCount;
            }
            labelTemp.string = Math.round(percent) + '%';
          }  

      },function() {  director.loadScene(customEventData) } ) ;

     // director.loadScene(sceneName);
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
