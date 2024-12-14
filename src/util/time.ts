export const getLocalTime = () => {
  return new Date().toLocaleDateString();
};

export const getLocalTimezone = () => {
  const timezone = Intl.DateTimeFormat("en", {
    timeZoneName: "short",
  });

  return timezone.format(new Date()).split(" ")[1];
};
