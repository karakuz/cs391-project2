# Özyeğin University 20-21 Spring CS391 Group Project

Group Members: Doğuhan Bayık, Maram Elsebakhi, Yunus Emre Karakuz

The main goal of our project is to provide easy information on a selection of movies, as well as the ability to buy a ticket for a movie screening. The website contains four main sections: The main landing page, that includes a card display of all available movies; The goto movie page, that provides more information for the movies as well as a ticketing interface; The Sign Up page that lets the users and sign up for our website; A login page that lets a user login to our website.

## UseCase Scenarios:
### Sign Up
Use case name: Sign Up

Description: The user enters his/her personal information and the system saves the information in db.json.

Owner: Doğuhan Bayık 11.06.21

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
5. System saves the user's data in db.json.

Exception flows:
Exception-1: Missing input
1. User opens sign up page.
2. User inputs some or none of the fields.
3. User clicks sign up button.
4. System displays error message that these fields are required.

Exception-2: Already registered user
1. User opens sign up page.
2. User inputs all the fields, email entered is already registered.
3. User clicks sign up button.
4. System displays error message "This e-mail is already taken!"

Exception-3: Password confirmation
1. User opens sign up page.
2. User inputs all the fields, password and password* do not match.
3. User clicks sign up button.
4. System displays error message "Passwords do not match!"

Success Guarantee: The system creates a new user and saves their information in db.json.
### Login
Use case name: Login

Description: The user enters his/her email and password and the system checks db.josn and logs the user in.

Owner: Doğuhan Bayık 11.06.21

Actor: Website user.

Preconditions:

- The user has intenet access.
- The homepage has been opened in a compatible web browser.
The event that started the use-case: User clicks on login button.

Success scenario:
1. User opens login page
2. User inputs their email address and password.
3. If user clicks remember me button system saves userid in local storage.
4. User clicks login button.
5. System confirms matching in db.json.
6. The user successfuly logs in.

Exception flows:
Exception-1: Missing input
1. User opens login page.
2. User inputs some or none of the fields.
3. User clicks sign up button.
4. System displays error message that these fields are required.

Exception-2: Not registered
1. User opens login page
2. User inputs their email address and password.
3. User clicks login button.
4. System does not find matching in db.json.
5. System display error message "User Does not Exist"

Exception-3: Wrong Password
1. User opens login page
2. User inputs their email address and password.
3. User clicks login button.
4. System does finds email in db.json but password mismatch.
5. System display error message "Password is wrong"

Success guarantee: The user logs in successfuly.
### Movie Page
Use case name: Movie page

Description: The user can click movie name or image on each movie to see more information and access ticketing system.

Owner: Emre Karakuz 07.06.21

Actor: Website user.

Preconditions:
- The user has intenet access.
- The homepage has been opened in a compatible web browser.

Success scenario:
1. User clicks on movie name or its image.
2. The website is redirected to a new page containing detailed movie information.
4. The user can book a ticket.

Success scenario: The user accesses detailed movie information and can access reservation system.

Exception flows:
Exception-1: Missing time or date
1. User opens movie page.
2. User lefts date or time input blank.
3. User clicks Submit button.
4. System displays error message that these fields are required.

Exception-2: User selects a day before today
1. User opens movie page.
2. User correctly enters the inputs and selects a day before today.
3. User clicks Submit button.
4. System displays error message that he/she selected a day before today.

Exception-3: User already has a ticket at that time
1. User opens movie page.
2. User correctly enters the inputs.
3. User clicks Submit button.
4. System displays error message that he/she has already a ticket for a movie at that given date and time.

### Profile Page
Use case name: Profile page

Description: The user can click Profile on the right hand side of the navigation bar in order to see information of his/her account and reservations.

Owner: Emre Karakuz 07.06.21

Actor: Website user.

Preconditions:
- The user has intenet access.
- The homepage has been opened in a compatible web browser.
- User has to be logged in

Success scenario:
1. User clicks on Profile on the right hand side of the navigation bar.
2. The website is redirected to a new page containing detailed profile information and reservations.
4. The user check the information.

## Responsibilities:

**Maram Elsebakhi:**
- Importing data from Json file and formatting the content to be displayed (src/Home.js, src/components/Heading.js, src/components/Table/, src/images/).
- CSS and Bootstrap styling of the website.
- README file

**Doğuhan Bayık:**
- Signup.js and Login.js
- Interacting with db.json for saving and checking data in order to sign up and login.

**Yunus Emre Karakuz:**
- General structure and setting up of the entire website.
- Routing functionality in Index.js and NavigationBar.js.
- Movie page.
- Profile page

## Instructions:
1. Download the website folder
2. Open web browser.
3. Run npm install in command prompt inside the folder.
4. Run npm start in command prompt inside the folder.

IDE: Visual Studio Code.
