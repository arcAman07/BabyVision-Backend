# BabyVision-Backend

Routes (Testing) collection on postman -  https://www.getpostman.com/collections/661c6bec9516dc211dd6

This code sample is basically the backend (server side code) of the Android Native Application Baby Vision which is a ML integrated application which lets users( especially children) to identify objects ( label classification) and landmarks( landmark classification) near their vicinity. This entire server side code is divided into three parts:
1) User Authentication : For storing user details like name, email, username, password we are using mongodb database. Sign Up routes have been set for user registration(post route), user details to be shown ( all user details and user details by id) and other CRUD routes such as updating ( patch to update user details) and delete. As it is a simple mobile application bcrypt js has been used for authentication rather than passport or oauth.
2) Storing Labels: As soon as the model predicts the image either for landmark or  object detection these details are stored in the database to study user images and its classification (CRUD routes have been set). 
3) User feedback: After model prediction , user will fill the feedback form so that we can improve the ML model and it is stored in the database. ( CRUD routes have been set here again).
