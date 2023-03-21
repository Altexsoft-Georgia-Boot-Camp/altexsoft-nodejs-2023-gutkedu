(function ($, doc) {
  "use strict";

  var app = (function () {
    const BASE_URL = "http://localhost:3333";

    return {
      init: function () {
        setTimeout(() => {
          app.initButtons();
        }, 300);
      },

      initButtons: function initButtons() {
        $('[data-js="searchButton"]').on("click", app.handleSearchButton);
      },

      handleSearchButton: async function handleSearchButton() {
        let $authorInput = $('[data-js="authorInput"]').get();
        let $repoInput = $('[data-js="repoInput"]').get();

        try {
          const { data } = await axios.get(
            `${BASE_URL}/github/repo/?owner=${$authorInput.value}&repo=${$repoInput.value}`
          );

          console.log(data);

          let $tableBody = $('[data-js="tableBody"]').get();
          let $owner = doc.createElement("td");
          $owner.innerHTML = data.owner.login;
          $owner.classList.add("border", "px-4", "py-2");
          let $name = doc.createElement("td");
          $name.innerHTML = data.name;
          $name.classList.add("border", "px-4", "py-2");
          let $description = doc.createElement("td");
          $description.innerHTML = data.description;
          $description.classList.add("border", "px-4", "py-2");
          let $row = doc.createElement("tr");

          $row.appendChild($owner);
          $row.appendChild($name);
          $row.appendChild($description);
          $tableBody.appendChild($row);
        } catch (error) {
          alert("Error on search");
        }
      },
    };
  })();

  app.init();
})(window.DOM, document);
