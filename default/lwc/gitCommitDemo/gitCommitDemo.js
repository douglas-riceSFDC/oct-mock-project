import { LightningElement } from 'lwc';

export default class GitCommitDemo extends LightningElement {

    connectedCallback() {
        console.log('Please commit me?');
        console.log('Pretty please?');
    }
}