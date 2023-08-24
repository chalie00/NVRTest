
import { test, expect, Page } from '@playwright/test';
import { url, correctID, correctPW, wrongID, wrongPW, logintxt, logouttxt, settingtxt, realTimeMenutxt, liveCanvas, obj_SmartView, obj_Ch4 } from "../@UserFile/Constants";


export async function login_OnlyFill_ID_PW(page: Page, url: string, id: string, pw: string) {
    //open Url
    await page.goto(url);

    //Wait Login Element
    await page.waitForSelector('#login_id');

    //Typing ID
    await page.locator('input[name = login_id]').fill(id);

    //Typing PW
    await page.locator('input[name = login_pwd]').fill(pw);

}

export async function login_ClickLoginBtn(page: Page, url: string, id: string, pw: string) {
    //open Url
    await page.goto(url);

    //Wait Login Element
    await page.waitForSelector('#login_id');

    //Typing ID
    await page.locator('input[name = login_id]').fill(id);

    //Typing PW
    await page.locator('input[name = login_pwd]').fill(pw);

    //Wait Networn Idle
    await page.waitForLoadState('networkidle');

    //Click 로그인 Button
    await page.getByRole('button', {name: logintxt}).click();

}

export async function login_Move_Setting(page: Page) {
        //open Url
        await page.goto(url);

        //Wait Login Element
        await page.waitForSelector('#login_id');
    
        //Typing ID
        await page.locator('input[name = login_id]').fill(correctID);
    
        //Typing PW
        await page.locator('input[name = login_pwd]').fill(correctPW);
    
        //Wait Networn Idle
        await page.waitForLoadState('networkidle');
    
        //Click 로그인 Button
        await page.getByRole('button', {name: logintxt}).click();

        //Wait for 설정 Menu
        await page.getByRole('button', { name: '설정' }).waitFor({
            state: 'visible',
        });
        
        //Click the Setting Button
        await page.getByRole('button', { name: settingtxt }).click();

        await page.waitForTimeout(1000);

}

export async function timeTable_On_Off(page: Page) {
    //TimeTable Enable
    await page.locator('#qtcanvas').click({
        position: {
            x: 170,
            y: 580
        }
    });

    //Wait For Smart Web Viewer
    await page.waitForTimeout(2000);

    //Time Table Disable
    await page.locator('#qtcanvas').click({
        position: {
            x: 153,
            y: 396
        }
    });

}

export async function leftMenuOn_Off(page: Page, canvas: string) {
    //Left Menu Off
    await page.locator('#qtcanvas').click({
        position: {
            x: 297,
            y: 340
        }
    });

    //Wait For Smart Web Viewer
    await page.waitForTimeout(500);

    //Left Menu On
    await page.locator('#qtcanvas').click({
        position: {
            x: 11,
            y: 340
        }
    });
}



export async function canvasClickWith_X_Y(page: Page, canvas: string, x: number, y: number) {
    await page.locator(canvas).click({
        position: {
            x: x,
            y: y
        }
    })
}

export async function canvas_Double_ClickWith_X_Y(page: Page, canvas: string, x: number, y: number) {
    await page.locator(canvas).dblclick({
        position: {
            x: x,
            y: y
        }
    })
}

export async function mouseHoverWith_X_Y(page: Page, canvas: string, x: number, y: number) {
    await page.locator(canvas).hover({
        position: {
            x: x,
            y: y
        }
    })
}

export async function keyPressWithCount(page: Page, keyStr: string, count: number) {
    for (let i = 0; i < count; i += 1) {
        await page.keyboard.press(keyStr);
    }
}

export async function changeTextField(page: Page, keyStr: string) {
    await page.waitForTimeout(1000);
    await page.keyboard.type(keyStr);
}

export async function countTR(page: Page, table_Lo: string ,delete_Lo: string ,delete_Btn: string, tr_Lo: string) {
    await page.waitForTimeout(1000);
    
    var countBeforeDelete = 0;
    var countAfterDelete = 0;
    await page.waitForTimeout(1000);
    var tableLO = (await checkText(page, table_Lo)).toString();
    await page.waitForTimeout(1000);
    var deleteLo = (await checkText(page, delete_Lo)).toString();
    await page.locator(tableLO).locator('tr').count().then(function(size){
        countBeforeDelete = size;
    });

    //Push a Delete BTN
    await page.locator(deleteLo).getByText(delete_Btn).click();
    await page.locator(tableLO).locator('tr').count().then(function(size) {
        countAfterDelete = size;
    })

    return [countBeforeDelete, countAfterDelete];
}

export async function checkText(page: Page, text: string) {
    var editedTxt = "";
    if(text.includes('id')) {
        editedTxt = text
    } else {
        editedTxt = '#' + text;
    }
   
    editedTxt.toString();
    console.log(editedTxt);
    return editedTxt;
}