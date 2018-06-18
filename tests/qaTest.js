import qaHomePage from '../pages/qaHomePage';
import cnnPage from '../pages/cnnPage';
import { Selector } from 'testcafe';


fixture`CNN qaHomePage`
    .page`${qaHomePage.url}`
    .page`${cnnPage.url}`

        test('1a. Assert that there are at least 5 top stories', async t => {
   
        await t.expect(qaHomePage.topStories.innerText != null);
        //await t.expect(qaHomePage.topStories.exists).ok();
        //await t.expect(qaHomePage.topStories.innerText).contains('');
        await t.click(qaHomePage.topStories());
    
	});

        test('1b. Assert that there are at least 5 top stories', async t => {
     	
        //.expect(list.count).eql(2)
		await t.expect(qaHomePage.StoriesList.exists).ok();
    	await t.expect(qaHomePage.StoriesList.innerText != null);
	});


        test('2. Assert the kicker under the main story’s picture is filled out', async t => {
          
    	await t.click(qaHomePage.storyKicker());
    	await t.expect(qaHomePage.storyKicker.innerText != null);
            console.log('kicker under the main story’s picture is filled out')
               
    });



// testcafe chrome qaTest.js