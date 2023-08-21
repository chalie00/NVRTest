import { test, expect, Page } from '@playwright/test';

//Variable of Url, ID
export let url = 'http://192.168.22.223/cgi-bin/login.cgi';
export let correctID = 'admin';
export let correctPW = '11qqaazz..';

export let wrongID: string = 'administrator';
export let wrongPW: string = '..zzaaqq11';

//Element Name
export let logintxt = '로그인';
export let logouttxt = '로그 아웃';
export let settingtxt = '설정';
export let realTimeMenutxt = '실시간 영상';
export let liveCanvas = '#qtcanvas';



//Smart Web Viewer Canvas Position Information
export const obj_SmartView = {
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
export const obj_Ch4 = {
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