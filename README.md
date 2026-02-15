# Validation Form Check Via Testing Selenium

A simple registration form project with frontend validation and Selenium WebDriver automation testing.

## Project Overview
This project includes:
- A registration form built with HTML, CSS, and JavaScript.
- Client-side validation for required fields and input formats.
- A Selenium (Java) automation script for negative and positive test cases.

## Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla)
- Java 17
- Selenium WebDriver (4.16.1)
- Maven

## Validation Covered
- First name required
- Last name required
- Valid email format check
- Phone number must be exactly 10 digits
- Password strength indicator (weak/medium/strong)
- Confirm password match check
- Terms and conditions acceptance required

## Project Structure
```text
.
├── index.html
├── style.css
├── script.js
├── automation/
└── SeleniumRegistrationTest/
    ├── pom.xml
    └── src/test/java/RegisterTest.java
```

## How to Run Form Locally
1. Clone the repository:
```bash
git clone https://github.com/yakash4184/Validation_Form_Check_Via_Testing_Selenium.git
cd Validation_Form_Check_Via_Testing_Selenium
```
2. Open `index.html` directly in browser.

## How to Run Selenium Test
1. Go to Selenium project folder:
```bash
cd SeleniumRegistrationTest
```
2. Make sure Java 17, Maven, Google Chrome, and matching ChromeDriver are installed.
3. Update this line in `src/test/java/RegisterTest.java` to your local `index.html` absolute file path:
```java
driver.get("file:///absolute/path/to/Validation_Form_Check_Via_Testing_Selenium/index.html");
```
4. Run the test:
```bash
mvn clean compile
mvn exec:java -Dexec.mainClass="RegisterTest"
```

## Test Scenario Included
- Negative test: submit with missing last name and verify validation behavior.
- Positive test: submit all valid fields and verify success message.

## Repository
GitHub: https://github.com/yakash4184/Validation_Form_Check_Via_Testing_Selenium
