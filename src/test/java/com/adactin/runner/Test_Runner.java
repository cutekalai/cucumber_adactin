package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.cucumber.Adactinbase;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="src\\test\\java\\com\\adactinfeature\\Adactin.feature",
glue="com.sd",

monochrome=true,
strict=true,

plugin= {"html:Cucumber_report/report" ,
"json:Cucumber_report/reports.json",
//"pretty"
"com.cucumber.listener.ExtentCucumberFormatter:Cucumber_report/Extent_report.html"
}
		)


public class Test_Runner {
	public static WebDriver driver;

	@BeforeClass
	public static  void set_up() {
		driver=Adactinbase.browser_configuration("chrome");

	}

	@AfterClass
	public static  void tear_down() {

		driver.close();

	}


}
