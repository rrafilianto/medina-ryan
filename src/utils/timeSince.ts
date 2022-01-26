const timeSince = (date: string) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;

  const formatDate = new Date(date);
  const elapsed = +new Date() - +formatDate;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else {
    return `${formatDate.getHours()}:${formatDate.getMinutes()} WIB, ${formatDate.toLocaleDateString()}`;
  }
};

export default timeSince;
