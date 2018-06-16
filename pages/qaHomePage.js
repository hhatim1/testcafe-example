import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

class QaHomePage extends BasePage {
    constructor() {
        super();
        this.url = 'http://cnn.com';

        // include modules...
        this.topStories = $('#homepage1-zone-1 > div.l-container > div > div.column.zn__column--idx-2 > ul > li:nth-child(1)');
        this.cnnLink = $('a#cnnLink');
        this.storyKicker = $('#homepage1-zone-1 > div.l-container > div > div.column.zn__column--idx-0 > ul > li:nth-child(1) >  article > div > div.cd__content')

    }


    async topStories(topStories) {
        // return await (5).eql(5);

    }

    async storyKicker(storyKicker) {
        // return await (qsHomePage.storyKicker).exists;  
    }

}
export default new QaHomePage();