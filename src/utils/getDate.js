function GetDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[currentDate.getMonth()];

  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
}

export default GetDate;
