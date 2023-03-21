(function ($, doc, win) {
  "use strict";

  var app = (function () {
    const BASE_URL = "http://localhost:3333";

    return {
      init: function () {
        setTimeout(() => {
          app.initButtonsForIndex();
          app.handleAlreadySearched();
        }, 300);
      },

      initButtonsForIndex: function initButtons() {
        $('[data-js="searchButton"]').on("click", app.handleSearchButton);
      },

      handleAlreadySearched: async function handleAlreadySearched() {
        try {
          const { data } = await axios.get(`${BASE_URL}/github/searched`);

          let $alreadySearched = $('[data-js="alreadySearchedTable"]').get();
          $alreadySearched.innerHTML = `
          <table class="table-auto">
              <thead>
                <tr>
                  <th class="px-4 py-2" align="center">Repository</th>
                  <th class="px-4 py-2" align="center">Counter</th>
                </tr>
              </thead>
              <tbody data-js="alreadySearchedTableBody">
              </tbody>
          `;

          let $alreadySearchedTableBody = $(
            '[data-js="alreadySearchedTableBody"'
          ).get();

          if (data && data.length > 0) {
            data.forEach((d) => {
              $alreadySearchedTableBody.innerHTML += `
                <tr>
                  <td class="px-4 py-2" align="center">${d.repo}</td>
                  <td class="px-4 py-2" align="center">${d.counter}</td>
                </button> </td>
                </tr>
              `;
            });
          }

          app.handleAlreadySearched();
        } catch (error) {
          console.log(error);
        }
      },

      handleCommitButton: async function handleCommitButton() {
        try {
          let $tableInputOwner = $('[data-js="tableInputOwner"]').get();
          let $tableInputName = $('[data-js="tableInputName"]').get();
          const { data } = await axios.get(
            `${BASE_URL}/github/commits?owner=${$tableInputOwner.textContent}&repo=${$tableInputName.textContent}`
          );

          let $commitsTable = $('[data-js="commitsTable"]').get();

          $commitsTable.innerHTML = `
          <div class="grid grid-cols-1 gap-4 border-2 border-green-500 px-4 py-5" data-js="commitsTable">
          <table class="table-auto ">
          <thead>
            <tr>
              <th class="px-4 py-2">Author</th>
              <th class="px-4 py-2">Email</th>
              <th class="px-4 py-2">Date</th>
              <th class="px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody data-js="tableCommitBody">
          </tbody>
          </div>
          `;

          let $commitsTableBody = $('[data-js="tableCommitBody"]').get();
          if (data && data.length > 0) {
            data.forEach((d) => {
              $commitsTableBody.innerHTML += `
                <tr>
                  <td class="px-4 py-2" align="center">${d.commit.author}</td>
                  <td class="px-4 py-2" align="center">${d.commit.email}</td>
                  <td class="px-4 py-2" align="center">${d.commit.date}</td>
                  <td class="px-4 py-2" align="center">${d.message}</td>
                </tr>
              `;
            });
          }
        } catch (error) {
          console.log(error);
        }
      },

      handleSearchButton: async function handleSearchButton() {
        let $authorInput = $('[data-js="authorInput"]').get();
        let $repoInput = $('[data-js="repoInput"]').get();

        try {
          const { data } = await axios.get(
            `${BASE_URL}/github/repo/?owner=${$authorInput.value}&repo=${$repoInput.value}`
          );

          let $tableInput = $('[data-js="tableInput"]').get();
          $tableInput.innerHTML = `
          <table class="table-auto ">
          <thead>
            <tr>
              <th class="px-4 py-2">Owner</th>
              <th class="px-4 py-2" >Repository</th>
              <th class="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody data-js="tableBody">
            <tr>
              <td class="border px-4 py-2" data-js="tableInputOwner">${data.owner.login}</td>
              <td class="border px-4 py-2" data-js="tableInputName">${data.name}</td>
              <td class="border px-4 py-2">${data.description}</td>
              <td><button type="button" data-js="commitButton" class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
              Commits
            </button> </td>
            </tr>
          </tbody>
          `;
          $('[data-js="commitButton"]').on("click", app.handleCommitButton);
        } catch (error) {
          alert("Repository not found");
        }
      },
    };
  })();

  app.init();
})(window.DOM, document, window);
