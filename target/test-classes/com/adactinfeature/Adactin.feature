Feature: Hotel Booking In Adactin Application

Scenario Outline: Login Page

Given user Launch The Application

When user Enter The "<username>" in Username Textbox

And user Enter The "<password>" in Password Textbox

Then user Click On The Login Button And It Navigate To The Hotel Search Page
Examples:
|username|password|
|abc|12345|
|cutekalaiselvi|kalai@2022|


Scenario: Search Hotel Page

When user Select The Hotel Location "6" In Dropdown Box

And user Select The Hotelname "Hotel Sunshine" In Dropdown Box

And user Select The RoomtypeIn  Dropdown Box

And user Select The RoomNo  In Dropdown Box

And user Enter The Hotel In Date

And user Enter The Hotel Out Date

And user Select The Adult per Room In Dropdown Box

And user Select The Child per Room "2"  In Dropdown Box

Then user Click On The Search Button And It Navigate To The Hotel Select Page


Scenario: Select The Hotel Page

When user Click On The Hotel Radio Button

Then user Click On The Continue Button And It Navigate To Hotel Booking Page

Scenario: Hotel Booking Page

When user Enter The Firstname In Firstname Textbox

And user Enter The Lastname In Lastname Textbox

And user Enter The Address In Address Textbox

And user Enter The Creditcard No In Creditcard Textbox

And user Select The CreditCardType In Dropdown Box

And user Select The Credit Card Expiry Month In Dropdown Box

And user Select The Credit Card Expiry Year In Dropdown Box

And user Enter The Cvv In Ccv Number Textbox

Then user Click On The BookNow Button It Navigate To The Booking Confirm Page

Scenario: Hotel Confirm Page

Then user Click On The Logout Button








