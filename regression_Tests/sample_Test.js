import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://devexpress.github.io/testcafe/example/`;
    
test('My first test', async t => {

    const checkBox = Selector('#remote-testing')
    await t.click(checkBox)

    await t.wait(5000)

});

fixture `Getting Started1`
//.page `http://omayo.blogspot.com/`;
    .page `http://www.webdriveruniversity.com/`;

test('My second test', async t => {

    const clickOnLink = Selector('#contact-us').child('div').withText('CONTACT US')
    await t.click(clickOnLink)

    const enterText = Selector("[name = 'first_name']");
    await t.typeText(enterText, "Shahariar Chowdhury")
    await t.typeText(enterText, "Jarif Chowdhury", {replace:true})

});
