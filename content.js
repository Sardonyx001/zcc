// Create a Turndown service instance
const turndownService = new TurndownService();

// Configure Turndown to preserve line breaks
turndownService.addRule("lineBreaks", {
  filter: ["br"],
  replacement: function () {
    return "\n";
  },
});

// // Configure Turndown to handle pre and code blocks
// turndownService.addRule("codeBlocks", {
//   filter: ["pre", "code"],
//   replacement: function (content) {
//     return "```\n" + content + "\n```";
//   },
// });

// Function to create copy button
function createCopyButton() {
  const button = document.createElement("button");
  button.className = "copy-button";
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  `;
  return button;
}

// Function to handle copying comment content
function copyCommentContent(comment) {
  const content = comment.innerHTML;
  const markdown = turndownService.turndown(content);

  navigator.clipboard.writeText(markdown).then(() => {
    // Visual feedback
    const button = comment.querySelector(".copy-button");
    const originalHTML = button.innerHTML;
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="green">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    `;

    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);
  });
}

// Function to add copy buttons to comments
function addCopyButtonsToComments() {
  const comments = document.querySelectorAll(".zd-comment");

  comments.forEach((comment) => {
    // Only add button if it doesn't already exist
    if (!comment.querySelector(".copy-button")) {
      const copyButton = createCopyButton();
      copyButton.addEventListener("click", () => copyCommentContent(comment));
      comment.appendChild(copyButton);
    }
  });
}

// Initial run
addCopyButtonsToComments();

// Set up a MutationObserver to handle dynamically loaded comments
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      addCopyButtonsToComments();
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });
