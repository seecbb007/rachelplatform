const puppeteer = require("puppeteer");

async function downloadFile() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the login page
  await page.goto("https://www.nmsigroup.com/#login");

  // Enter username and password
  await page.type('input[name="username"]', "eris@restatehomes.com");
  // Replace '#username-selector' with the actual selector
  await page.type('input[name="password"]', "eris117"); // Replace '#password-selector' with the actual selector

  // Click the login button
  await page.click('button[name="loginSubmit]'); // Replace '#login-button-selector' with the actual selector

  // Wait for navigation after login
  await page.waitForNavigation();

  // Navigate to the rates page
  await page.goto("https://www.nmsigroup.com/rates");

  // Find the link to the latest Prime Rate Sheet PDF and download it
  // This assumes there is a direct link to the PDF
  const pdfUrl = await page.evaluate(() => {
    const link = document.querySelector("a.download-link"); // Replace 'a.download-link' with the actual selector for the PDF link
    return link.href;
  });

  // Use page.setRequestInterception to download the PDF
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (request.resourceType() === "document") {
      request.continue();
    } else {
      request.abort();
    }
  });

  // Download the PDF
  const pdfBuffer = await page.goto(pdfUrl, { waitUntil: "networkidle2" });
  await pdfBuffer.buffer().then((buffer) => {
    require("fs").writeFileSync(
      "/path/to/download/folder/filename.pdf",
      buffer
    );
  });

  await browser.close();
}

downloadFile();
