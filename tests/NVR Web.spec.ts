import { test, expect, Page } from '@playwright/test';
import { canvasClickWith_X_Y, canvas_Double_ClickWith_X_Y, changeTextField, keyPressWithCount, leftMenuOn_Off, login_OnlyFill_ID_PW, login_ClickLoginBtn, mouseHoverWith_X_Y, timeTable_On_Off, login_Move_Setting } from '../@UserFile/Login';
import { url, correctID, correctPW, wrongID, wrongPW, logintxt, logouttxt, settingtxt, realTimeMenutxt, liveCanvas, obj_SmartView, obj_Ch4 } from "../@UserFile/Constants";


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
        login_ClickLoginBtn(page, url, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Login Page ScreenShot
        await page.screenshot({ path: './@Captured/AfterLogin.png', fullPage: true });

        //click the Logout
        await page.getByRole('button', { name: logouttxt }).click();

        //Sequence 2
        //Login With Wrong User Info
        login_OnlyFill_ID_PW(page, url, wrongID, wrongPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Push the Enter Key
        await page.locator('#login_pwd').press('Enter');

        //Wait for URL
        await page.waitForTimeout(3000);

        //Login With Correct User Info
        login_OnlyFill_ID_PW(page, url, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Push the Enter Key
        await page.locator('#login_pwd').press('Enter');

        //Wait for URL
        await page.waitForTimeout(2000);

        //click the Logout
        await page.getByRole('button', { name: logouttxt }).click();

        //Wait for URL
        await page.waitForTimeout(1000);
    })

    //Keep Browser
    //await new Promise(() => { });

})//End Of Login Page


/* =============================== Live Tab Element =================================== 
Connect URL -> Correct Login -> Live Tab
===================================================================================== */
test.describe('Live Tab of Smart Web Viewer', () => {
    /* =============================== Switch Tab Sequence =================================== 
Connect URL -> Correct Login -> Move to [설정] -> Move to [실시간 영상]
Condition: Use Enter Key
===================================================================================== */
    test('Tab Switch from Live to Setting', async ({ page }) => {

        //Login With Correct User Info
        login_OnlyFill_ID_PW(page, url, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Push the Enter Key
        await page.locator('#login_pwd').press('Enter');

        //Wait for URL
        await page.waitForTimeout(3000);;

        //Click the Setting
        await page.getByRole('button', { name: settingtxt }).click();

        //Wait for URL
        await page.waitForTimeout(2000);

        //click the Real Time Stream
        await page.getByRole('button', { name: realTimeMenutxt }).click();

        //Wait for URL
        await page.waitForTimeout(1000);

    })//End Of The Switch from Live to Setting

    /* =============================== Port and CH4 Control =================================== 
    Connect URL -> Correct Login -> Port Text Delete -> Port Set 81 -> CH4 Full Screen 
    -> CH4 Information On -> Full Screen Capture -> CH4 Normal Screen
    ============================================================================================= */
    test('LiveTab Control Port and CH4', async ({ page }) => {
        //Login With Correct User Info
        login_ClickLoginBtn(page, url, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(3000);;

        //Web Port Typing
        canvasClickWith_X_Y(page, liveCanvas, obj_SmartView.portX, obj_SmartView.portY);

        //Wait for URL
        await page.waitForTimeout(1000);

        //Port Text Delete and Typing
        keyPressWithCount(page, 'Backspace', 2);
        changeTextField(page, '81');

        //Wait for URL
        await page.waitForTimeout(1000);

        //Ch4 Double Click
        canvas_Double_ClickWith_X_Y(page, liveCanvas, obj_Ch4.div4_Info_X, obj_Ch4.div4_Info_Y);

        //Wait for URL
        await page.waitForTimeout(1000);

        //Click CH4 UI [i]
        canvasClickWith_X_Y(page, liveCanvas, obj_Ch4.div1_Info_X, obj_Ch4.div1_Info_Y);

        //Wait for URL
        await page.waitForTimeout(1000);

        //CH4 FullScreen and Information On -> ScreenShot
        await page.screenshot({ path: './@Captured/CH4_Full_Info.png', fullPage: true });

        //Ch4 Double Click
        canvas_Double_ClickWith_X_Y(page, liveCanvas, obj_Ch4.div4_Info_X, obj_Ch4.div4_Info_Y);

        /* =============================== Smart Web Control Sequence =================================== 
        CH4 라이브 추가 -> CH4 검색/녹화 재생 추가 -> CH4 라이브 제거 -> CH4 검색/녹화 재생 제거 -> 좌측 Menu On/Off
        -> 화면 모드 On/Off -> 화면 모드 On -> 1화면 -> 4화면
        ============================================================================================= */
        //Wait for URL
        await page.waitForTimeout(1000);

        //Click The CH4 from Camera List
        canvasClickWith_X_Y(page, liveCanvas, obj_Ch4.camList_X, obj_Ch4.camList_Y);

        //Wait for URL
        await page.waitForTimeout(1000);

        //Add CH4 Live
        canvasClickWith_X_Y(page, liveCanvas, obj_Ch4.cam_add_Live_X, obj_Ch4.cam_add_Live_Y);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Click The CH4 from Camera List
        canvasClickWith_X_Y(page, liveCanvas, obj_Ch4.camList_X, obj_Ch4.camList_Y);

        //Wait for URL
        await page.waitForTimeout(1000);

        //Add CH4 Search/Recording
        canvasClickWith_X_Y(page, liveCanvas, obj_Ch4.cam_add_search_X, obj_Ch4.cam_add_search_Y);

        //Wait for URL
        await page.waitForTimeout(1000);

        //Delete CH4 Live
        //One more click because view5 is not highlighted
        canvasClickWith_X_Y(page, liveCanvas, obj_SmartView.added_View5_X, obj_SmartView.added_View5_Y);
        await page.waitForTimeout(2000);
        canvasClickWith_X_Y(page, liveCanvas, obj_SmartView.added_View5_X, obj_SmartView.added_View5_Y);

        //Wait for URL
        await page.waitForTimeout(1000);

        //Delete CH4 Search/Recording
        mouseHoverWith_X_Y(page, liveCanvas, obj_SmartView.added_View6_X, obj_SmartView.added_View6_Y);
        await page.waitForTimeout(1000);
        canvasClickWith_X_Y(page, liveCanvas, obj_SmartView.added_View6_X, obj_SmartView.added_View6_Y);

        //Wait for URL
        await page.waitForTimeout(1000);

        //Left Menu On/Off
        leftMenuOn_Off(page, liveCanvas);

        //Wait for URL
        await page.waitForTimeout(1000);

        //Keep Browser
        //await new Promise(() => { });

    })//End Of The LiveTab Control Port and CH4

    /* =============================== PTZ Control  =================================== 
     Connect URL -> Correct Login -> PTZ -> 속도 빠르게 -> 화면 모드 Off -> PTZ Off
    ============================================================================================= */
    test('LiveTab Control PTZ', async ({ page }) => {
        login_ClickLoginBtn(page, url, correctID, correctPW);
        await page.waitForTimeout(3000);;

        canvasClickWith_X_Y(page, liveCanvas, obj_SmartView.ptz_X, obj_SmartView.ptz_Y);

        //For Testing
        await new Promise(() => { });

    })//End Of LiveTab Control PTZ
})//End Of Live Tab

/* =============================== Setting Tab Element =================================== 
Connect URL -> Correct Login -> Setting Tab
===================================================================================== */

test.describe('Setting Tab of Smart Web Viewer', () => {
    /* =============================== Setting -> System -> Status =================================== 
        Connect URL -> Correct Login -> Setting Tab -> Menu Stretch/Shrink
       ============================================================================================= */

    test('Menu Stretch and Shrink', async ({ page }) => {

        login_Move_Setting(page);

        await page.getByRole('button', { name: '메뉴 접기' }).waitFor({
            state: 'visible',
        })
        await page.getByRole('button', { name: '메뉴 접기', exact: true }).click();
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: '메뉴 펼치기', exact: true }).click();

        await page.waitForTimeout(1000);
        await page.evaluate(() =>
            document.getElementById('radioCollapse')?.click()
        );

        //For Testing
        //await new Promise(() => { });
    })

    test('Setting > System ', async ({ page }) => {
        /* =============================== Setting -> System -> Status =================================== 
        Connect URL -> Correct Login -> Setting Tab -> 
       ============================================================================================= */


        login_ClickLoginBtn(page, url, correctID, correctPW);

        await page.waitForTimeout(1000);
        await page.getByLabel('시스템').getByText('시스템 상태').click();

        await page.waitForTimeout(3000);
        await page.getByLabel('시스템').getByText('정보').click();

        await page.waitForTimeout(3000);
        await page.getByLabel('시스템').getByText('사용자').click();

        await page.waitForTimeout(3000);
        await page.getByText('디스플레이').click();

        await page.waitForTimeout(2000);
        await page.getByText('하드디스크').click();

        await page.waitForTimeout(2000);
        await page.getByLabel('시스템').getByText('업그레이드').click();

        await page.waitForTimeout(2000);
        await page.getByLabel('시스템').getByText('설정').click();

        //For Testing
        //await new Promise(() => { });
    })

    test('Setting > Tools', async ({ page }) => {

        login_Move_Setting(page);

        await page.waitForTimeout(1000);
        await page.getByRole('tab', { name: '장치' }).click();

        await page.waitForTimeout(1000);
        await page.getByLabel('장치').getByText('카메라').click();

        //Select Radio Button Camera 01
        await page.waitForTimeout(1000);
        await page.locator('id=devcam_3').check();

        //Select Radio Button Camera 01
        await page.waitForTimeout(1000);
        await page.locator('id=devcam_0').check();


        await page.waitForTimeout(1000);
        await page.getByLabel('장치').getByText('오디오').click();

        //Change The Audio ON/OFF
        await page.waitForTimeout(2000);
        await page.locator('id=audin_0').selectOption('1');
        await page.waitForTimeout(2000);
        await page.locator('id=audin_0').selectOption('0');

        //Save The Audio Setting
        await page.waitForTimeout(2000);
        await page.locator('id=save_btn').click();

        //Confirm Whether Save Success
        await page.waitForTimeout(2000);
        //await page.locator('id=msg_out').getByText('업데이트 성공.')
        await expect(page.locator('id=msg_out')).toHaveText('업데이트 성공.');

        //For Testing
        //await new Promise(() => { });
    })

    test('Setting > Event', async ({ page }) => {
        login_Move_Setting(page);

        //Move To The Event
        await page.locator('id=header_event').click();
        await page.waitForTimeout(1000);

        //Click Sensor Alarm
        await page.getByLabel('이벤트').getByText('센서감지').click();
        await page.waitForTimeout(1000);

        //Check All Alarm
        await page.locator('id=noti_all').click();
        await page.waitForTimeout(1000);

        //Screen Shot and Save before Confirm whether Save Success.
        await page.screenshot({path: './@Captured/SelectAllAlarm.png', fullPage:true});
        await page.waitForTimeout(1000);
        await page.locator('id=save_btn').click();
        await expect(page.locator('id=msg_out')).toHaveText('업데이트 성공.');

        //For Testing
        //await new Promise(() => { });

    })







})//End Of The Setting Tab