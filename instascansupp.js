// Access the device camera
let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

// Scan the QR code
scanner.addListener('scan', function (content) {
  // Set the recipientUser address to the scanned QR code
  let recipientUser = content;
  // Call the solidity function to send tokens
  sendTokens(recipientUser);
});
