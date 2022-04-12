
import { _decorator, Component, Node, find, Material, Mesh, MeshRenderer } from 'cc';
import { LevelButtonClicked } from '../UI/LevelButtoClicked';
const { ccclass, property } = _decorator;
 
@ccclass('ButtonColorsLogic')
export class ButtonColorsLogic extends Component {

    @property(Material)
    lockedMaterial?: Material ;

    @property(Material)
    unlockedMaterial?: Material ;

    @property(Material)
    finishedMaterial?: Material ;

    button1? : Node; 
    button2? : Node; 
    button3? : Node; 
    button4? : Node; 
    button5? : Node; 

    buttonsArray : Array<Node> = [];

    start () {
        this.buttonsArray!.push(this.node.getChildByName("1")!);
        this.buttonsArray!.push(this.node.getChildByName("2")!);
        this.buttonsArray!.push(this.node.getChildByName("3")!);
        this.buttonsArray!.push(this.node.getChildByName("4")!);
        this.buttonsArray!.push(this.node.getChildByName("5")!);

        this.refreshColors(3);
    }

    refreshColors(progress: Number) {
        for (let index = 0; index < this.buttonsArray.length; index++) {
            const element = this.buttonsArray[index].getComponent(MeshRenderer)!.setMaterial(this.lockedMaterial!, 0);
        }

        for (let index = 0; index < progress; index++) {
            this.buttonsArray[index].getComponent(LevelButtonClicked)!.lockedButton = false;
            const element = this.buttonsArray[index].getComponent(MeshRenderer)!.setMaterial(this.finishedMaterial!, 0);
        }

        this.buttonsArray[Number(progress)].getComponent(LevelButtonClicked)!.lockedButton = false;
        this.buttonsArray[Number(progress)].getComponent(MeshRenderer)!.setMaterial(this.unlockedMaterial!, 0);
    }

    lockAllButtons() {
        this.buttonsArray.forEach(element => {
            element.getComponent(LevelButtonClicked)!.lockedButton = true;
        });
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
