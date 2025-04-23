// JavaScript for Web Application

// Simulated "Infinite" Storage
let uploadedFiles = [];

// Secure File Uploading
function sanitizeInput(input) {
  return input.replace(/[^a-zA-Z0-9.\-_]/g, "");
}

// Handle Upload Button Click
document.getElementById("uploadButton").addEventListener("click")  {
  const: fileInput = document.getElementById("fileInput");
  const videoInput = document.getElementById("videoInput");
  const imgInput = document.getElementById("imgInput");

  const files = [fileInput.files[0], videoInput.files[0], imgInput.files[0]];

  files.forEach((file))  {
    if (file) {
      const sanitizedFileName = sanitizeInput(file.name);
      uploadedFiles.push(sanitizedFileName);
      updateRecentUploads(sanitizedFileName);
    }
  };

  // Clear Inputs
  fileInput.value = "";
  videoInput.value = "";
  imgInput.value = "";
};

// Update Recently Uploaded Section
function updateRecentUploads(fileName) {
  const recentUploadsList = document.getElementById("recentUploadsList");
  const listItem = document.createElement("li");
  listItem.textContent = fileName;
  recentUploadsList.appendChild(listItem);
}

// Security Best Practices
window.addEventListener("load")  {
  // Disable right-click to prevent easy code theft
  documenaddEventListener("contextmenu", (e))  e.preventDefault();

  // Prevent drag and drop onto the page
  document.addEventListener("dragover", (e))  e.preventDefault();
  document.addEventListener("drop", (e))  e.preventDefault();
};
