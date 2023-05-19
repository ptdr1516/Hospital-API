# Project Name: Backend Test: Hospital API
Design the server-side for a hospital, Only the API needs to be designed

Tech Stack: Node.js & Mongo DB

# Requirements and Features:

# Task
#### Theme:
- We’re going to design an API for the doctors of a Hospital which has been allocated by the
  npm govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just
  return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
  Positive-Admit]

- Date
- Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status
- Decide the fields and schemas on your own, smartly
- Decide which routes need to be protected by authentication

# Instructions about SetUp:

a. `npm install` : to install all the project dependencies.

b. `npm start` : Starts the server on port 8000. (http://localhost:8000)

c. API Endpoints can be tested using Postman.(https://www.postman.com/downloads/)

# To test:- 

1.**http://localhost:8000/doctors/register** route to register doctor in API and add doctor info.

2.**http://localhost:8000/doctors/login** to login as a doctor.

3.**http://localhost:8000/patients/register** and add the token in authorization area(token will be generated when you login).

4.**http://localhost:8000/reports/phone_number/create_report** to create report and add status you can see the types of
   status in report model like "phone_number == id"

5.**http://localhost:8000/doctors/register** to register patient

6.**http://localhost:8000/reports/phone_number/all_reports** to get all the reports "phone_number == id"

7.**http://localhost:8000/reports/status** to get all the reports based on status.
   

   status:-
   
   N: "Negative",
   
   TQ: "Travelled-Quarantine",
   
   SQ: "Symptoms-Quarantine",
   
   PA: "Positive-Admit"
