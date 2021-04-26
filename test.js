const { Builder, By, Key, until } = require("selenium-webdriver")

async function logInTest(email, password) {
  let driver = await new Builder().forBrowser("safari").build()
  try {
    // Navigate to Url
    await driver.get("https://al.uat.attributionledger.com/")

    await driver.sleep(3000)

    // Click on Log in button
    await driver
      .findElements(
        By.className(
          "MuiButtonBase-root-153 MuiButton-root-559 jss137 MuiButton-text-561"
        )
      )
      .then((found) => {
        console.log("Elements found? %s", found[0])
        found[0].click()
      })

    await driver.sleep(3000)

    // Print the new url it is navigated to
    await driver
      .getCurrentUrl()
      .then((currentUrl) => console.log("currentUrl: ", currentUrl))

    // Wait for page to load
    await driver.sleep(3000)

    // Find email input and send keys
    await driver.findElement(By.id("1-email")).click()
    await driver.findElement(By.id("1-email")).sendKeys(email)
    await driver.findElement(By.name("password")).sendKeys(password)

    await driver.sleep(3000)

    // Click Submit button
    await driver.findElement(By.css(".auth0-label-submit")).click()

    await driver.sleep(5000)

  } finally {
    //this will close the browser
    driver.quit();
  }
}

logInTest("cheese@cheese.com", "Ssdfljh#123")
