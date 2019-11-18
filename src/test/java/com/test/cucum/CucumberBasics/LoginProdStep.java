package com.test.cucum.CucumberBasics;
import io.cucumber.java.en.And;

public class LoginProdStep {
	
	@And ("user validates the captcha image")
	public void user_validates_the_captcha_image()
	{
		System.out.println("Validate captcha");
	}
}
