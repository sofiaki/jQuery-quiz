function component() {
  //Header div
  const container = $("<div class='container'></div>");

  //Restaurant's name
  const titleDiv = $("<div></div>");
  titleDiv.className = "title-div";

  const title = document.createElement("h1");
  title.textContent = "Sofia's bistro";
  title.style.textAlign = "center";
  titleDiv.append(title);
  container.append(titleDiv);

  //Tabs section
  const tabs = $("<div></div>");
  tabs.className = "tabs";

  const tabButtons = $("<div class='buttons'></div>");

  const mainButton = $("<button class='tab-button'>Main</button>");
  mainButton.click(() => showTab("#main"));
  tabButtons.append(mainButton);

  const menuButton = $("<button class='tab-button'>Menu</button>");
  menuButton.click(() => showTab("#menu"));
  tabButtons.append(menuButton);

  tabs.append(tabButtons);
  container.append(tabs);

  tabs.append(main());
  tabs.append(menu());

  const element = $("<div></div>");
  element.append(container);
  return element;
}

function main() {
  const mainContent = $("<div id='main' class='tab-div show'></div>");

  const text = $("<h1>A magical travel through flavors</h1>");

  mainContent.append(text);
  return mainContent;
}

function menu() {
  const menu = $("<div id='menu' class='tab-div'></div>");

  const contents = $("<table class='menu'></table>");
  contents.html(
    "<tr><th>Dish</th><th>Price</th></tr> <tr><td>Soupe à L’oignon</td> <td>10</td></tr><tr>    <td>Boeuf Bourguignon</td>    <td>15</td></tr><tr><td>Tarte Tatin</td><td>8</td></tr>"
  );
  menu.append(contents);
  return menu;
}

function showTab(id) {
  console.log(id);
  $(".tab-div").toggleClass("show");
}

$("#content").append(component());
