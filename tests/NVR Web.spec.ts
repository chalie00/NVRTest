import { test, expect, Page } from '@playwright/test';
import { canvasClickWith_X_Y, canvas_Double_ClickWith_X_Y, changeTextField, keyPressWithCount, leftMenuOn_Off, login, mouseHoverWith_X_Y, timeTable_On_Off } from '../@UserFile/Login';

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


    added_View5_X: 775,
    added_View5_Y: 452,
    added_View6_X: 1120,
    added_View6_Y: 452,

    left_Menu_Off_X: 297,
    left_Menu_Off_Y: 340,
    left_Menu_On_X: 11,
    left_Menu_On_Y: 340,

    scr_Mode_X: 78,
    scr_Mode_Y: 628,
    scr_One_X: 1264,
    scr_One_Y: 77,
    scr_Four_X: 1262,
    scr_Four_Y: 111,

    ptz_X: 222,
    ptz_Y: 619,
    ptz_Spd_X: 1180,
    ptz_Spd_Y: 629,
    ptz_Spd_Fast_X: 1176,
    ptz_Spd_Fast_Y: 632

}

//CH4 Canvas Position Information
const obj_Ch4 = {
    camList_X: 110,
    camList_Y: 235,
    cam_add_Live_X: 136,
    cam_add_Live_Y: 245,
    cam_add_search_X: 136,
    cam_add_search_Y: 255,

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
        await page.locator('#submit').filter({ hasText: /濡쒓렇?씤/ }).click();

        //Wait for URL
        await page.waitForTimeout(2000);

        //Login Page ScreenShot
        await page.screenshot({ path: './@Captured/AfterLogin.png', fullPage: true });


        //click the Logout
        await page.getByRole('button', { name: '濡쒓렇?븘?썐' }).click();


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
        await page.waitForTimeout(2000);

        //click the Logout
        await page.getByRole('button', { name: '濡쒓렇?븘?썐' }).click();

        //Wait for URL
        await page.waitForTimeout(1000);
    })

    //Keep Browser
    //await new Promise(() => { });

})//End Of Login Test


/* =============================== Move Tab Sequenc =================================== 
    Connect URL -> Correct Login -> Move to [설정] -> Move to [실시간 영상]
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
        await page.waitForTimeout(5000);

        //Click the Setting
        await page.getByRole('button', { name: '설정' }).click();

        //Wait for URL
        await page.waitForTimeout(2000);

        //click the Real Time Stream
        await page.getByRole('button', { name: '실시간 영상' }).click();

        //Wait for URL
        await page.waitForTimeout(1000);

    })//End Of The Move Tab


    /* =============================== Smart Web Control Sequenc =================================== 
        Connect URL -> Correct Login -> Port Text Delete -> Port Set 81 -> CH4 Full Screen 
        -> CH4 Information On -> Full Screen Capture -> CH4 Normal Screen
    ============================================================================================= */
    test('Smart Web Viewer Control The Element', async ({ page }) => {
        //Login With Correct User Info
        login(page, url, correctID, correctPW);

        //Wait for URL
        await page.waitForTimeout(2000);

        //Push the Enter Key
        await page.locator('#login_pwd').press('Enter');

        //Wait for URL
        await page.waitForTimeout(5000);

        // //Web Port Typing
        // canvasClickWith_X_Y(page, smartCanvas, obj_SmartView.portX, obj_SmartView.portY);

        // //Wait for URL
        // await page.waitForTimeout(1000);

        // //Port Text Delete and Typing
        // keyPressWithCount(page, 'Backspace', 2);
        // changeTextField(page,'81');

        // //Wait for URL
        // await page.waitForTimeout(1000);

        // //Ch4 Double Click
        // canvas_Double_ClickWith_X_Y(page, smartCanvas, obj_Ch4.div4_Info_X ,obj_Ch4.div4_Info_Y);

        // //Wait for URL
        // await page.waitForTimeout(1000);

        // //Click CH4 UI [i]
        // canvasClickWith_X_Y(page, smartCanvas, obj_Ch4.div1_Info_X, obj_Ch4.div1_Info_Y);

        // //Wait for URL
        // await page.waitForTimeout(1000);

        // //CH4 FullScreen and Information On -> ScreenShot
        // await page.screenshot({ path: './@Captured/CH4_Full_Info.png', fullPage: true });

        // //Ch4 Double Click
        // canvas_Double_ClickWith_X_Y(page, smartCanvas, obj_Ch4.div4_Info_X ,obj_Ch4.div4_Info_Y);

        /* =============================== Smart Web Control Sequenc =================================== 
            CH4 라이브 추가 -> CH4 검색/녹화 재생 추가 -> CH4 라이브 제거 -> CH4 검색/녹화 재생 제거 -> 좌측 Menu On/Off
            -> 화면 모드 On/Off -> 화면 모드 On -> 1화면 -> 4화면 -> PTZ -> 속도 빠르게 -> 화면 모드 Off -> PTZ Off
        ============================================================================================= */
        // //Wait for URL
        // await page.waitForTimeout(1000);

        //Click The CH4 from Camera List
        // canvasClickWith_X_Y(page, smartCanvas, obj_Ch4.camList_X, obj_Ch4.camList_Y);

        // //Wait for URL
        // await page.waitForTimeout(1000);

        // //Add CH4 Live
        // canvasClickWith_X_Y(page, smartCanvas, obj_Ch4.cam_add_Live_X, obj_Ch4.cam_add_Live_Y);

        // //Wait for URL
        // await page.waitForTimeout(2000);

        // //Click The CH4 from Camera List
        // canvasClickWith_X_Y(page, smartCanvas, obj_Ch4.camList_X, obj_Ch4.camList_Y);

        // //Wait for URL
        // await page.waitForTimeout(1000);

        // //Add CH4 Search/Recording
        // canvasClickWith_X_Y(page, smartCanvas, obj_Ch4.cam_add_search_X, obj_Ch4.cam_add_search_Y);

        // //Wait for URL
        // await page.waitForTimeout(1000);

        // //Delete CH4 Live
        // //One more click because view5 is not highlighted
        // canvasClickWith_X_Y(page, smartCanvas, obj_SmartView.added_View5_X, obj_SmartView.added_View5_Y);
        // await page.waitForTimeout(2000);
        // canvasClickWith_X_Y(page, smartCanvas, obj_SmartView.added_View5_X, obj_SmartView.added_View5_Y);

        // //Wait for URL
        // await page.waitForTimeout(1000);

        // //Delete CH4 Search/Recording
        // mouseHoverWith_X_Y(page, smartCanvas, obj_SmartView.added_View6_X, obj_SmartView.added_View6_Y);
        // await page.waitForTimeout(1000);
        // canvasClickWith_X_Y(page, smartCanvas, obj_SmartView.added_View6_X, obj_SmartView.added_View6_Y);

        //Wait for URL
        await page.waitForTimeout(1000);

        //Left Menu On/Off
        leftMenuOn_Off(page, smartCanvas);

        //Wait for URL
        await page.waitForTimeout(1000);


        //Keep Browser
        //await new Promise(() => { });

    })//End Of The Smart Web Viewer Control The Element
})