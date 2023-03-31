const { test, expect } = require('@playwright/test');

test('get all agoda hotel', async ({ page }) => {
    let allHotelName = [];
    await page.goto('https://www.agoda.com/search?city=2570');

    await page.waitForTimeout(5000);

    await page.keyboard.press('Escape');
    await page.keyboard.press('Escape');
    await page.keyboard.press('Escape');

    while (true) {
        for (let i = 0; i < 30; i++) {
            await page.mouse.wheel(0, 2000);
            await page.waitForTimeout(500);
        }

        await page.waitForTimeout(10000);

        const hotelsName = await (await page.locator('[data-selenium="hotel-name"]')).allInnerTexts();
        allHotelName = [...allHotelName, ...hotelsName];
        console.log(hotelsName);

        const next = await page.locator('#paginationNext');
        const nextVisible = await next.isVisible();
        if(nextVisible){
            await next.click();
        }else{
            break;
        }
    }

    console.log('all hotel start here')
    for (let i =0; i < allHotelName.length; i++){
        console.log(allHotelName[i]);
    }
});