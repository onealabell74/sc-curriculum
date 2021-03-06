# Backend Development
Backend refers to the server side of the website; it is the portion of software that does not come in direct contact with the users. It stores and arranges data, and also makes sure everything on the client-side of the website works fine.

## Databases
A dynamic site requires a database to work properly.  All information is stored in the database, like user profiles or images they've uploaded, or blog posts. Web developers work with programming languages like PHP or .Net, since they need to work with something the database understands. The code they write communicates with the server and then tells the browser what to use from the database.

### SQL & Relational Database Management Systems
**SQL** (**S**tructured **Q**uery **L**anguage) is a standard language for accessing and manipulating _relational_ databases. Although SQL is a standard, there are different versions of the SQL language. However, to be compliant with the standard, they all support at least the major commands (such as `SELECT`, `UPDATE`, `DELETE`, `INSERT`, `WHERE`) in a similar manner. Most of the SQL database programs also have their own proprietary extensions in addition to the SQL standard.

The data in **R**elational **D**atabase **M**anagement **S**ystem (**RDBMS**) is stored in database objects called _tables_. A table is a collection of related data entries and it consists of _columns_ and _rows_. A _record_, also called a row, is each individual entry that exists in a table. A record is a horizontal entity in a table. A _column_ is a vertical entity in a table that contains all information associated with a specific field in a table.

Relational databases require that schemas be defined before you can add data. For example, you might want to store data about your customers such as phone numbers, first and last name, address, city and state – a SQL database needs to know what you are storing in advance.

## NoSQL & Document Databases
A **NoSQL** (originally referring to "**no**n **SQL**" or "_non relational_") database provides a mechanism for storage and retrieval of data that is modeled in means _other_ than the tabular relations used in relational databases. NoSQL systems are also sometimes called "**N**ot **o**nly **SQL**" to emphasize that they may support SQL-like query languages or sit alongside SQL databases.

In a _relational database_, a book record is often dissembled (or “normalized”) and stored in _separate tables_, and relationships are defined by _primary_ and _foreign keys_. For example, a Books table could have columns for ISBN, Book Title, and Edition Number, while the Authors table has columns for AuthorID and Author Name, and finally the Author-ISBN table has columns for AuthorID and ISBN. The relational model is designed to enable the database to enforce referential integrity between tables in the database, normalized to reduce the redundancy, and generally optimized for storage.

In a _NoSQL database_, a book record is usually stored as a JSON document. For each book, the item, ISBN, Book Title, Edition Number, Author Name, and AuthorID are stored as attributes in a single document. In this model, data is optimized for intuitive development and horizontal scalability.

### NoSQL Database Types
* _**Document** databases_ pair each key with a JSON-like complex data structure known as a document. Documents can contain many different key-value pairs, or key-array pairs, or even nested documents.
* _**Graph** stores_ are used to store information about _networks_ of data, such as social connections. Graph stores include Neo4J and Giraph.
* _Key-value stores_ are the simplest NoSQL databases. Every single item in the database is stored as an attribute name (or 'key'), together with its value. Examples of key-value stores are Riak and Berkeley DB. Some key-value stores, such as Redis, allow each value to have a type, such as 'integer', which adds functionality.
* _Wide-column stores_ such as Cassandra and HBase are optimized for queries over large datasets, and store columns of data together, instead of rows

## Database Features
### ACID
In database systems, ACID (Atomicity, Consistency, Isolation, Durability) refers to a standard set of properties that guarantee database transactions are processed reliably. ACID is especially concerned with how a database recovers from any failure that might occur while processing a transaction. An ACID-compliant DBMS ensures that the data in the database remains accurate and consistent despite any such failures.

* **Atomicity** - Atomicity means that you guarantee that either all of the transaction succeeds or none of it does. You don’t get part of it succeeding and part of it not. If one part of the transaction fails, the whole transaction fails. With atomicity, it’s either “all or nothing”.
* **Consistency** - This ensures that you guarantee that all data will be consistent. All data will be valid according to all defined rules, including any constraints, cascades, and triggers that have been applied on the database.
* **Isolation** - Guarantees that all transactions will occur in isolation. No transaction will be affected by any other transaction. So a transaction cannot read data from any other transaction that has not yet completed.
* **Durability** - Durability means that, once a transaction is committed, it will remain in the system – even if there’s a system crash immediately following the transaction. Any changes from the transaction must be stored permanently. If the system tells the user that the transaction has succeeded, the transaction must have, in fact, succeeded.

All of the major RDBMS adhere to the ACID principles. They all include features that ensure that the data maintains consistent throughout software and hardware crashes, as well as any failed transactions.

NoSQL databases are a bit different. NoSQL databases are often designed to ensure high availability across a cluster, which usually means that consistency and/or durability is sacrificed to some degree. However, most NoSQL DBMSs can provide atomicity to some degree. Most NoSQL DBMS work on a eventually consistent basis, meaning that, data may be out of sync for a time, but it will eventually be in sync. However, some vendors, such as MarkLogic, OrientDB, and Neo4j offer ACID compliant NoSQL database management systems.

### CRUD
Databases provide four basic types of functionality. The database must be able to **C**reate, **R**ead, **U**pdate, and **D**elete resources (**CRUD**).

* **Create** - new entry in collection/table
* **Read** - retrieve the resource and display the results
* **Update** - changes information in an entry
* **Delete** - remove the entry

# Backend as a Service: Firebase
Google's [Firebase](https://cloud.google.com/firestore/docs/client/get-firebase) is a mobile/web **b**ackend **a**s **a** **s**ervice (**BaaS**).
> "Mobile backend as a service is a model for providing web app and mobile app developers with a way to link their applications to backend cloud storage and APIs exposed by back end applications while also providing features such as user management, push notifications, and integration with social networking services." - [_Wikipedia_](https://en.wikipedia.org/wiki/Mobile_backend_as_a_service)

It is _not_ just a third party library like Navigo or Axios, but an entire **platform** with _a lot_ of services available for us to use. We will focus on **Firestore** (a real-time NoSQL database) and **Auth** (a ready-to-use client-side authenticator), but there are many more services on Firebase that may be of interest:
* Analytics
* Messaging/Notifications
* Hosting
* Machine Learning
* Testing
* Ad services

## Getting Started with Firebase
### Creating a Project
1. Sign-in to Firebase using your Google account.
2. Click "Get started", then "Add a project" to create a new Firebase project
3. Enter a project name. This name is just for your reference
4. We won't be using Analytics, and it is optional, but enabling Analytics won't hurt anything
    * If you enable Analytics, you must choose an Analytics account to link to your project. Default is fine
5. Click "Create project" to create your Firebase project

### Register an App
After creating a new Firebase project, you will be on the project's Overview page. We have our Firebase project set-up, but our app/website is not linked to it yet.
1. We need to add our app to Firebase
    * Without any apps linked to our project, the Overview page reads: "Get started by adding Firebase to your app". Click the Web icon ( `</>` ) to add a web app/site.
    * Or, click the "gear"/settings icon in the top left corner next to "Project Overview", and select "Project settings". On the Settings page, under "Your apps", select the Web icon ( `</>` )
2. Register your website/app with a nickname (again, this name is just for your reference)
3. Skip the next step where it tells you to paste the `<script>` tags into your HTML document. Our architecture will handle this differently

## Set-up Firebase: Auth and Firestore
### Set-up Authentication
1. Select "Authentication" from the list under "Develop" on the left side of your Firebase project page.
2. Select the "Sign-in method" tab and enable "Email/Password" and/or any other types of Authentication you want use

### Set-up Firestore
1. Select "Database" from the list under "Develop" on the left side of your Firebase project page.
2. Click "Create database", and start your database in "test mode". In test mode, **anyone** can read or write data to your database for thirty days. Learn more about securing your database [here](https://firebase.google.com/docs/firestore/security/get-started).
3. Set your location/timezone and Firestore creates your cloud database.
    > **Firestore Data Model**
    >
    > "Firestore is a NoSQL, document-oriented database. Unlike a SQL database, there are no tables or rows. Instead, you store data in documents, which are organized into collections.
    >
    > Each document contains a set of key-value pairs. Cloud Firestore is optimized for storing large collections of small documents.
    >
    > All documents must be stored in collections. Documents can contain subcollections and nested objects, both of which can include primitive fields like strings or complex objects like lists." - [Firebase docs](https://firebase.google.com/docs/firestore/data-model)
4. After we've created our database, we click "+ Start collection" to create our first collection/"table".
5. Give your collection a name/ID, then create the collection's first document by specifying fields (keys), types, and values, and saving
6. Our database is now set-up with a collection and a document. We can manually add more documents and/or collections, or we can add documents and/or collections to our database later through JavaScript
7. Our Firebase project is now set-up, and we can move on to setting-up and working with Firebase in our project repo

## Set-up Firebase in Our Repo
### Install Firebase
We can [install Firebase](https://www.npmjs.com/package/firebase) like any other dependency by entering the following into the terminal:
```
npm install --save firebase
```

### Firebase Architecture
![Firebase folder structure](FirebaseResources/firebase-architecture.png)

## Firebase config, init, modules
### `firebase/config.js`
Our `config.js` file will `export` our config object. To find the config object for your Firebase project, click the "gear"/settings icon next to "Project Overview", then select "Project settings". Under "Your apps", we have the same code snippet we skipped over earlier. Copy the object that is set equal to `firebaseConfig`, paste it into your config file, and export it by default.

> **TIP**: To use environment variables, remember to import your `env.js` file to gain access to `process.env`.
```javascript
export default {
    apiKey: process.env.FIREBASE_API,
    authDomain: "savvycoders-practice.firebaseapp.com",
    databaseURL: "https://savvycoders-practice.firebaseio.com",
    projectId: "savvycoders-practice",
    storageBucket: "savvycoders-practice.appspot.com",
    messagingSenderId: "433839277019",
    appId: process.env.FIREBASE_ID,
    measurementId: "G-4HLEQEN2HS"
}
```

### `firebase/init.js`
Our `init.js` file initializes Firebase with our config settings. We `import` our Firebase app and config Object, then export the result of calling the `initializeApp()` method on our Firebase app and passing in our config Object.
```javascript
import firebase from "@firebase/app"
import config from "./config"

export default firebase.initializeApp(config)
```

### `firebase/auth.js`
Now that we have our Firebase app initialized, we can set-up our authorization and database modules. We simply import the authentication piece of Firebase and our initialized Firebase app, then export the result of calling `auth()` on our app.
```javascript
import "@firebase/auth"
import firebase from "./init"

export default firebase.auth()
```

### `firebase/db.js`
The database module is very similar to our `auth` module, only we import a different piece of Firebase and call a different method on our app.
```javascript
import "@firebase/firestore"
import firebase from "./init"

export default firebase.firestore()
```

### `firebase/index.js`
Our `index.js` is an aggregator that exports our `auth` and `db` modules.
```javascript
export { default as auth } from "./auth"
export { default as db } from "./db"
```

