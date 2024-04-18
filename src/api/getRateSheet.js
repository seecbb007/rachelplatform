const puppeteer = require("puppeteer");
const cron = require("node-cron");

async function loginAndGetRates() {
  const browser = await puppeteer.launch({ headless: true }); // headless: false if you want to see the browser
  const page = await browser.newPage();

  // Navigate to the login page
  await page.goto("https://www.nmsigroup.com/#login", {
    waitUntil: "networkidle2",
  });

  // Enter login credentials and submit
  await page.type('input[name="email"]', "eris@restatehomes.com"); // replace with actual username
  await page.type('input[name="password"]', "eris117"); // replace with actual password
  await page.click('button[type="submit"]'); // adjust if the selector is different
  await page.waitForNavigation();

  // Navigate to the rates page
  await page.goto("https://www.nmsigroup.com/rates", {
    waitUntil: "networkidle2",
  });

  // Here you'd extract the prime rate sheet, example:
  const primeRateSheet = await page.evaluate(() => {
    // Replace the selector with the actual selector of the rate sheet
    return document.querySelector("selector-for-the-rate-sheet").innerText;
  });

  console.log(primeRateSheet);

  await browser.close();
}

// Schedule the task to run every day at 6 AM PST
cron.schedule(
  "0 6 * * *",
  function () {
    console.log("Running the task to fetch the prime rate sheet");
    loginAndGetRates();
  },
  {
    scheduled: true,
    timezone: "America/Los_Angeles",
  }
);
