import qaHomePage from '../pages/qaHomePage';
import cnnPage from '../pages/cnnPage';
import { Selector } from 'testcafe';

fixture`CNN qaHomePage`
    .page`${qaHomePage.url}`
    .page`${cnnPage.url}`


test('1. Assert that there are at least 5 top stories', async t => {
    //await t.expect(5, Selector('div.column.zn__column--idx-2').count).eql(5);
    await t.expect(5, qaHomePage.topStories.count).eql(5);
});
//////////////////////////////////////////////////////////////

test('2. Assert the kicker under the main story’s picture is filled out', async t => {
        await t
         //.expect(qaHomePage.article.exists);
    	 .click(qaHomePage.storyKicker())
});



// testcafe chrome qaTest.js