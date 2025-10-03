function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
