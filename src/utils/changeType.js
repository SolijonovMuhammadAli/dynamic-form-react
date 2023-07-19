function changeType(data) {
  return typeof data === "string" ? JSON.parse(data) : JSON.stringify(data);
}

export default changeType;
