package com.stepDefinition;

import java.time.Duration;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginSteps {
	
	

	WebDriver driver;
	
	
	  @Given("user is on login page") public void user_is_on_login_page() {
	  System.out.println("== Step1: User is on login Page ==");
	  WebDriverManager.chromedriver().setup(); driver = new ChromeDriver();
	  driver.get(
	  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
	  driver.manage().window().maximize();
	  driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	 
		
	}

	  @When("^user enters (.*) and (.*)$")
	    public void user_enters_something_and_something(String username, String password) {
		System.out.println("== Step2: User enter username and password ==");
		driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(password);
	}

	@When("Click on login button")
	public void click_on_login_button() {
		System.out.println("== Step3: User click on login button ==");
		driver.findElement(By.xpath("//button[@type='submit']")).click();

	}

	@Then("user should navigates to home page")
	public void user_should_navigates_to_home_page() {
		System.out.println("== Step4: User lands on home page ==");
		Assert.assertTrue(driver.findElement(By.xpath("//h6[normalize-space()='Dashboard']")).isDisplayed());
		driver.close();
		}
	
	@When("user enters credentails using DataTable")
	public void user_enters_credentails_using_DataTable(DataTable dataTable) {
		System.out.println("== Step2: User enter username and password ==");
		List<List<String>> data = dataTable.cells();
		driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(data.get(0).get(0));
		
		
		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(data.get(0).get(1));
	
	}
}