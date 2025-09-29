import codeSnippets from "./codeSnippets";

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
