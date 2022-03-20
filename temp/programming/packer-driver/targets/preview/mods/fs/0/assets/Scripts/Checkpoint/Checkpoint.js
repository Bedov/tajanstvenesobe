System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GameManager, TaskABCquestion, TaskInput, DbuttonActivate, _dec, _class, _temp, _crd, ccclass, property, Checkpoint;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskABCquestion(extras) {
    _reporterNs.report("TaskABCquestion", "../Tasks/TaskABCquestion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskInput(extras) {
    _reporterNs.report("TaskInput", "../Tasks/TaskInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDbuttonActivate(extras) {
    _reporterNs.report("DbuttonActivate", "../UI/3DbuttonActivate", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      TaskABCquestion = _unresolved_3.TaskABCquestion;
    }, function (_unresolved_4) {
      TaskInput = _unresolved_4.TaskInput;
    }, function (_unresolved_5) {
      DbuttonActivate = _unresolved_5.DbuttonActivate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37bcfOsZGlNz6jGQQBQgChf", "Checkpoint", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("Checkpoint", Checkpoint = (_dec = ccclass('Checkpoint'), _dec(_class = (_temp = class Checkpoint extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "QuestPrvi", void 0);

          _defineProperty(this, "QuestionItem", void 0);

          _defineProperty(this, "Question", void 0);
        }

        start() {
          this.findQuestion();
          this.findQuestPrvi();
        }

        findQuestion() {
          this.node.children.forEach(task => {
            if (task.getComponent(_crd && TaskABCquestion === void 0 ? (_reportPossibleCrUseOfTaskABCquestion({
              error: Error()
            }), TaskABCquestion) : TaskABCquestion) != undefined || task.getComponent(_crd && TaskInput === void 0 ? (_reportPossibleCrUseOfTaskInput({
              error: Error()
            }), TaskInput) : TaskInput) != undefined) this.Question = task;
          });
          var arrayItems = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().WorldRoot.children;
          arrayItems.forEach(element => {
            var _element$children;

            this.testElement(element);
            if (((_element$children = element.children) === null || _element$children === void 0 ? void 0 : _element$children.length) != 0) element.children.forEach(element => {
              var _element$children2;

              this.testElement(element);
              if (((_element$children2 = element.children) === null || _element$children2 === void 0 ? void 0 : _element$children2.length) != 0) element.children.forEach(element => {
                var _element$children3;

                this.testElement(element);
                if (((_element$children3 = element.children) === null || _element$children3 === void 0 ? void 0 : _element$children3.length) != 0) element.children.forEach(element => {
                  this.testElement(element);
                });
              });
            });
          }); //if(this.QuestionItem != undefined)
          //   console.log("ITEM " + this.QuestionItem?.name);
        }

        testElement(element) {
          var _element$getComponent;

          if (element.getComponent(_crd && DbuttonActivate === void 0 ? (_reportPossibleCrUseOfDbuttonActivate({
            error: Error()
          }), DbuttonActivate) : DbuttonActivate) != undefined) if (((_element$getComponent = element.getComponent(_crd && DbuttonActivate === void 0 ? (_reportPossibleCrUseOfDbuttonActivate({
            error: Error()
          }), DbuttonActivate) : DbuttonActivate)) === null || _element$getComponent === void 0 ? void 0 : _element$getComponent.myTask) == this.Question) this.QuestionItem = element;
        }

        findQuestPrvi() {
          this.QuestPrvi = this.node.children[0];
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Checkpoint.js.map