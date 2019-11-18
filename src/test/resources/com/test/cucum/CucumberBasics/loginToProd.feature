@sanity
Feature: Login To Production
  
  In order to perform successful login to Production
  As a user
  I want to enter correct username and password

  Background: 
    Given user navigates to Facebook website
    When user validates homepage title

  Scenario: verify Login to Facebook
    Then user enters "valid " username
    And user enters "valid" password
    And user validates the captcha image
    Then user "shouldbe" successfully logged in

  Scenario: verify Login to Facebook
    Then user enters "invalid " username
    And user enters "invalid" password
    And user validates the captcha image
    Then user "shouldNotbe" successfully logged in
