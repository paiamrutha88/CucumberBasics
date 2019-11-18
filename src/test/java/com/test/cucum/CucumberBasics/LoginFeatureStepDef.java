package com.test.cucum.CucumberBasics;
import java.util.List;
import java.util.Map;


import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
public class LoginFeatureStepDef {
	@Given(value = "^user navigates to Facebook website$")
	public void user_navigates_to_Facebook_website()
	{
	    System.out.println("@Given -- user_navigates_to_Facebook_website");
	 
	}

	@When("^user validates homepage title$")
	public void user_validates_homepage_title()
	{
	    System.out.println("@When -- user_validates_homepage_title");
	}

	@Then("^user enters \"([^\"]*)\" username$") 
	public void user_enters_username(String username)
	{
	  System.out.println("@Then -- user_enters_username" +username);
	}

	@And ("^user enters \"([^\"]*)\" password$")
	public void user_enters_password(String password)
	{
	    System.out.println("@And -- user_enters_password " +password);
	}

	@Then("^user \"([^\"]*)\" successfully logged in$")
	public void user_should_be_successfully_logged_in( String validateLogin)
	{
	    System.out.println("@Then -- user_should_be_successfully_logged_in" +validateLogin);
	}
	
	@Then("user select age category")
	public void user_select_age_category(DataTable table)
	{
		List<Map<String,String>>data = table.asMaps(String.class, String.class);
	  System.out.println("select age" +data.get(0).get("Age") + " Location : " +data.get(0).get("location"));
	 
	}
	
	
	@Before("@regression")
	public void setUp()
	{
		System.out.println("Launch Browser");
	}
	@After
	public void tearDown()
	{
		System.out.println("Close browser");
	}
}
