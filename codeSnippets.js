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
    };

    // export default codeSnippets;