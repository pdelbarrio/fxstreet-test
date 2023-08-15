export function formatPublicationTime(publicationTime) {
  const options = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedTime = new Date(publicationTime).toLocaleDateString(
    "en-US",
    options
  );
  return formattedTime;
}
