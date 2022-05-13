
import { _decorator, Component, Node, AudioClip, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = AudioManager
 * DateTime = Thu Apr 28 2022 16:20:08 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = AudioManager.ts
 * FileBasenameNoExtension = AudioManager
 * URL = db://assets/Scripts/AudioManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('AudioManager')
export class AudioManager extends Component {
    @property(AudioClip)
    winSound?: AudioClip;

    @property(AudioClip)
    positiveSound?: AudioClip;

    @property(AudioClip)
    negativeSound?: AudioClip;

    @property(AudioClip)
    clickSound?: AudioClip;
    
    private audioSource: AudioSource = null!;

    public static getInstance(): AudioManager {
        if (!this.instance) {
            AudioManager.instance = new AudioManager();
            
        }
        return AudioManager.instance;
    }

    static instance: AudioManager;

    onLoad() {
        AudioManager.instance = this;
        this.audioSource = this.node.getComponent(AudioSource)!;
    }

    start () {
        // [3]
    }

    positiveSoundPlay() {
        this.audioSource.playOneShot(this.positiveSound!);
    }

    winSoundPlay() {
        this.audioSource.playOneShot(this.winSound!);
    }

    negativeSoundPlay() {
        this.audioSource.playOneShot(this.negativeSound!);
    }

    clickSoundPlay() {
        this.audioSource.playOneShot(this.clickSound!);
    }

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
