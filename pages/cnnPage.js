import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

class CnnPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://cnn.com';

    }
}
export default new CnnPage();