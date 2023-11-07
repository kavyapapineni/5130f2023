function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const email = "examplegmail.com";
  if (validateEmail(email)) {
    console.log("Email is valid.");
  } else {
    console.log("Email is not valid.");
  }

  function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }
  const phoneNumber = "123456790";
  if (validatePhoneNumber(phoneNumber)) {
    console.log("Phone number is valid.");
  } else {
    console.log("Phone number is not valid.");
  }

  function validateDomain(domain) {
    const domainRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2,})$/;
    return domainRegex.test(domain);
  }
  const domain = "http:example.com";
  if (validateDomain(domain)) {
    console.log("Domain is valid.");
  } else {
    console.log("Domain is not valid.");
  }
  