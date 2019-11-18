package com.test.cucum.runner;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


//import com.cucumber.listener.Reporter;
import com.vimalselvam.cucumber.listener.Reporter;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import com.vimalselvam.cucumber.listener.ExtentCucumberFormatter;


@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources/com/test/cucum/CucumberBasics"},
glue= {"com/test/cucum/CucumberBasics"},
monochrome=true,
tags= {"@sanity"},
plugin= {"pretty","html:target/cucumber","com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:output/report.html"}

)
public class RunCukes  {
	
	@BeforeClass
	
	public static void setup() {
    
		System.out.println("set up");
    }
	
	
	@AfterClass
	public static void teardown() 
	{
	Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
	Reporter.setSystemInfo("user", System.getProperty("user.name"));
	Reporter.setSystemInfo("os", "Windows");
	Reporter.setTestRunnerOutput("Sample test runner output message");
	}

}
