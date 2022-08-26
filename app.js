window.onload = function () {
  var token;

  var requestURL = request.URL;
  console.log(requestURL);
  var queryString = requestURL.substring(requestURL.indexOf("?") + 1, requestURL.length);
  console.log(queryString);
  var params = queryString.split("&");
  console.log(params);
  for (var i = 0; i < params.length; i++) {
    var name = params[i].substring(0, params[i].indexOf("="));
    var value = params[i].substring(params[i].indexOf("=") + 1, params[i].length);

    if (isNaN(parseInt(value))) {
      params[i] = params[i].replace(value, "'" + value + "'");
    }
    console.log(eval(params[i]));
    eval(params[i]);
  }
  var ifrm = document.createElement("iframe");
  console.log(token);
  var url = "http://amokachi.hostmycalls.com:1903/?token=" + token;
  console.log(url);
  ifrm.setAttribute("src", url);

  ifrm.style.position = "fixed";
  ifrm.style.width = "100%";
  ifrm.style.height = "100%";
  ifrm.style.bottom = "0";
  ifrm.style.right = "0";
  ifrm.style.overflow = "hidden";

  document.body.appendChild(ifrm);
};
