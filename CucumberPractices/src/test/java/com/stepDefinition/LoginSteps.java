package com.stepDefinition;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

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

	@When("user enters username and password")
	public void user_enters_username_and_password() {
		System.out.println("== Step2: User enter username and password ==");
		driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("Admin");
		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("admin123");
	}

	@When("Click on login button")
	public void click_on_login_button() {
		System.out.println("== Step3: User click on login button ==");
		driver.findElement(By.xpath("//button[@type='submit']")).click();

	}

	@Then("user should navigates to home page")
	public void user_should_navigates_to_home_page() {
		System.out.println("== Step4: User lands on home page ==");
		driver.close();

}
}