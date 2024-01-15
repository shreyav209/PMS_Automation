import { test, expect } from '@playwright/test';
import { setFlagsFromString } from 'v8';

test('HR Flow', async ({ page }) => {
  // Go to URL
  await page.goto('https://pms.yodaplus.net/login');
  await page.getByLabel('Enter your Email here *').click();

  // Login : Enter Email and password
  await page.getByLabel('Enter your Email here *').fill('srushti@yodaplus.com');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('Test123@');
  await page.getByRole('button', { name: 'LogIn' }).click();

  //Switch the role
  await page.getByLabel('Click to Switch Your Role').click();
  await page.getByRole('menuitem', { name: 'HR' }).click();
  await page.waitForTimeout(2000);

  //Add employee
  await page.getByRole('button', { name: 'Click to see pages' }).click();
  await page.getByRole('menuitem', { name: 'Employee Information' }).click();
  await page.getByRole('button', { name: 'Add Employee' }).click();
  await page.getByLabel('Employee Code :').click();
  await page.getByLabel('Employee Code :').fill('10056');
  await page.getByLabel('First name :').click();
  await page.getByLabel('First name :').fill('Divya');
  await page.getByLabel('Last name :').click();
  await page.getByLabel('Last name :').fill('Yadav');
  await page.getByLabel('Role :').click();
  await page.getByRole('option', { name: 'Female' }).click();
  await page.getByLabel('Designation :').click();
  await page.getByLabel('Designation :').fill('BA');
  await page.getByLabel('Date Of Birth').click();
  await page.getByLabel('Date Of Birth').fill('1998-08-08');
  await page.getByLabel('Date Of Joining').click();
  await page.getByLabel('Date Of Joining').fill('2023-09-20');
  await page.getByLabel('Email :').click();
  await page.getByLabel('Email :').fill('divya56@yodaplus.com');
  await page.getByLabel('Password :').click();
  await page.getByLabel('Password :').fill('Divya123@');
  await page.getByRole('button', { name: 'Add' }).click();
  console.log('*****************New employee added*****************')

  // //Create team
  await page.waitForTimeout(2000);
  await page.locator("#dashboardMenu").click()
  await page.getByRole('menuitem', { name: 'Create team' }).click();
  await page.getByRole('button', { name: 'Create Team' }).click();
  await page.locator('#projectname').click();
  await page.locator('#projectname').fill('QA Team');
  await page.locator('#manager').click();
  await page.getByRole('option', { name: 'Samir Anvekar(0013)' }).click();
  await page.getByLabel('Samir Anvekar(0013)').click();
  await page.getByRole('option', { name: 'Samir Anvekar(0013)' }).click();
  await page.locator("#employee").click();
  await page.getByRole('option', { name: 'Shrutika Vethekar(0079)' }).click();
  await page.locator("#employee").click();
  await page.getByRole('option', { name: 'Shreya Vethekar(0045)' }).click();
  // await page.locator("#employee").click();
  // await page.getByRole('option', { name: 'Neha Verma(10054)' }).click();
  // await page.getByRole('option', { name: 'Brijesh Savaliya(0080)' }).click();
  // await page.locator("#employee").click();
  // await page.getByRole('option', { name: 'Sanjay V(0081)' }).click();
  await page.getByRole('button', { name: 'Create Team' }).click();
  console.log('*****************Team created*****************')

  // //Add form
  await page.waitForTimeout(2000);
  await page.locator("#dashboardMenu").click()
  await page.getByRole('menuitem', { name: 'Created Forms' }).click();
  await page.getByRole('button', { name: 'Click to see pages' }).click();
  await page.getByRole('menuitem', { name: 'Add Form' }).click();
  await page.getByPlaceholder('Form Heading').click();
  await page.getByPlaceholder('Form Heading').fill('QA Team Performance Form - January 2024');
  await page.getByPlaceholder('Form Description').click();
  await page.getByPlaceholder('Form Description').fill('Performance appraisal - 2024');
  await page.locator('textarea[name="section_name"]').click();
  //await page.locator('.MuiBox-root > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root').first().click();
  await page.locator('textarea[name="section_name"]').fill('Job knowledge and application skills');
  // await page.locator('textarea[name="category_name"]').click();
  // await page.locator('textarea[name="category_name"]').fill('Question');
  // await page.getByText('Question', { exact: true }).fill('One line Question');
  // await page.getByText('One line Question').click();
  // await page.getByText('One line Question').fill('Short answer');
  // await page.locator('textarea[name="section_name"]').fill('Techincal Skills');
  await page.locator('textarea[name="category_name"]').click();
  await page.locator('textarea[name="category_name"]').fill('Knowledge and Skills');
  await page.locator('#question-0').click();
  await page.locator('#question-0').fill('Job Knowledge and application skills');
  await page.getByRole('button', { name: 'Add Question' }).click();
  await page.locator('#question-1').click();
  await page.locator('#question-1').fill('Follow Standards');
  await page.waitForTimeout(1500);
  await page.getByLabel('Manager DeadLine').click();
  await page.getByLabel('Manager DeadLine').fill('2024-01-03');
  await page.getByRole('button', { name: 'Create Form' }).click({timeout:5000});
  console.log('*****************Form created*****************')

  //Upload created form to the team
  //await page.waitForTimeout(3000);  
  await page.waitForURL("https://pms.yodaplus.net/dashboard");
  await page.waitForSelector('#dashboardMenu', { visible: true});
  await page.locator("#dashboardMenu").click({timeout:2000});
  // await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'Created Forms'}).click();
  await page.getByPlaceholder('Search…').click();
  await page.getByPlaceholder('Search…').fill('QA Team Performance Form - January 2024');
  await page.locator('div').filter({ hasText: /^0Filters$/ }).click();
  //await page.getByRole('button', { name: 'Upload' }).click({timeout:3000});
  await page.locator("//button[contains(@id,'upload_form_13')]").click({timeout:3000});
  await page.getByRole('searchbox', { name: 'Search…' }).click();
  await page.getByRole('searchbox', { name: 'Search…' }).fill('QA Team');
  await page.locator('#team_send_13').click();
  await page.locator(2000)
  //await page.getByRole('button', { name: 'Select' }).click();
  await page.getByRole('button', { name: 'Upload Form' }).click();
  await page.locator(3000)
  //await page.getByRole('searchbox', { name: 'Search…' }).click();
  // await page.locator('#team_send_43').click();
  // await page.getByRole('button', { name: 'Select' }).click();
  // await page.getByRole('searchbox', { name: 'Search…' }).click();
  // await page.locator(3000)
  // await page.getByRole('button', { name: 'Upload Form' }).click();
  // await page.locator(3000)
  console.log('*****************Form uploaded to team*****************')
});

test('Employee Flow', async ({page})=>
{
  // Go to URL
  await page.goto('https://pms.yodaplus.net/login');
  await page.getByLabel('Enter your Email here *').click();

  // Login : Enter Email and password
  await page.getByLabel('Enter your Email here *').fill('shrutika@yodaplus.com');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('Shrutika@123');
  await page.getByRole('button', { name: 'LogIn' }).click();
  await page.waitForTimeout(2000);


  //Form
  const grid = await page.locator("//div[contains(@id,'form_card')]")
  //console.log(grid)
  const countofForm = await grid.count();
  //console.log('count:',countofForm)
  for(let i =0 ;i < countofForm; ++i) 
  {
    // form name
    const forms = await grid.nth(i).locator("//h6[contains(@id,'form_name')]")
    const formName = await forms.textContent();
    if(formName == 'QA Team Performance Form - January 2024')
    {
      await grid.nth(i).locator("//button[text()='Go to Form']").click();
      await page.locator("#section_1").click();
      await page.locator('#employee_response_section_1_category__1_question_1').click();
      await page.locator('#employee_response_section_1_category__1_question_1').fill('Functional test,Automation Testing and Performance Testing');
      await page.locator("#employee_rating_section_1_category__1_question_1").filter({has : page.getByLabel('3 Stars')}).click()
      await page.waitForTimeout(2000);
      await page.locator('#employee_response_section_1_category__1_question_2').fill('1.Capture the bugs in JIRA\n2.Weekly report\n3.Daily standup calls');
      await page.locator("#employee_rating_section_1_category__1_question_2").filter({has : page.getByLabel('3 Stars')}).click()
      await page.locator("#save_button").click();
      await page.locator(2000);
      console.log('*****************SAVE*****************')
    }
  }
  await page.waitForTimeout(2000)

  //Submit the response
  for(let j=0 ;j < countofForm; ++j) 
  {
    // form name
    const forms = await grid.nth(j).locator("//h6[contains(@id,'form_name')]")
    const formName = await forms.textContent();
    if(formName == 'QA Team Performance Form - January 2024')
    {
      await grid.nth(j).locator("//button[text()='Go to Form']").click();
      await page.locator("#mark_for_submission_button").click();
      console.log('*************SUBMITTED*****************')
    }
  }
await page.waitForTimeout(2000)

});

