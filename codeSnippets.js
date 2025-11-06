window.codeSnippets = {
    // HTML
    div: `<div id="example">Hello World</div>`,
    span: `<span class="highlight">Text</span>`,
    p: `<p>This is a paragraph.</p>`,
    a: `<a href="https://example.com">Link</a>`,
    img: `<img src="image.jpg" alt="Example Image">`,
    form: `<form id="myForm"><input type="text" placeholder="Name"><button>Submit</button></form>`,
    input: `
    You can put the following:
     
    disabled | readonly | required | size="40" | maxlength="5" | pattern="REGEX-EXPRESSION" | autofocus | step="5" | autocomplete="off" |

    <input type="text" placeholder="Enter text">
    <input type="password" placeholder="Enter password">
    <input type="email" placeholder="Enter email">
    <input type="url" placeholder="https://example.com">
    <input type="tel" placeholder="123-456-7890">
    <input type="search" placeholder="Search...">
    <input type="number" min="1" max="10" step="1">
    <input type="range" min="0" max="100" step="10">
    <input type="date">
    <input type="datetime-local">
    <input type="month">
    <input type="week">
    <input type="time">
    <input type="file" multiple>
    <input type="submit" value="Submit">
    <input type="reset" value="Reset">
    <input type="button" value="Click Me">
    <input type="image" src="button.png" alt="Image Button">
`,
    radioButton: `
    <form>
        <p>Choose your gender:</p>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label><br>

        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br>

        <input type="radio" id="other" name="gender" value="other">
        <label for="other">Other</label>
    </form>
    `,
    checkButton: `
    <form>
        <p>Select your hobbies:</p>
        <input type="checkbox" id="reading" name="hobby" value="reading">
        <label for="reading">Reading</label><br>

        <input type="checkbox" id="sports" name="hobby" value="sports">
        <label for="sports">Sports</label><br>

        <input type="checkbox" id="music" name="hobby" value="music">
        <label for="music">Music</label>
    </form>
    `,
    dropDown: `
    <form>
        <p>Select your country:</p>
        <select name="country" id="country">
            <option value="ph">Philippines</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="jp">Japan</option>
        </select>
    </form>
    `,
    fieldset: `
    <form>
    <fieldset>
        <legend>Personal Information</legend>
        
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br><br>
        
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
    </fieldset>
    </form>
`,


    header: `<header>Header content</header>`,
    footer: `<footer>Footer content</footer>`,
    section: `<section>Section content</section>`,
    article: `<article>Article content</article>`,

    id: `<div id="uniqueId">Content</div>`,
    class: `<p class="highlight">Highlighted text</p>`,
    src: `<img src="image.jpg" alt="Example Image">`,
    alt: `<img src="image.jpg" alt="Description of image">`,
    href: `<a href="https://example.com">Visit Example</a>`,
    value: `<input type="text" value="Default Value">`,
    placeholder: `<input type="text" placeholder="Enter your name">`,

    // CSS
    idSelector: `
        #myId { 
            color: red | blue | black | white | green; 
        }
    `,
    classSelector: `
        .myClass { 
            background-color: yellow | red | blue | transparent; 
        }
    `,
    elementSelector: `
        p { 
            font-size: 12px | 14px | 16px | 1em | 2rem; 
        }
    `,
    elementClassSelector: `
        p.highlight { 
            color: blue | red | green | black; 
        }
    `,
    childSelector: `
        div > p { 
            margin: 0 | 5px | 10px | auto; 
        }
    `,
    siblingSelector: `
        <!-- Possible HTML -->
        <!--h1 + p targets only the <p> immediately after an <h1> -->
        <h1>Heading 1</h1>
        <p>Paragraph after h1</p>

        <h2>Heading 2</h2>
        <p>Paragraph after h2</p>

        <h1>Another Heading</h1>
        <div>Div after h1 (won't match p selector)</div>

        <!-- CSS Example -->
        h1 + p { 
            font-weight: normal | bold | bolder | lighter; 
        }
    `,
    margin: `
        margin: 0 | 5px | 10px | auto;
    `,
    padding: `
        padding: 0 | 5px | 10px | 1em;
    `,
    border: `
        border: none | 1px solid black | 2px dashed red | 3px dotted blue;
    `,
    width: `
        width: auto | 100px | 50% | 100%;
    `,
    height: `
        height: auto | 50px | 100% | 200px;
    `,
    backgroundColor: `
        background-color: lightblue | red | green | transparent;
    `,
    color: `
        color: red | blue | black | white;
    `,
    fontSize: `
        font-size: 12px | 16px | 1em | 2rem;
    `,
    display: `
        display: block | inline | inline-block | flex | grid | none;
    `,
    position: `
        position: static | relative | absolute | fixed | sticky;
    `,
    flex: `
        display: flex; 
        justify-content: flex-start | center | flex-end | space-between | space-around;
    `,
    grid: `
        display: grid; 
        grid-template-columns: 1fr | 1fr 1fr | repeat(3, 1fr);
    `,
    hover: `
        a:hover { 
            color: blue | red | green; 
        }
    `,
    firstChild: `
        li:first-child { 
            font-weight: bold | normal; 
        }
    `,
    before: `
        p::before { 
            content: 'Note: ' | 'Tip: ' | ''; 
        }
    `,
    after: `
        p::after { 
            content: 'End' | '!' | ''; 
        }
    `,


    // jQuery
    idSelectorJQ: `
    $("#myId").css("color", "red");
    `,
    classSelectorJQ: `
    $(".myClass").hide();
    `,
    tagSelectorJQ: `
    $("p").text("Hello");
    `,
    clickEvent: `
    $("#btn").click(function() {
        alert("Clicked!");
    });
    `,
    mouseenterEvent: `
    $("#box").mouseenter(function() {
        $(this).css("background", "green");
    });
    `,
    mouseleaveEvent: `
    $("#box").mouseleave(function() {
        $(this).css("background", "blue");
    });
    `,
    keydownEvent: `
    $("#input").keydown(function(e) {
        console.log(e.key);
    });
    `,
    keyupEvent: `
    $("#input").keyup(function(e) {
        console.log(e.key);
    });
    `,
    keypressEvent: `
    $("#input").keypress(function(e) {
        console.log(e.key);
    });
    `,
    htmlMethod: `
    $("#div").html("<p>New HTML</p>");
    `,
    textMethod: `
    $("#div").text("New Text");
    `,
    valMethod: `
    $("#input").val("Some value");
    `,
    appendMethod: `
    $("#list").append("<li>Item</li>");
    `,
    prependMethod: `
    $("#list").prepend("<li>Start</li>");
    `,
    cssMethod: `
    $("#div").css("color", "blue");
    `,
    showMethod: `
    $("#div").show();
    `,
    hideMethod: `
    $("#div").hide();
    `,
    toggleMethod: `
    $("#div").toggle();
    `,
    ajaxFormSubmit: `
    $('#submitBtn').on('click', function () {
        const email = $('#email').val().trim();
        if (!email) {
            $('#message').html('<div class="alert alert-danger">Email is required.</div>');
        } else {
            // Replace with AJAX call
            $.ajax({
            url: '/register',
            type: 'POST',
            data: $('#regForm').serialize(),
            success: function (response) {
                $('#message').html('<div class="alert alert-success">' + response + '</div>');
            }
            });
        }
    });    
    `,
    ajaxFullExample:`
    // When the GET button is clicked
    $('#getBtn').on('click', function() {
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        data: { userId: 1 }, // query parameters
        success: function(response, status, xhr) {
          // Show the first 2 results
          $('#output').html("GET Success:<br>" + JSON.stringify(response.slice(0, 2), null, 2));
          console.log("GET success:", response);
        },
        error: function(xhr, status, error) {
          // Show error message
          $('#output').html("GET Error: " + xhr.status + " " + error);
          console.error("GET error:", error);
        }
      });
    });

    // When the POST button is clicked
    $('#postBtn').on('click', function() {
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          title: "Simple AJAX Post",
          body: "This was sent using jQuery AJAX.",
          userId: 10
        }), // body parameters
        success: function(response, status, xhr) {
          // Show server response
          $('#output').html("POST Success:<br>" + JSON.stringify(response, null, 2));
          console.log("POST success:", response);
        },
        error: function(xhr, status, error) {
          // Show error message
          $('#output').html("POST Error: " + xhr.status + " " + error);
          console.error("POST error:", error);
        }
      });
    });
    `,

    // Mongoose MongoDB
    mongoDbClient: `
    import { MongoClient } from "mongodb";

    // 1.) Establish the client database
    const mongoURI = process.env.MONGODB_URI
    const client = new  MongoClient(mongoURI);

    // 2.) Connect to database
    export function connectToMongo(callback) {
        client.connect().then( (client) => {
            return callback(); 
        }).catch( err => {
            callback(err);
        })
    }

    // 3.) Getter for the database
    export function getDb(dbName = process.env.DB_NAME) { // Defaults to DB_NAME if not provided
        return client.db(dbName);
    }

    // This is for graceful exit handling
    function signalHandler() {
        console.log("Closing MongoDB connection...");
        client.close();
        process.exit();
    }

    process.on('SIGINT', signalHandler);
    process.on('SIGTERM', signalHandler);
    process.on('SIGQUIT', signalHandler);
    `,

    modelMongoose: `
    import mongoose from "mongoose";

    // 1. Define the schema (mongoose.Schema)
    const flightSchema = new mongoose.Schema({
        airline: { type: String, required: true },
        flightNumber: { type: String, required: true, unique: true },
        passengerCount: { type: Number, required: true, min: 0 },
        createdAt: { type: Date, default: Date.now }
    });

    // 2. Create the model (table in SQL) (mongoose.model)
    const Flight = mongoose.model("Flight", flightSchema);

    export default Flight;
    `,

   reference: "MONGODB CRUD REFERENCE\n\nCREATE:\n  table.insertOne({ object });\n\nREAD:\n  table.findOne({ filter });\n  table.countDocuments({ filter });\n  table.aggregate([\n    { $match: { } },\n    { $group: { } }\n  ]).toArray();\n\nUPDATE:\n  table.updateOne(\n    { WHERE },\n    { $set: { ... } }\n  );\n  table.updateMany(\n    { active: false },\n    { $set: { status: 'inactive' } }\n  );\n  table.replaceOne(\n    { _id: new ObjectId('...') },\n    { name: 'Bob', email: 'bob@example.com', role: 'user' }\n  );\n  table.findOneAndUpdate(\n    { email: 'bob@example.com' },\n    { $set: { lastLogin: new Date() } },\n    { returnDocument: 'after' }\n  );\n\nDELETE:\n  table.deleteOne({ email: 'bob@example.com' });\n  table.deleteMany({ inactive: true });\n  table.findOneAndDelete({ email: 'old@example.com' });\n\nBONUS:\n  INDEXING:\n    table.createIndex({ email: 1 }, { unique: true });\n  DROPPING:\n    table.users.drop();\n  CHANGE LOGGING:\n    table.watch();\n    changeStream.on('change', (change) => console.log(change));\n\nOPERATORS:\n  | Operator | Meaning               | Example                                      |\n  | --------- | --------------------- | -------------------------------------------- |\n  | $eq      | Equal to              | { airline: { $eq: 'Delta' } }                |\n  | $ne      | Not equal to          | { airline: { $ne: 'Delta' } }                |\n  | $gt      | Greater than          | { passengerCount: { $gt: 100 } }             |\n  | $gte     | Greater than or equal | { passengerCount: { $gte: 100 } }            |\n  | $lt      | Less than             | { passengerCount: { $lt: 100 } }             |\n  | $lte     | Less than or equal    | { passengerCount: { $lte: 100 } }            |\n  | $in      | Value in array        | { airline: { $in: ['Delta', 'United'] } }    |\n  | $nin     | Value not in array    | { airline: { $nin: ['Delta', 'United'] } }   |",
   createMongo: `
    // CREATE (POST /user)
    router.post("/", async (req, res) => {
        try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: "name and email are required" });
        }

        const existing = await users.findOne({ email });
        if (existing) {
            return res.status(409).json({ message: "Email already exists" });
        }

        const result = await users.insertOne({
            name,
            email,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.status(201).json({ _id: result.insertedId, name, email });
        } catch (e) {
        console.error("POST /user error:", e);
        res.status(500).json({ message: "Internal server error" });
        }
    });
   `,

   getAllMongo:`
    // READ ALL (GET /user)
    router.get("/", async (req, res) => {
        try {
        const usersList = await users.find().sort({ createdAt: -1 }).toArray();
        res.json(usersList);
        } catch (e) {
        console.error("GET /user error:", e);
        res.status(500).json({ message: "Internal server error" });
        }
    });
   `,

   getOneMongo:`
    // READ ONE (GET /user/:id)
    router.get("/:id", async (req, res) => {
        try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        const user = await users.findOne({ _id: new ObjectId(id) });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
        } catch (e) {
        console.error("GET /user/:id error:", e);
        res.status(500).json({ message: "Internal server error" });
        }
    });
   `,

   updateOneMongo:`
    // UPDATE (PATCH /user/:id)
    router.patch("/:id", async (req, res) => {
        try {
        const { id } = req.params;
        const { name, email } = req.body;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        const updateFields = {};
        if (name) updateFields.name = name;
        if (email) updateFields.email = email;
        updateFields.updatedAt = new Date();

        const result = await users.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: updateFields },
            { returnDocument: "after" }
        );

        if (!result.value) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(result.value);
        } catch (e) {
        console.error("PATCH /user/:id error:", e);
        res.status(500).json({ message: "Internal server error" });
        }
    });
   `,

   deleteOneMongo:`
    // DELETE (DELETE /user/:id)
    router.delete("/:id", async (req, res) => {
        try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        const result = await users.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(204).send();
        } catch (e) {
        console.error("DELETE /user/:id error:", e);
        res.status(500).json({ message: "Internal server error" });
        }
    });
   `,

   getCollection:`
    const users = db.collection("users");
   `,

   // Handlebars
   forLoopHB:`
    {{#each items}}
    {{this}}
    {{/each}}

    {{@key}} = property name  
    {{this}} = property value
   `,

   conditionHB:`
    {{#if condition}}
    do this
    {{else}}
    otherwise this
    {{/if}}   
   `,

   rawHTMLHB:`
    {{variable}} → Escaped (safe HTML)

    {{{variable}}} → Raw HTML   
   `,

   partialHB:`
    {{> header}}   
    {{> userCard user}}

    <div class="card">
        <h2>{{name}}</h2>
        <p>{{email}}</p>
    </div>

    {
        user: { name: "Alice", email: "alice@example.com" }
    }

    // Sample of card:
    <div class="card">
        <h2>Alice</h2>
        <p>alice@example.com</p>
    </div>
   `,

   fullExpressHandlebar:`
    const express = require('express');
    const exphbs = require('express-handlebars');
    const path = require('path');
    const { connectToMongo, getDb } = require('./database');

    const app = express();
    const PORT = 3000;

    connectToMongo(err => {
        if (err) console.error('MongoDB connection failed:', err);
        else console.log('Connected to MongoDB');
    });

    const db = getDb('ccapdevho2');

    app.engine('hbs', exphbs.engine({
        extname: 'hbs',
        defaultLayout: 'main', // tell express-handlebars to use main.hbs
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        partialsDir: path.join(__dirname, 'views', 'partials')
    }));

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'views'));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req, res) => {
        res.status(200).render('practice', { title: 'Welcome page!' });
    });

    app.listen(PORT, () => {
        console.log('Server is running on port: ', PORT);
    });

   `,

    };
    

    // export default codeSnippets;