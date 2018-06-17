import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

class QaHomePage extends BasePage {
    constructor() {
        super();
        this.url = 'http://cnn.com';

        // include modules...
        this.cnnLink = $('a#cnnLink');

        // since the table happens to have multiple rows, the 5th row is clikced to show that there are at least 5 li links or rows:
        this.topStories = $('#homepage1-zone-1 > div.l-container > div > div.column.zn__column--idx-2 > ul > li:nth-child(n+5)')
       
        this.StoriesList = $('#homepage1-zone-1 > div.l-container > div > div.column.zn__column--idx-2 > ul')
        //         console.log('--------  StoriesList ---------')
        //         console.log('success')
        //         return this.StoriesList;

        // the first li link is clicked to show it has content and the link is functioning 
        this.storyKicker = $('#homepage1-zone-1 > div.l-container > div > div.column.zn__column--idx-0 > ul > li:nth-child(1) >  article > div > div.cd__content')
                   
                   //return  this.storykicker.innerText;
                   //console.log(storyKicker.innerText)
                   //var text = element.textContent;
                   //element.textContent = "this is some sample text";
                   console.log('-------- StoryKicker ----------')
                   //console.log(storykicker.innerText)
    }


    // async topStories(topStories) {
        

    // }

    // async storyKicker(storyKicker) {
    //     // return await (qsHomePage.storyKicker).exists;  
    
    // }

}
export default new QaHomePage();

