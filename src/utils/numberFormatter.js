export function formatNumber(phoneNumber) {
  //1. Check if the number starts with zero
  if (phoneNumber.startsWith("0")) {
    // Split and replace the first zero with 254
    var phone = phoneNumber.replace(/0/, "254");

    return phone;
  }

  return phoneNumber;
}
