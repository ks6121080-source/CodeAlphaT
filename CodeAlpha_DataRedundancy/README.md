🚀 Data Redundancy Removal System

☁️ Cloud Computing Internship Project.



🔍 Project Summary.

In modern cloud systems, data redundancy leads to storage inefficiency, inconsistent records, and performance degradation.

This project implements a cloud-hosted backend system that intelligently detects and prevents duplicate data entries before they are stored in the database.

The system validates incoming data against existing cloud records and ensures that only unique and verified data is stored, thereby improving database accuracy, reliability, and efficiency.



✨ Key Highlights

✔ Cloud-deployed backend API.

✔ Real-time duplicate data detection.

✔ Firestore NoSQL database integration.

✔ Secure backend using Firebase Admin SDK.

✔ Tested using Postman.

✔ Fully compliant with CodeAlpha internship requirement.



🎯 Objectives

* Identify redundant or duplicate data entries.
* Validate new incoming data against existing cloud records.
* Prevent duplicate data from being added to the database.
* Improve storage efficiency and data integrity.
* Deploy and test a cloud-native backend application.





🧠 How the System Works

1. A client sends data to the backend using an HTTP POST request.

2.The backend validates the request parameters.

3.Firestore is queried for matching records.

4.The system responds with:

&nbsp;			duplicate: true → data already exists



&nbsp;			duplicate: false → data is unique



&nbsp;  This logic ensures redundancy-free data storage in the cloud.



☁️ Technologies \& Tools Used



Category		Technology



Cloud Platform		Render (Free Tier)

Backend			Node.js, Express.js

Database		Firebase Firestore

Cloud SDK		Firebase Admin SDK

Testing			Postman

Version Control		Git \& GitHub





🚀 Live Deployment

* The backend service is successfully deployed on a cloud platform.



🌐 Live API Base URL



https://dataredundancybackend.onrender.com





ℹ️ This is an API-only backend.

Accessing the base URL in a browser may show Cannot GET /, which is expected behavior.





🔌 API Documentation

🔹 Duplicate Check Endpoint



&nbsp;	Method: POST



&nbsp;	Endpoint:



&nbsp;	/check-duplicate



📥 Request Body (JSON)

{

&nbsp; "collection": "users",

&nbsp; "field": "email",

&nbsp; "value": "test@example.com"

}



📤 Response



If duplicate exists:



{

&nbsp; "duplicate": true

}





If data is unique:



{

&nbsp; "duplicate": false

}





🧪 Testing \& Validation

&nbsp;	

The API was tested using Postman with multiple inputs to verify:



* Duplicate detection accuracy
* Proper validation of new data
* Correct Firestore integration



📸 Proof screenshots are included in the /images folder:



* Firestore data entry
* Postman API response
* Render deployment logs





📂 Project Structure

CodeAlpha\_DataRedundancy/

├── backend/

│   ├── index.js

│   ├── package.json

│   ├── service-account.json

│   └── node\_modules/

│

├── images/

│   ├── firestore-data.png

│   ├── postman-test.png

│   └── render-deploy.png

│

├── firebase.json

├── firestore.rules

└── README.md





✅ Internship Requirements Fulfilled

✔ Cloud platform usage

✔ Backend deployment

✔ Data redundancy detection

✔ Database validation mechanism

✔ GitHub repository submission

✔ Live project demonstration





🔮 Future Enhancements



* Role-based authentication
* Frontend UI for data entry
* Support for bulk data validation
* Logging and analytics dashboard



👨‍💻 Author



Name: Qureshi Khatija Asif



Internship: Cloud Computing Intern



Organization: CodeAlpha



⭐ This project demonstrates practical cloud computing skills including backend deployment, database management, and real-world data validation logic.

