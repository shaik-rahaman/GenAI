// Filename: createLead.spec.js
// Description: Automates lead creation with mandatory fields only

import { test, expect } from '@playwright/test';

test('Create Lead with mandatory fields only', async ({ page }) => {
  // Step 1: Go to CRM login page
  await page.goto('https://your-crm-url.com/login');

  // Step 2: Login
  await page.fill('#username', 'your_username');
  await page.fill('#password', 'your_password');
  await page.click('#Login');

  // Wait for navigation to dashboard
  await page.waitForLoadState('networkidle');

  // Step 3: Navigate to Leads page
  await page.click('text=Leads'); // Use menu or nav button
  await page.waitForSelector('text=New Lead');

  // Step 4: Click "New Lead" button
  await page.click('text=New Lead');
  await page.waitForSelector('#leadForm');

  // Step 5: Fill in only mandatory fields
  // Update selectors to match your actual CRM DOM elements
  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.fill('input[name="company"]', 'JD Solutions');
  await page.fill('input[name="email"]', 'john.doe@example.com');

  // Step 6: Save lead
  await page.click('button:has-text("Save")');

  // Step 7: Verify lead creation success
  await expect(page.locator('text=Lead created successfully')).toBeVisible();

  console.log('✅ Lead created successfully with mandatory fields.');
});
