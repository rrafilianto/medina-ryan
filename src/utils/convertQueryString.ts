const covertQueryString = (data: any) => {
  const query = Object.keys(data)
    .map((key) => `${key}=${data[key]}`)
    .join("&");

  const params = query.replaceAll(" ", "+");

  return params;
};

export default covertQueryString;
