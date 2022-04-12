$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactinfeature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cusername\u003e\" in Username Textbox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Enter The \"\u003cpassword\u003e\" in Password Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user Click On The Login Button And It Navigate To The Hotel Search Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "abc",
        "12345"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "cutekalaiselvi",
        "kalai@2022"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1317800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"abc\" in Username Textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Enter The \"12345\" in Password Textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user Click On The Login Button And It Navigate To The Hotel Search Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 97873584500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 16
    }
  ],
  "location": "Step_def.user_Enter_The_in_Username_Textbox(String)"
});
formatter.result({
  "duration": 1377148300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 16
    }
  ],
  "location": "Step_def.user_Enter_The_in_Password_Textbox(String)"
});
formatter.result({
  "duration": 190549700,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Login_Button_And_It_Navigate_To_The_Hotel_Search_Page()"
});
formatter.result({
  "duration": 2342746300,
  "status": "passed"
});
formatter.after({
  "duration": 147600,
  "status": "passed"
});
formatter.before({
  "duration": 60500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"cutekalaiselvi\" in Username Textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Enter The \"kalai@2022\" in Password Textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user Click On The Login Button And It Navigate To The Hotel Search Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 951939200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cutekalaiselvi",
      "offset": 16
    }
  ],
  "location": "Step_def.user_Enter_The_in_Username_Textbox(String)"
});
formatter.result({
  "duration": 168396800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kalai@2022",
      "offset": 16
    }
  ],
  "location": "Step_def.user_Enter_The_in_Password_Textbox(String)"
});
formatter.result({
  "duration": 143890800,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Login_Button_And_It_Navigate_To_The_Hotel_Search_Page()"
});
formatter.result({
  "duration": 1566745300,
  "status": "passed"
});
formatter.after({
  "duration": 197500,
  "status": "passed"
});
formatter.before({
  "duration": 427400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "user Select The Hotel Location \"6\" In Dropdown Box",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user Select The Hotelname \"Hotel Sunshine\" In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select The RoomtypeIn  Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Select The RoomNo  In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Enter The Hotel In Date",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Enter The Hotel Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Select The Adult per Room In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Select The Child per Room \"2\"  In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Click On The Search Button And It Navigate To The Hotel Select Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 32
    }
  ],
  "location": "Step_def.user_Select_The_Hotel_Location_In_Dropdown_Box(String)"
});
formatter.result({
  "duration": 289780600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Sunshine",
      "offset": 27
    }
  ],
  "location": "Step_def.user_Select_The_Hotelname_In_Dropdown_Box(String)"
});
formatter.result({
  "duration": 158594000,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Select_The_RoomtypeIn_Dropdown_Box()"
});
formatter.result({
  "duration": 136856200,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Select_The_RoomNo_In_Dropdown_Box()"
});
formatter.result({
  "duration": 205724500,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_Hotel_In_Date()"
});
formatter.result({
  "duration": 148324800,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_Hotel_Out_Date()"
});
formatter.result({
  "duration": 143224700,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Select_The_Adult_per_Room_In_Dropdown_Box()"
});
formatter.result({
  "duration": 198828400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "Step_def.user_Select_The_Child_per_Room_In_Dropdown_Box(String)"
});
formatter.result({
  "duration": 137012200,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Search_Button_And_It_Navigate_To_The_Hotel_Select_Page()"
});
formatter.result({
  "duration": 1150584000,
  "status": "passed"
});
formatter.after({
  "duration": 81500,
  "status": "passed"
});
formatter.before({
  "duration": 413600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Select The Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-the-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "user Click On The Hotel Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user Click On The Continue Button And It Navigate To Hotel Booking Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Hotel_Radio_Button()"
});
formatter.result({
  "duration": 91710900,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Continue_Button_And_It_Navigate_To_Hotel_Booking_Page()"
});
formatter.result({
  "duration": 1199711400,
  "status": "passed"
});
formatter.after({
  "duration": 55200,
  "status": "passed"
});
formatter.before({
  "duration": 90600,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Hotel Booking Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-booking-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "user Enter The Firstname In Firstname Textbox",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "user Enter The Lastname In Lastname Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user Enter The Address In Address Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user Enter The Creditcard No In Creditcard Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user Select The CreditCardType In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user Select The Credit Card Expiry Month In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user Select The Credit Card Expiry Year In Dropdown Box",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user Enter The Cvv In Ccv Number Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user Click On The BookNow Button It Navigate To The Booking Confirm Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_def.user_Enter_The_Firstname_In_Firstname_Textbox()"
});
formatter.result({
  "duration": 106946600,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_Lastname_In_Lastname_Textbox()"
});
formatter.result({
  "duration": 81034000,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_Address_In_Address_Textbox()"
});
formatter.result({
  "duration": 79967600,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_Creditcard_No_In_Creditcard_Textbox()"
});
formatter.result({
  "duration": 117020500,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Select_The_CreditCardType_In_Dropdown_Box()"
});
formatter.result({
  "duration": 144132500,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Select_The_Credit_Card_Expiry_Month_In_Dropdown_Box()"
});
formatter.result({
  "duration": 120984300,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Select_The_Credit_Card_Expiry_Year_In_Dropdown_Box()"
});
formatter.result({
  "duration": 138569700,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_Cvv_In_Ccv_Number_Textbox()"
});
formatter.result({
  "duration": 80385600,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_On_The_BookNow_Button_It_Navigate_To_The_Booking_Confirm_Page()"
});
formatter.result({
  "duration": 74967100,
  "status": "passed"
});
formatter.after({
  "duration": 164800,
  "status": "passed"
});
formatter.before({
  "duration": 77900,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Hotel Confirm Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-confirm-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "user Click On The Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Logout_Button()"
});
formatter.result({
  "duration": 109900,
  "status": "passed"
});
formatter.after({
  "duration": 122300,
  "status": "passed"
});
});
}););