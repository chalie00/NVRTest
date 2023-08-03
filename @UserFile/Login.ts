
import { test, expect, Page } from '@playwright/test';

export async function login(page: Page, id: string, pw: string) {

    //Typing ID
    await page.locator('input[name = login_id]').fill(id);
  
    //Typing PW
    await page.locator('input[name = login_pwd]').fill(pw);

}

