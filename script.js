const codeSnippets = {
    // HTML
    div: `<div id="example">Hello World</div>`,
    span: `<span class="highlight">Text</span>`,
    p: `<p>This is a paragraph.</p>`,
    a: `<a href="https://example.com">Link</a>`,
    img: `<img src="image.jpg" alt="Example Image">`,
    form: `<form id="myForm"><input type="text" placeholder="Name"><button>Submit</button></form>`,
    input: `<input type="text" id="username" placeholder="Enter username">`,
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

// Handle clicks after DOM's ready
$(function() {
    $("code[data-key]").on('click', function() {
        const key = $(this).data("key");
        const snippet = codeSnippets[key] || "Snippet not found";

        // Find the nearest .section container and its .showSnippet box
        const section = $(this).closest('.section');

        let target = null;
        target = section.find('.showSnippet').first();
        target.text(snippet).slideDown();
    });
});
