const fs = require('fs');
module.exports = async (page, scenario, vp) => {

    await page.goto('https://internshala.com/', { waitUntil: 'networkidle2' });

    const loginSectionSelector = '#header > div > nav > div.collapse.navbar-collapse.navbar_desktop > ul > li:nth-child(4) > button';
    await page.click(loginSectionSelector);

    await page.waitFor(1000);

    await page.type("#modal_email", "testmail@gmail.com");
    await page.type("#modal_password", "****");
    await page.click("#modal_login_submit");

    await page.waitFor(1000);

    // Here we can get all of the cookies

    var cookies = JSON.stringify(await page.cookies());

    fs.writeFileSync('backstop_data\\engine_scripts\\cookies.json', cookies);

    await page.waitFor(1000);

    await require('./loadCookies')(page, scenario);

};