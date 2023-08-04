import { test, expect, Page } from '@playwright/test';
import { canvasClickWith_X_Y, canvas_Double_ClickWith_X_Y, changeTextField, keyPressWithCount, login, timeTable_On_Off } from '../@UserFile/Login';

//Variable of Url, ID
let url = 'http://192.168.22.223/cgi-bin/login.cgi';
let correctID = 'admin';
let correctPW = '11qqaazz..';

let wrongID: string = 'administrator';
let wrongPW: string = '..zzaaqq11';

//Element Position in Canvas
const smartCanvas = '#qtcanvas';

//Smart Web Viewer Canvas Position Information
const obj_SmartView = {
    portX: 159,
    portY: 79,
    camList_X: 96,
    camList_Y: 621,
    screenMode_X: 171,
    screenMode_Y: 78,
    ptz_X: 222,
    ptz_Y: 619
}

//CH4 Canvas Position Information
const obj_Ch4 = {
    area_DCLK_X: 922,
    area_DCLK_Y: 413,
    div4_Info_X: 1145,
    div4_Info_Y: 354,
    div1_Info_X: 1167,
    div1_Info_Y: 45
}


/* =============================== Login Sequence  =================================== 
    Sequence 1
    Connect URL -> Correct Login -> ScreenShot -> Logout -> Logout
    Condition: Use '로그인' button 

    Sequence2
    Connect URL -> Wrong Login -> Correct Login -> Logout
    Condition: Use Enter Key
===================================================================================== */
test.describe('Login Page', () => {
    test('Login / Logout', async ({ page }) => {
    //Sequence 1
        //Login With Correct User Info
        login(page, url, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Login Click
        await page.locator('#submit').filter({ hasText: /로그인/ }).click();

        //Wait for URL
        await page.waitForTimeout(2000);

        //Login Page ScreenShot
        await page.screenshot({ path: './@Captured/AfterLogin.png', fullPage: true });


        //click the Logout
        await page.getByRole('button', { name: '로그아웃' }).click();


    //Sequence 2
        //Login With Wrong User Info
        login(page, url, wrongID, wrongPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Push the Enter Key
        await page.locator('#login_pwd').press('Enter');

        //Wait for URL
        await page.waitForTimeout(3000);

        //Login With Correct User Info
        login(page, url, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Push the Enter Key
        await page.locator('#login_pwd').press('Enter');

        //Wait for URL
        //await page.waitForTimeout(2000);
        await page.goto(url, { waitUntil: 'networkidle' });

        //click the Logout
        await page.getByRole('button', { name: '로그아웃' }).click();

    })

    //Keep Browser
    //await new Promise(() => { });

})//End Of Login Test


/* =============================== Move Tab Sequenc =================================== 
    Connect URL -> Correct Login -> Move to [설정] -> Move to [실시간 영상] -> Expanstion Ch4
    Condition: Use Enter Key
===================================================================================== */
test.describe('Smart Web Viewer', () => {
    test('Move Tab', async ({ page }) => {

        //Login With Correct User Info
        login(page, url, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Push the Enter Key
        await page.locator('#login_pwd').press('Enter');

        //Wait for URL
        // await page.waitForTimeout(10000);
        await page.goto(url, { waitUntil: 'networkidle' });

        //Click the Setting
        await page.getByRole('button', { name: '설정' }).
            click();

        //Wait for URL
        await page.waitForTimeout(2000);

        //click the Real Time Stream
        await page.getByRole('button', { name: '실시간 영상' }).click();

    })//End Of The Move Tab


/* =============================== Smart Web Control Sequenc =================================== 
    Connect URL -> Correct Login -> Port Text Delete -> Port Set 81 -> CH4 Full Screen 
    -> CH4 Information On -> Full Screen Capture
===================================================================================== */
    test('Smart Web Viewer Control The Element', async ({ page }) => {
        //Login With Correct User Info
        login(page, url, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Push the Enter Key
        await page.locator('#login_pwd').press('Enter');

        //Wait for URL
        await page.waitForTimeout(5000);

        //Web Port Typing
        canvasClickWith_X_Y(page, smartCanvas, obj_SmartView.portX, obj_SmartView.portY);

        //Wait for URL
        await page.waitForTimeout(1000);

        //Port Text Delete and Typing
        keyPressWithCount(page, 'Backspace', 2);
        changeTextField(page,'81');

        //Wait for URL
        await page.waitForTimeout(1000);

        //Ch4 Double Click
        canvas_Double_ClickWith_X_Y(page, smartCanvas, obj_Ch4.div4_Info_X ,obj_Ch4.div4_Info_Y);

        //Wait for URL
        await page.waitForTimeout(1000);

        //Click CH4 UI [i]
        canvasClickWith_X_Y(page, smartCanvas, obj_Ch4.div1_Info_X, obj_Ch4.div1_Info_Y);

        //Wait for URL
        await page.waitForTimeout(1000);

        //CH4 FullScreen and Information On ScreenShot
        await page.screenshot({ path: './@Captured/CH4_Full_Info.png', fullPage: true });


        //Keep Browser
        //await new Promise(() => { });

    })//End Of The Smart Web Viewer Control The Element
})