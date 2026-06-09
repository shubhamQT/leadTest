import { test } from '../support/fixtures';

test('Show validation error when Last Name is blank', { tag: ["@functional","@regression","@lead","@P1","@create-lead-missing-lastname"] }, async ({ page, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter Company (mandatory)', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Verify validation error for Last Name', async () => {
    await leadNewPage.expectLastNameVisible();
  });
});

test('Show validation error when Company is blank', { tag: ["@functional","@regression","@lead","@P1","@create-lead-missing-company"] }, async ({ page, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter Last Name (mandatory)', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Verify validation error for Company', async () => {
    await leadNewPage.expectCompanyVisible();
  });
});

test("Verify Lead Status defaults to 'Open - Not Contacted' after creation", { tag: ["@functional","@regression","@lead","@P1","@create-lead-default-status"] }, async ({ page, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter Last Name (mandatory)', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step('Fill — Enter Company (mandatory)', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step("Assert text — Verify Lead Status is 'Open - Not Contacted'", async () => {
    await leadNewPage.expectLeadStatusText('Open - Not Contacted');
  });
});

test('E2E: Create Lead from navigation to record verification', { tag: ["@e2e","@regression","@lead","@P0","@e2e-create-lead-full-journey"] }, async ({ page, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter First Name', async () => {
    await leadNewPage.fillFirstName('John');
  });
  await test.step('Fill — Enter Last Name', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step('Fill — Enter Company', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step('Fill — Enter Phone', async () => {
    await leadNewPage.fillPhone('9989876789');
  });
  await test.step('Fill — Enter Email', async () => {
    await leadNewPage.fillEmail('john.smith@example.com');
  });
  await test.step('Select — Select Lead Source', async () => {
    await leadNewPage.clickLeadSource();

  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Verify user is redirected to the new Lead record page', async () => {
    await leadNewPage.expectNewLeadVisible();
  });
  await test.step("Assert text — Verify Lead Status is 'Open - Not Contacted'", async () => {
    await leadNewPage.expectLeadStatusText('Open - Not Contacted');
  });
});

test('E2E: Create Lead with only mandatory fields', { tag: ["@e2e","@regression","@lead","@P1","@e2e-create-lead-minimal-fields"] }, async ({ page, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter Last Name', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step('Fill — Enter Company', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Verify user is redirected to the new Lead record page', async () => {
    await leadNewPage.expectNewLeadVisible();
  });
  await test.step("Assert text — Verify Lead Status is 'Open - Not Contacted'", async () => {
    await leadNewPage.expectLeadStatusText('Open - Not Contacted');
  });
});

test('E2E: Attempt to create Lead with missing mandatory fields and verify errors', { tag: ["@e2e","@regression","@lead","@P1","@e2e-lead-validation-errors"] }, async ({ page, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step("Click — Click on 'Save' button without entering any fields", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step('Assert visible — Verify validation error for Last Name', async () => {
    await leadNewPage.expectLastNameVisible();
  });
  await test.step('Assert visible — Verify validation error for Company', async () => {
    await leadNewPage.expectCompanyVisible();
  });
});

test('E2E: Verify Lead Status is set correctly after creation', { tag: ["@e2e","@regression","@lead","@P1","@e2e-lead-status-after-save"] }, async ({ page, leadNewPage }) => {
  await test.step('Open — Navigate to Salesforce Leads tab', async () => {
    await page.goto('/lightning/o/Lead/list');
  });
  await test.step("Click — Click on 'New' button", async () => {
    await leadNewPage.clickNew();
  });
  await test.step('Fill — Enter Last Name', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step('Fill — Enter Company', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step("Click — Click on 'Save' button", async () => {
    await leadNewPage.clickSaveEdit();
  });
  await test.step("Assert text — Verify Lead Status is 'Open - Not Contacted'", async () => {
    await leadNewPage.expectLeadStatusText('Open - Not Contacted');
  });
});
