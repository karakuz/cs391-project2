# Özyeğin University 20-21 Spring CS391 Group Project

Group Members: Doğuhan Bayık, Maram Elsebakhi, Yunus Emre Karakuz

The main goal of our project is to provide easy information on a selection of movies, as well as the ability to buy a ticket for a movie screening. The website contains four main sections: The main landing page, that includes a card display of all available movies; The goto movie page, that provides more information for the movies as well as a ticketing interface; The Sign Up page that lets the users and sign up for our website; A login page that lets a user login to our website.

## UseCase Scenarios:
### Sign-Up
Use case name: Sign-Up

Description: The user enters his/her personal information and the system saves the information in LocalStorage API.

Owner: Maram Elsebakhi 08.05.21

Actor: Website user.

Preconditions:
- The user has intenet access.
- The homepage has been opened in a compatible web browser.

The event that started the use-case: User clicks on sign up button.

Success scenario:
1. User opens sign up page
2. User enters email address, name, surname, new password and repeat new password.
3. User clicks sign up buttion.
4. System checks if all data is entered correctly.
5. System saves the user's data in the local storage.

Exception flows:
Exception-1: Missing input
1. User opens sign up page.
2. User inputs some or none of the fields.
3. User clicks sign up button.
4. System displays error message "Please enter each field"

Exception-2: Already registered user
1. User opens sign up pages
2. User inputs all the fields, email entered is already registered
3. User clicks sign up button.
4. System displays error message "User already exists"

Success Guarantee: The system creates a new user and saves their information in the database
## Log-In
Use case name: Log-In

Description: The user enters his/her email and password and the system checks localStorage and logs the user in.

Owner: Maram Elsebakhi 08.05.21

Actor: Website user.

Preconditions:

- The user has intenet access.
- The homepage has been opened in a compatible web browser.
The event that started the use-case: User clicks on log-in button.

Success scenario:
1. User opens log-in page
2. User inputs their email address and password.
3. User clicks sign in button.
4. System confirms matching in locale storage.
5. The user successfuly signs in.

Exception flows:
Exception-1: Not registered
1. User opens log-in page
2. User inputs their email address and password.
3. User clicks log-in button.
4. System does not find matching in locale storage.
5. System display error message "user does not exist or wrong email"

Exception-2: Wrong Password
1. User opens log-in page
2. User inputs their email address and password.
3. User clicks log-in button.
4. System does finds email in locale storage but password mismatch.
5. System display error message "Wrong password"

Success guarantee: The user signs in successfuly.
## Goto Movie
Use case name: Goto movie

Description: The user can click goto movie button on each movie to see more information and access ticketing system.

Owner: Maram Elsebakhi 07.06.21

Actor: Website user.

Preconditions:
- The user has intenet access.
- The homepage has been opened in a compatible web browser.

Success scenario:
1. User clicks on goto movie button.
2. The website is redirected to a new page containing detailed movie information.
3. The user can check ratings and reviews.
4. The user can buy a ticket.

Alternate flows:
Alternate-1:
1. User opens consultation page.
2. The page askes for user permission to display location.
3. User denies access to location.
4. Website contains generic list of locations.

Success scenario: The map displays search results nearby.

## Responsibilities:

**Maram Elsebakhi:**
- Importing data from Json file and formatting the content to be displayed (src/Home.js, src/components/Heading.js, src/components/Table/, src/images/).
- CSS and Bootstrap styling of the website.
- README file

**Doğuhan Bayık:**
- Sign up and log-in pages and CSS styling for the page.
- Javascript code for LocalStorage API "sign_up.js".

**Yunus Emre Karakuz:**
- General structure and setting up of the entire website.
- Routing functionality in Index.js and NavigationBar.js.
- Goto movie page.

## Instructions:
1. Download the website folder
2. Open web browser.
3. Run npm install in command prompt inside the folder.
4. Run npm start in command prompt inside the folder.

IDE: Visual Studio Code.