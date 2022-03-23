
import { _decorator, Component, Node, Game } from 'cc';
import { GameManager } from '../GameManager';
import { TaskABCquestion } from '../Tasks/TaskABCquestion';
import { TaskInput } from '../Tasks/TaskInput';
import { DbuttonActivate } from '../UI/3DbuttonActivate';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Checkpoint
 * DateTime = Thu Jan 13 2022 15:40:07 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = Checkpoint.ts
 * FileBasenameNoExtension = Checkpoint
 * URL = db://assets/Scripts/Checkpoint/Checkpoint.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('Checkpoint')
export class Checkpoint extends Component {
    
    
    QuestPrvi?: Node;

    QuestionItem?: Node;

    Question?: Node;

    start () {
        this.findQuestion();
        this.findQuestPrvi();
    }

    findQuestion() {
        this.node.children?.forEach(task => {
            if( task.getComponent(TaskABCquestion) != undefined || task.getComponent(TaskInput) != undefined )
                this.Question = task;
        });

        var arrayItems = GameManager.getInstance().WorldRoot!.children;
        
        arrayItems.forEach(element => {
            this.testElement(element);
            if(element.children?.length != 0)
                element.children.forEach(element => {
                this.testElement(element)
                if(element.children?.length != 0)
                    element.children.forEach(element => {
                    this.testElement(element)
                    if(element.children?.length != 0)
                        element.children.forEach(element => {
                        this.testElement(element)

                    });

                });

            });

        });

        //if(this.QuestionItem != undefined)
         //   console.log("ITEM " + this.QuestionItem?.name);
        
    }

    testElement(element: Node) {
        if( element.getComponent(DbuttonActivate) != undefined)
                if( element.getComponent(DbuttonActivate)?.myTask == this.Question) 
                     this.QuestionItem = element;
    }

    findQuestPrvi() {
        this.QuestPrvi = this.node.children[0];
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
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
