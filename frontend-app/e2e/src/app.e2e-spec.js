import { AppPage } from './app.po';
describe('new App', () => {
    let page;
    beforeEach(() => {
        page = new AppPage();
    });
    describe('default screen', () => {
        beforeEach(() => {
            page.navigateTo('/Inbox');
        });
        it('should say Inbox', () => {
            expect(page.getParagraphText()).toContain('Inbox');
        });
    });
});
//# sourceMappingURL=app.e2e-spec.js.map