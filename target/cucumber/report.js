$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/test/cucum/CucumberBasics/loginToProd.feature");
formatter.feature({
  "name": "Login To Production",
  "description": "  In order to perform successful login to Production\n  As a user\n  I want to enter correct username and password",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigates to Facebook website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeatureStepDef.user_navigates_to_Facebook_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginFeatureStepDef.user_validates_homepage_title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify Login to Facebook",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user enters \"valid \" username",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDef.user_enters_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"valid\" password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeatureStepDef.user_enters_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the captcha image",
  "keyword": "And "
});
formatter.match({
  "location": "LoginProdStep.user_validates_the_captcha_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"shouldbe\" successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDef.user_should_be_successfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigates to Facebook website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeatureStepDef.user_navigates_to_Facebook_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginFeatureStepDef.user_validates_homepage_title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify Login to Facebook",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user enters \"invalid \" username",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDef.user_enters_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"invalid\" password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeatureStepDef.user_enters_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the captcha image",
  "keyword": "And "
});
formatter.match({
  "location": "LoginProdStep.user_validates_the_captcha_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"shouldNotbe\" successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDef.user_should_be_successfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});