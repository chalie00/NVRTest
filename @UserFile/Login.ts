
import { test, expect, Page } from '@playwright/test';

export async function login(page: Page, url: string, id: string, pw: string) {
    //open Url
    //await page.goto(url);
    await page.goto(url, { waitUntil: 'networkidle' });

    //Typing ID
    await page.locator('input[name = login_id]').fill(id);

    //Typing PW
    await page.locator('input[name = login_pwd]').fill(pw);

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