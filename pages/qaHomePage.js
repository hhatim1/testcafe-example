import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

class QaHomePage extends BasePage {
    constructor() {
        super();
        
        this.url = 'http://cnn.com';

        // include modules...
        this.cnnLink = $('a#cnnLink');

        // since the table happens to have multiple rows, the 5th row is clicked to show that there are at least 5 li links or rows:
        // :nth-child(n+5) matches children starting from the 5th (inclusive)
        this.topStories = $('#homepage1-zone-1 > div.l-container > div > div.column.zn__column--idx-2 > ul > li:nth-child(n+5)')
              

        this.StoriesList = $('#homepage1-zone-1 > div.l-container > div > div.column.zn__column--idx-2 > ul')


        // the first ul link is checked to show it has content and the link is working 
        this.storyKicker = $('#homepage1-zone-1 > div.l-container > div > div.column.zn__column--idx-0 > ul > li:nth-child(1) >  article > div > div.cd__content')
                         

    }
    // async topStories(topStories) {
        

    // }

    // async storyKicker(storyKicker) {
    //     // return await (qsHomePage.storyKicker).exists;  
    
    // }

}
export default new QaHomePage();

