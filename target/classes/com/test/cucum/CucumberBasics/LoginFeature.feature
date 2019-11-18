@regression
Feature: Login
  
  In order to perform successful login
  As a user
  I want to enter correct username and password

  Scenario Outline: verify Login to Facebook
    Given user navigates to Facebook website
    When user validates homepage title
    Then user enters "<username> " username
    And user enters "<password>" password
    And user select age category
      | Age      | location |
      | below 18 | India    |
      | above 18 | UK       |
    Then user "<logintype>" successfully logged in

    Examples: 
      | username | password | logintype   |
      | valid    | valid    | shouldbe    |
      | invalid  | invalid  | shouldnotbe |
