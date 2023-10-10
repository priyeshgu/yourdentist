
  // Get references to the input elements and their corresponding custom placeholders
  const fullNameInput = document.getElementById('fullName');
  const fullNamePlaceholder = document.getElementById('.form-name-placeholder1');

  const emailInput = document.getElementById('email');
  const emailPlaceholder = document.getElementById('form-name-placeholder2');

  const messageInput = document.getElementById('message');
  const messagePlaceholder = document.getElementById('form-name-placeholder3');

  // Function to hide custom placeholder
  function hidePlaceholder(placeholder) {
    placeholder.style.display = 'none';
  }

  // Function to show custom placeholder
  function showPlaceholder(placeholder) {
    if (placeholder.style.display !== 'flex') {
      placeholder.style.display = 'flex';
    }
  }

  // Add focus event listeners to inputs
  fullNameInput.addEventListener('focus', function () {
    hidePlaceholder(fullNamePlaceholder);
  });

  emailInput.addEventListener('focus', function () {
    hidePlaceholder(emailPlaceholder);
  });

  messageInput.addEventListener('focus', function () {
    hidePlaceholder(messagePlaceholder);
  });

  // Add input event listeners to inputs
  fullNameInput.addEventListener('input', function () {
    if (fullNameInput.value.trim() === '') {
      showPlaceholder(fullNamePlaceholder);
    } else {
      hidePlaceholder(fullNamePlaceholder);
    }
  });

  emailInput.addEventListener('input', function () {
    if (emailInput.value.trim() === '') {
      showPlaceholder(emailPlaceholder);
    } else {
      hidePlaceholder(emailPlaceholder);
    }
  });

  messageInput.addEventListener('input', function () {
    if (messageInput.value.trim() === '') {
      showPlaceholder(messagePlaceholder);
    } else {
      hidePlaceholder(messagePlaceholder);
    }
  });

  // Add blur event listeners to inputs
  fullNameInput.addEventListener('blur', function () {
    if (fullNameInput.value.trim() === '') {
      showPlaceholder(fullNamePlaceholder);
    }
  });

  emailInput.addEventListener('blur', function () {
    if (emailInput.value.trim() === '') {
      showPlaceholder(emailPlaceholder);
    }
  });

  messageInput.addEventListener('blur', function () {
    if (messageInput.value.trim() === '') {
      showPlaceholder(messagePlaceholder);
    }
  });
