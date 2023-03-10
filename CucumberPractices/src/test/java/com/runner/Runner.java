package com.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
				features="src\\test\\resources\\Features",
				glue = "com.stepDefinition",
				monochrome = true,
				//dryRun=true,
				tags= {"@All"},
				plugin = {"pretty","html:Reports\\HTMLreport"}
				
					
						)
public class Runner {

}
