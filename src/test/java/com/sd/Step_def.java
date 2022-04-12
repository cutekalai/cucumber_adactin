package com.sd;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.adactin.runner.Test_Runner;
import com.cucumber.Adactinbase;
import com.cucumber.Adactinwithpomanager;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_def  extends Adactinbase{
	
	
	public static WebDriver driver=Test_Runner.driver;
	
	public static Adactinwithpomanager pom=new Adactinwithpomanager(driver);
	
	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
		
		String url = getproperties("C:\\Users\\Vignesh\\eclipse-workspace\\cucumber_adactin\\src\\test\\java\\com\\testdataadactin\\Configuration.properties", 
				"url");
		getUrl(url);
		
	//getUrl("https://adactinhotelapp.com/index.php");
	   
	}

	
	@When("^user Enter The \"([^\"]*)\" in Username Textbox$")
	public void user_Enter_The_in_Username_Textbox(String username) throws Throwable {
		 inputvalueelement(pom.get_instance_ahp().getUsername(), getdata
					("C:\\Users\\Vignesh\\eclipse-workspace\\Maven_Project\\Testcases adactin.xlsx", 0, 2, 5));
	}
	   
	@When("^user Enter The \"([^\"]*)\" in Password Textbox$")
	public void user_Enter_The_in_Password_Textbox(String password) throws Throwable {
	   
	   inputvalueelement(pom.get_instance_ahp().getPassword(),getdata("C:\\Users\\Vignesh\\eclipse-workspace\\Maven_Project\\Testcases adactin.xlsx", 0, 3, 5));
	}

	
	@Then("^user Click On The Login Button And It Navigate To The Hotel Search Page$")
	public void user_Click_On_The_Login_Button_And_It_Navigate_To_The_Hotel_Search_Page() throws Throwable {
	    clickonElement(pom.get_instance_ahp().getLogin());
	}


	@When("^user Select The Hotel Location \"([^\"]*)\" In Dropdown Box$")
	public void user_Select_The_Hotel_Location_In_Dropdown_Box(String Location) throws Throwable {
		dropdown("byindex", pom.get_instance_nextpage().getLocation(), Location);
	}

	@When("^user Select The Hotelname \"([^\"]*)\" In Dropdown Box$")
	public void user_Select_The_Hotelname_In_Dropdown_Box(String hotelname) throws Throwable {
   
		dropdown("bytext", pom.get_instance_nextpage().getHotel(), hotelname);
	}


@When("^user Select The RoomtypeIn  Dropdown Box$")
public void user_Select_The_RoomtypeIn_Dropdown_Box() throws Throwable {
		dropdown("byvalue", pom.get_instance_nextpage().getRoomtype(), "Double");
	}


@When("^user Select The RoomNo  In Dropdown Box$")
public void user_Select_The_RoomNo_In_Dropdown_Box() throws Throwable {
		dropdown("byindex", pom.get_instance_nextpage().getNoofroom(), "2");
	}

	@When("^user Enter The Hotel In Date$")
	public void user_Enter_The_Hotel_In_Date() throws Throwable {
		pom.get_instance_nextpage().getCheckin().clear();
		inputvalueelement(pom.get_instance_nextpage().getCheckin(), "19/02/2022");
	}

	@When("^user Enter The Hotel Out Date$")
	public void user_Enter_The_Hotel_Out_Date() throws Throwable {
		pom.get_instance_nextpage().getCheckout().clear();
		inputvalueelement(pom.get_instance_nextpage().getCheckout(), "21/02/2022");
	}
	@When("^user Select The Adult per Room In Dropdown Box$")
	public void user_Select_The_Adult_per_Room_In_Dropdown_Box() throws Throwable {
	dropdown("byindex", pom.get_instance_nextpage().getAdult(), "2");
	}

	
	@When("^user Select The Child per Room \"([^\"]*)\"  In Dropdown Box$")
	public void user_Select_The_Child_per_Room_In_Dropdown_Box(String child) throws Throwable {
		
		dropdown("byvalue", pom.get_instance_nextpage().getChildroom(), child);
	}

	@Then("^user Click On The Search Button And It Navigate To The Hotel Select Page$")
	public void user_Click_On_The_Search_Button_And_It_Navigate_To_The_Hotel_Select_Page() throws Throwable {
		clickonElement(pom.get_instance_nextpage().getSubmit());
	}

	@When("^user Click On The Hotel Radio Button$")
	public void user_Click_On_The_Hotel_Radio_Button() throws Throwable {
	   
	clickonElement(pom.get_instance_nextpage().getSelectbutton());
		}

	@Then("^user Click On The Continue Button And It Navigate To Hotel Booking Page$")
	public void user_Click_On_The_Continue_Button_And_It_Navigate_To_Hotel_Booking_Page() throws Throwable {
		clickonElement(pom.get_instance_nextpage().getContinuebutton());
	}

	@When("^user Enter The Firstname In Firstname Textbox$")
	public void user_Enter_The_Firstname_In_Firstname_Textbox() throws Throwable {
		inputvalueelement(pom.get_instance_nextpage2().getFirstname(), "kalai");
	}

	@When("^user Enter The Lastname In Lastname Textbox$")
	public void user_Enter_The_Lastname_In_Lastname_Textbox() throws Throwable {
		inputvalueelement(pom.get_instance_nextpage2().getLastname(), "selvi");
	}

	@When("^user Enter The Address In Address Textbox$")
	public void user_Enter_The_Address_In_Address_Textbox() throws Throwable {
	   
		inputvalueelement(pom.get_instance_nextpage2().getAddress(), "virudhunagar");
	}

	@When("^user Enter The Creditcard No In Creditcard Textbox$")
	public void user_Enter_The_Creditcard_No_In_Creditcard_Textbox() throws Throwable {
	   
		inputvalueelement(pom.get_instance_nextpage2().getCcnum(), "7689098760123456");
	}

	@When("^user Select The CreditCardType In Dropdown Box$")
	public void user_Select_The_CreditCardType_In_Dropdown_Box() throws Throwable {
		dropdown("byvalue", pom.get_instance_nextpage2().getCctype(), "MAST");
	}

	@When("^user Select The Credit Card Expiry Month In Dropdown Box$")
	public void user_Select_The_Credit_Card_Expiry_Month_In_Dropdown_Box() throws Throwable {
		dropdown("bytext", pom.get_instance_nextpage2().getCcmonth(), "September");
	}

	@When("^user Select The Credit Card Expiry Year In Dropdown Box$")
	public void user_Select_The_Credit_Card_Expiry_Year_In_Dropdown_Box() throws Throwable {
	dropdown("byvalue", pom.get_instance_nextpage2().getCcyear(), "2022");
	}


	@When("^user Enter The Cvv In Ccv Number Textbox$")
	public void user_Enter_The_Cvv_In_Ccv_Number_Textbox() throws Throwable {
		inputvalueelement(pom.get_instance_nextpage2().getCvv(), "008");
	}

	@Then("^user Click On The BookNow Button It Navigate To The Booking Confirm Page$")
	public void user_Click_On_The_BookNow_Button_It_Navigate_To_The_Booking_Confirm_Page() throws Throwable {
		clickonElement(pom.get_instance_nextpage2().getBooking());
	}

	@Then("^user Click On The Logout Button$")
	public void user_Click_On_The_Logout_Button() throws Throwable {
	   
	}
	
	
	@Before
	public static void before_Hooks(Scenario s) {
		
		  String name = s.getName();
		  
		  System.out.println("Scenario Name:"+ name);
		

	}

   @After
     public static void after_Hooks(Scenario s) throws Throwable {
	   
	   if (s.isFailed()) {
		   
		   fileutils("C:\\Users\\Vignesh\\eclipse-workspace\\cucumber_adactin\\screenshot\\failed.png"); 
		
		
	}
	   
	   String status = s.getStatus();
	   
	   System.out.println("Scenario Status:" + status);
	   

	}

}
