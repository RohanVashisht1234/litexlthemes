// Assuming the element IDs 'default-message' and 'success-message' exist in your HTML
const $my_toast = document.getElementById('my_toast');
const $copyButton = document.getElementById('copy-button'); // Assuming you have a copy button

// Function to update on copy callback
const updateOnCopyCallback = (clipboard) => {
    showSuccess();

    // Reset to default state
    setTimeout(() => {
        resetToDefault();
    }, 2000);
};

// Function to show success message
const showSuccess = () => {
    $my_toast.classList.remove('hidden');
};

// Function to reset to default state
const resetToDefault = () => {
    $my_toast.classList.add('hidden');
};

// Function to copy text to clipboard
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            updateOnCopyCallback();
        })
        .catch((error) => {
            console.error('Unable to copy to clipboard: ', error);
        });
};

// Event listener for the copy button
$copyButton.addEventListener('click', () => {
    const textToCopy = document.getElementById("copy-text").value; // Replace 'Your text here' with the text you want to copy
    copyToClipboard(textToCopy);
});

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
const $download_button = document.getElementById("download_lua_file");

const $codecopyButton = document.getElementById("copy_lua_file");
const $get_data_from_here = document.getElementById("get_data_from_here");

$codecopyButton.addEventListener('click', () => {
    const textToCopy = get_data_from_here.innerText; // Replace 'Your text here' with the text you want to copy
    copyToClipboard(textToCopy);
});

$download_button.addEventListener('click', () => {
    const textToDownload = get_data_from_here.innerText; // Replace 'Your text here' with the text you want to copy
    download(document.getElementById("get_filename_from_here").innerText, textToDownload);
});

