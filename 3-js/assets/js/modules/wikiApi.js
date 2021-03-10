//Carregamento de conteúdo ajax pela api da Wikipedia
export default function initWiki() {
  const divExtract = document.querySelector('.extract')

  let xhr = new XMLHttpRequest();
  let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein';

  xhr.open('GET', url);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let resultJson = JSON.parse(xhr.responseText)
      let resultExtract = resultJson.query.pages[736].extract;
      let textExtract = `<p>${resultExtract}</p>`
      divExtract.innerHTML = textExtract
    }
  };

  xhr.send();
}
