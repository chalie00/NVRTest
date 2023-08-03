import { test, expect, Page } from '@playwright/test';
import { login } from '../@UserFile/Login';

const url = 'http://192.168.22.223/cgi-bin/login.cgi';
const correctID = 'admin';
const correctPW = '11qqaazz..';

const wrongID: string = 'administrator';
const wrongPW: string = '..zzaaqq11';

test.describe('Login Page', () => {
    test('Login / Logout', async ({ page }) => {
        /* =============================== Login Sequence 1 =================================== 
            Connect URL -> Correct Login -> Logout -> Logout
            Condition: Use '로그인' button 
           ===================================================================================== */
        //open Url
        await page.goto(url);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Login With Correct User Info
        login(page, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Login Click
        await page.locator('#submit').filter({ hasText: /로그인/ }).click();

        //click the Logout
        await page.getByRole('button', { name: '로그아웃' }).click();

        /* =============================== Login Sequence 2 =================================== 
            Connect URL -> Wrong Login -> Correct Login -> Logout
            Condition: Use Enter Key
           ===================================================================================== */

        //open Url
        await page.goto(url);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Login With Wrong User Info
        login(page, wrongID, wrongPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Push the Enter Key
        await page.locator('#login_pwd').press('Enter');

        //Wait for URL
        await page.waitForTimeout(3000);

        //Login With Correct User Info
        login(page, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Push the Enter Key
        await page.locator('#login_pwd').press('Enter');

        //Wait for URL
        await page.waitForTimeout(2000);

        //click the Logout
        await page.getByRole('button', { name: '로그아웃' }).click();

    })

    //Keep Browser
    //await new Promise(() => { });

})//End Of Login Test


test.describe('Smart Web Viewer', () => {
    test('Move Tab', async ({ page }) => {

        /* =============================== Move Tab Sequenc =================================== 
        Connect URL -> Correct Login -> Move to [설정] -> Move to [실시간 영상] -> Expanstion Ch4
        Condition: Use Enter Key
        ===================================================================================== */


        //open Url
        await page.goto(url);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Login Page ScreenShot
        await page.screenshot({ path: '../@UserFile/Screenshot.png', fullPage: true });

        //Login With Correct User Info
        login(page, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(2000);


        //Push the Enter Key
        await page.locator('#login_pwd').press('Enter');

        //Wait for URL
        await page.waitForTimeout(10000);

        //Click the Setting
        await page.getByRole('button', { name: '설정' }).
            click();

        //Wait for URL
        await page.waitForTimeout(2000);

        //click the Real Time Stream
        await page.getByRole('button', { name: '실시간 영상' }).click();

        //Wait For Smart Web Viewer
        await page.waitForTimeout(5000);

        //Ch4 Double Click
        await page.locator('#qtcanvas').dblclick({
            button: 'left',
            position: {
                x: 922,
                y: 413
            }
        });

        //Wait For Smart Web Viewer
        await page.waitForTimeout(2000);

        //Mouse Hover the Ch4 for clicking UI[i]
        await page.locator('#qtcanvas').hover({
            position: {
                x: 1167,
                y: 45
            }
        });

        //Click UI [i]
        // await page.locator('#qtcanvas').click({
        //     button: 'left',
        //     clickCount: 2,
        //     delay: 2000,
        //     position: {
        //         x: 1167,
        //         y: 45
        //     }
        // });

        await page.locator('#qtcanvas').click({
            position: {
                x: 170,
                y: 580
            }
        });

        //Wait For Smart Web Viewer
        await page.waitForTimeout(2000);

        await page.locator('#qtcanvas').click({
            position: {
                x: 153,
                y: 396
            }
        });



        // //Wait For Smart Web Viewer
        // await page.waitForTimeout(2000);

        // //Click [i]PopUp [X]
        // await page.locator('#qtcanvas').click({
        //     position: {
        //         x: 549,
        //         y: 444
        //     }
        // });

    })
})
