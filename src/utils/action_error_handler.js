export const actionhandleError = (error) => {
  if (error.response) {
    const errorMessage = `${error.response.status} - ${error.response.data.message}`;
    console.error(errorMessage);
    alert(errorMessage);
  } else {
    console.error("Server connection error:", error.message);
    alert("A server connection error occurred. Please try again later.");
  }
};
