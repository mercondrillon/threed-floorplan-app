# Setup SendGrid

### 1. Login or signup at SendGrid (https://app.sendgrid.com/signup)
At some point during setup a green message at the top will pop up reminding you about veryfying your acount. Just go to your own email box, confirm the message you received from SendGrid and proceed.  
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_12-53-51_bZxZvm/SendGrid.jpg)

### 2. Setup integration
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_12-47-31_BEWRck/SendGrid.jpg)
Continue with Web API:
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_12-59-38_0IB9xm/SendGrid.jpg)
In next step choose "cURL":
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_13-00-52_vwy0ap/SendGrid_and_sendgrid_md_-_3dio-floor-plan-app_-____archilogic_repositories_3dio-floor-plan-app__and_Slack_-_Archilogic.jpg)
Give your API key a name and confirm by clicking on "Create Key":
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_13-03-40_SgSVMc/SendGrid.jpg)
Copy your new API key and store it in a safe place (you will need it in step 3)
Copy the code in "Create an environment variable" and run it in command line:<br>
(On windows you might have to replace "export" by "set")
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_13-12-45_ixe0n1/SendGrid_and_sendgrid_md_-_3dio-floor-plan-app_-____archilogic_repositories_3dio-floor-plan-app__and_tp___-bash___80_24.jpg)
Copy the code in "Run the code" and run it in command line:<br>
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_13-13-47_PGMjNh/SendGrid.jpg)
Confirm checkbox and click on button to continue: 
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_13-15-44_Qwa3LU/SendGrid.jpg)
Click on "Verify Integration":
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_13-21-33_h4Z8rz/SendGrid.jpg)
After a few seconds a confirmation screen should appear: 
![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_13-27-29_3YxKe7/SendGrid.jpg)

### 3. Store your API as environment variables
 * For local development:
   * Windows: `set SENDGRID_API_KEY="SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`
   * OSX / linux: `export SENDGRID_API_KEY="SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`
 * On your heroku deployment:
   ![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_06-18-14_2RPkfX/floor-plan-to-3d___Settings___Heroku_and_repositories.jpg)
   ![](https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-17_13-35-10_cN1gXh/floor-plan-to-3d___Settings___Heroku.jpg)
   
 ### DONE :)
