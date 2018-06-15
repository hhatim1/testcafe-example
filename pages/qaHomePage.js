import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

class QaHomePage extends BasePage {
    constructor() {
        super();
        this.url = 'http://cnn.com';

        // include modules...
        this.topStories = $('div.column.zn__column--idx-2');
        this.storyKicker = $('div.cd__content');
        this.cnnLink = $('a#cnnLink');

    }


    async topStories(topStories) {
        // return await (5).eql(5);

    }

    async topStories(storyKicker) {
        // return await (qsHomePage.storyKicker).exists;  
    }

}
export default new QaHomePage();