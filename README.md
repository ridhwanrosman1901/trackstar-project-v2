# **TrackStar: Staff Performance Tracking Website**

## **Objective**
TrackStar is a web application designed to enable managers to monitor and evaluate staff performance based on Key Performance Indicators (KPIs), attendance, and other relevant metrics. The platform also allows employees to view their performance data, empowering them to reflect on their work and seek improvement.

## **Core Technologies**
- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** Bootstrap 4

## **Pages Overview**

### **Landing Page**
**Purpose:**  
The Landing Page serves as the first point of contact for users. It provides a brief introduction to the TrackStar application and highlights its key features. This page is designed to engage users and guide them toward registration or login.

**Key Features:**
- **Introduction:** A concise description of what TrackStar offers and how it can benefit managers and employees.
- **Features Highlight:** A section outlining the main functionalities, such as performance tracking, attendance monitoring, and task management.
- **Call to Action:** Prominent buttons that redirect users to the Registration or Login pages, making it easy for new users to sign up and returning users to log in.

### **Registration/Login Page**
**Purpose:**  
This page allows users to register for an account or log in to access the system. The page is tailored to differentiate between managers and employees, ensuring appropriate access control.

**Register Page:**
- **Role-Based Registration:**  
  Users can register as a manager or an employee. Only Managers have the ability to provide authorization links or tokens for manager or employee registration, ensuring that only authorized personnel can sign up as Managers.
  
- **Show Password Feature:**  
  A 'Show Password' button is available during registration to help users verify their password as they type, reducing the likelihood of errors.

- **Form Validation:**  
  Robust form validation is implemented to ensure that all required fields are filled out correctly before submission.

**Login Page:**
- **JWT Authentication:**  
  User login is powered by JWT (JSON Web Tokens), ensuring a secure and stateless authentication process. Once authenticated, users receive a token that is used for subsequent API requests, maintaining security without requiring repeated logins.

- **Error Handling:**  
  The page includes user-friendly error messages to help users understand and correct any issues during the login process.

### **Admin Page**
**Purpose:**  
The Admin Page is the main control hub for managers. It provides tools for monitoring and managing the performance and activities of employees, offering detailed insights into team performance.

**Header:**
- **Navigation Bar:**  
  A navbar allows managers to easily navigate between different sections of the Admin Page, such as Attendance Monitoring, Task Monitoring, and Active Rate.

**Left Sidebar:**
- **Staff Lists:**  
  The sidebar displays a list of all registered employees. Managers can quickly access an employee’s profile by clicking on their name. The profile will appear in the Main section. There’s also an option to register new employees directly from the sidebar.

**Main Section: Attendance Monitoring**
- **Attendance Records:**  
  Managers can view detailed attendance records for each employee, including dates of presence, absences, and any logged attendance issues. This section helps managers monitor punctuality and attendance trends across the team.

**Main Section: Task Monitoring**
- **Task Assignment:**  
  Managers can assign tasks to employees, specifying deadlines and priorities. This ensures that each team member knows what is expected of them and by when.

- **Task Progress Tracking:**  
  Managers can monitor the status of tasks assigned to each employee, including tasks in progress, tasks under review, and tasks completed. This provides real-time insight into productivity and task management.

- **Task Completion Rate:**  
  A summary of the task completion rate, allowing managers to evaluate how efficiently employees are completing their assigned work.

**Main Section: Active Rate**
- **Participation Metrics:**  
  This section aggregates data from attendance and task completion to provide an overall participation rate for each employee. This metric helps managers identify highly engaged employees and those who may need additional support or motivation.

### **User/Employee Page**
**Purpose:**  
The User/Employee Page is designed for employees to manage their tasks, attendance, and profile. It provides a streamlined interface for employees to interact with the system and keep track of their own performance.

**Header:**
- **Navigation Bar:**  
  A navbar allows employees to easily navigate between different sections of the User Page, such as Attendance Logging, Task Updates, and Profile Management.

**Sidebar:**
- **Profile Management:**  
  A quick summary of the employee's profile information, including their name, role, and any recent updates. Employees can view and edit their personal information, such as contact details and profile picture. They can also change their password directly from this section.

**Main Section: Attendance Logging**
- **Attendance Records:**  
  Employees can log their daily attendance, marking their presence for the day. They can also view their past attendance records to track their punctuality and presence over time.

**Main Section: Task Updates**
- **Task Status Management:**  
  Employees can update the status of tasks assigned to them. They can move tasks to different stages such as 'In Progress,' 'In Review,' or 'Completed.' The system records the date and time of each update, providing a timeline of task progress.

### **Report Page**
**Purpose:**  
The Report Page provides a comprehensive overview of employee performance, allowing both managers and employees to view and analyze performance data.

**Overall Score (Dashboard):**
- **Performance Metrics:**  
  A dashboard displaying key performance metrics such as attendance rate, task completion rate, and overall participation. This visual representation helps users quickly understand their performance levels.

**Additional Features:**
- **Notes/Attachments:**  
  Managers and employees can add notes or attachments to reports, providing additional context or documentation. This feature is useful for giving feedback, adding comments on performance, or attaching relevant files.

## **Project Decisions**
- **Structure:**  
  The project is organized into four key pages (Landing, Register/Login, User, Admin), each dedicated to specific functionality.
  
- **Simplicity:**  
  Each component is designed to be included on a single page to streamline development and user experience. This approach ensures that the application remains intuitive and easy to navigate.

- **Removed KPIs:**  
  The KPIs for Efficiency Rate and Customer Satisfaction have been removed from the system to focus on more relevant metrics.

- **KPI Focus:**  
  The primary KPIs for this system are Attendance Rate, Task Completion Rate, and Quality of Work.

## **Implementation Strategy**
1. **Setup:**  
   Start by setting up the MERN stack environment, including React.js for the frontend and Node.js with Express.js for the backend.

2. **Frontend Development:**  
   Develop each page using React.js with a focus on modular, reusable components. Ensure responsive design with Bootstrap 4 to cater to various screen sizes.

3. **Backend Development:**  
   Implement server-side logic using Node.js and Express.js, handling API requests, and managing database operations with MongoDB.

4. **Database Design:**  
   Design MongoDB schemas for users, KPIs, attendance records, and performance reports. Ensure data integrity and efficient querying.

5. **Authentication:**  
   Secure the application with JWT-based authentication, managing different access levels for managers and employees.

## **Additional Notes**
- **Consistency:**  
  Ensure that all team members follow this summary to maintain consistency in understanding and development.

- **Page Merging:**  
  The Home/Dashboard page has been merged, and a new Landing Page has been added to streamline the user journey.

- **Sitemap:**  
  Refer to the provided sitemap to understand the website’s structure and navigation paths.
