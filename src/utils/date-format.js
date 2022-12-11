// Date Conversion
const dateHandler = (dateStr, isJoin) => {
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

  let dob = new Date(dateStr);
  // let arr = dateStr.split("/");
  let month = monthNames[dob.getMonth()];
  let day = dob.getDay();
  let year = dob.getFullYear();

  if (isJoin) return month + " " + day + ", " + year;
  else return month + " " + year;
};

const getCurrentDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const today = new Date();
  const year = today.getFullYear();
  let mm = today.getMonth();
  let day = today.getDate();

  const res = months[mm] + " " + day + ", " + year;
  return res;
};

export default dateHandler;
export { getCurrentDate };
