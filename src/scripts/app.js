async function f() {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Heres an async function set to show after 3 seconds. Refresh if you didnt catch that"), 3000)
  });

  const result = await promise;

  const node = document.createElement("P");
  const textnode = document.createTextNode(result);

  node.appendChild(textnode);

  document.querySelector('body').appendChild(node);
}

f();
