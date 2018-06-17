import qaHomePage from '../pages/qaHomePage';
import cnnPage from '../pages/cnnPage';
import { Selector } from 'testcafe';

fixture`CNN qaHomePage`
    .page`${qaHomePage.url}`
    .page`${cnnPage.url}`


  test('1. Assert that there are at least 5 top stories', async t => {
   
     	await t
     	.click(qaHomePage.topStories());
		//.expect(qaHomePage.StoriesList.exists).ok();
    	//.expect(qaHomePage.StoriesList.innerText != null);
	});



// //////////////////////////////////////////////////////////////
test('2a. Assert the kicker under the main story’s picture is filled out', async t => {
        await t
        
    	//.click(qaHomePage.storyKicker());
    	.expect(qaHomePage.storyKicker.innerText != null)
    	//.expect(qaHomePage.storyKicker.innerText).ok()
    	//.expect(qaHomePage.storyKicker.innerText).contains()
    	// textContent   // .withText  // .innerText
});

test('2b. Assert the kicker under the main story’s picture is filled out', async t => {
        await t
        
    	.click(qaHomePage.storyKicker());
});



// testcafe chrome qaTest.js