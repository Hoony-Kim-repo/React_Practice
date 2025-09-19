const loadEvent = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...Error case
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export { loadEvent };
