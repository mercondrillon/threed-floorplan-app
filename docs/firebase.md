# Setup Firebase

### 1. Go to https://console.firebase.google.com
Log in or sign up with your google account

### 2. Add a new project
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_05-49-17_YR4GOa/Firebase_console_and_Firebase_console.jpg)
Set project name and region:
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_05-52-45_WSiIWi/Firebase_console.jpg)

### 3. Go to "Project Settings"
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_05-55-03_IOKKlb/floor-plan-to-3d___Overview___Firebase_console.jpg)

### 4. Continue to "Service Accounts"
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_05-56-23_6CLRiT/floor-plan-to-3d___Settings___Firebase_console.jpg)

### 5. Generate new private key
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_05-58-36_WPI3Q1/floor-plan-to-3d___Settings___Firebase_console.jpg)
Download JSON file with account information including private key:
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_05-59-48_0IACNM/floor-plan-to-3d___Settings___Firebase_console.jpg)

### 6. Store your private key as environment variables
Open the downloaded file and copy the value named "private_key"
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_06-08-05_rlz88B/floor-plan-to-3d-firebase-adminsdk-d49ah-b329442a5e_json.jpg)
Store it as environment variable:
* For local development:
  * Windows: `set FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBAASCBKcwggSjA..."`
  * OSX / Linux: `export FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBAASCBKcwggSjA..."`
* On your heroku deployment:
  ![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_06-18-14_2RPkfX/floor-plan-to-3d___Settings___Heroku_and_repositories.jpg)
  ![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_06-20-28_gEuBQl/floor-plan-to-3d___Settings___Heroku_and_floor-plan-to-3d-firebase-adminsdk-d49ah-b329442a5e_json.jpg)
   
### 7. Store "clieant email" as environment variable
Repeat step 6 for the value named "client_email" and store it as "FIREBASE_CLIENT_EMAIL"
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_06-28-18_heqpEJ/floor-plan-to-3d-firebase-adminsdk-d49ah-b329442a5e_json.jpg)

### 8. Store your database url as environment variable
Go back to firebase console and in project overview, go to "Database", there copy the database url (2) and store it as environment variable named "FIREBASE_DATABASE_URL" (as described in step 6).
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_06-31-37_7brb54/floor-plan-to-3d___Realtime_Database___Firebase_console.jpg)

### Done :)

Continue to [SendGrid setup](sendgrid.md)
