function createDiv(menu)
{
  var div = document.createElement("div");
  div.style.setProperty("display", "inline-block");
  for (var i = 0; i < menu.length; i++) {
    var elem = menu[i];
    var inner = document.createElement("div");
    inner.classList.add("menu-item");
    if (typeof elem === 'string') {
      inner.innerHTML = elem;
    } else {
      if (elem.url) {
        inner.innerHTML = '<a href="' + elem.url + '">' + elem.title + '</a>';
      } else {
        inner.innerHTML = elem.title;
      }
      if (elem.elements) {
        inner.submenu = createDiv(elem.elements);
        inner.submenu.style.setProperty("display", "none");
        inner.submenu.style.setProperty("border","1px solid black");
        inner.appendChild(inner.submenu);
        inner.addEventListener("mouseenter", function(inner) {
          return function() {
            inner.submenu.style.setProperty("display", "inline-block");
            inner.submenu.style.setProperty("position", "fixed");
            var rect = inner.getBoundingClientRect();
            inner.submenu.style.top = rect.top;
            inner.submenu.style.left = rect.right;
          }
        }(inner));
        inner.addEventListener("mouseleave", function(inner) {
          return function() {
            inner.submenu.style.setProperty("display", "none");
          }
        }(inner));
      }
    }
    div.appendChild(inner);
  }
  return div;
}

var menu = 
[{title: "HOME", url:"index.html"},
 {
   title:"ТЕКСТЫ",
   elements:[
      {
         title:"О РУССКОМ ЯЗЫКЕ",
         elements:[
            {
               title:"заумная поэзия",
               elements:[
                  {title: "тексты", url: "1-1-texts.html"},
                  "справка об авторах",
                  "историческая справка",
                  {title:"вопросы и задания к текстам", url:"1-1-questions.html"},
                  "иллюстрации к текстам"
               ]
            },
            {
               title:"скороговорки",
               elements:[
                  "тексты",
                  "аудиотексты"
               ]
            }
         ]
      },
      {
         title:"О РУССКОЙ ПРИРОДЕ",
         elements:[
            {
               title:"заумная поэзия",
               elements:[
                  "тексты",
                  "справка об авторах",
                  "историческая справка",
                  "вопросы и задания к текстам",
                  "иллюстрации к текстам"
               ]
            },
            {
               title:"скороговорки",
               elements:[
                  "тексты",
                  "аудиотексты"
               ]
            }
         ]
      },
      {
         title:"О РУССКОМ ХАРАКТЕРЕ",
         elements:[
            {
               title:"заумная поэзия",
               elements:[
                  "тексты",
                  "справка об авторах",
                  "историческая справка",
                  "вопросы и задания к текстам",
                  "иллюстрации к текстам"
               ]
            },
            {
               title:"скороговорки",
               elements:[
                  "тексты",
                  "аудиотексты"
               ]
            }
         ]
      },
      {
         title:"О ДЕТСТВЕ",
         elements:[
            {
               title:"заумная поэзия",
               elements:[
                  "тексты",
                  "справка об авторах",
                  "историческая справка",
                  "вопросы и задания к текстам",
                  "иллюстрации к текстам"
               ]
            },
            {
               title:"скороговорки",
               elements:[
                  "тексты",
                  "аудиотексты"
               ]
            }
         ]
      },
      {
         title:"О ЛЮБВИ",
         elements:[
            {
               title:"заумная поэзия",
               elements:[
                  "тексты",
                  "справка об авторах",
                  "историческая справка",
                  "вопросы и задания к текстам",
                  "иллюстрации к текстам"
               ]
            },
            {
               title:"скороговорки",
               elements:[
                  "тексты",
                  "аудиотексты"
               ]
            }
         ]
      },
      {
         title:"О ВОЙНЕ",
         elements:[
            {
               title:"заумная поэзия",
               elements:[
                  "тексты",
                  "справка об авторах",
                  "историческая справка",
                  "вопросы и задания к текстам",
                  "иллюстрации к текстам"
               ]
            },
            {
               title:"скороговорки",
               elements:[
                  "тексты",
                  "аудиотексты"
               ]
            }
         ]
      },
      {
         title:"О СМЕРТИ",
         elements:[
            {
               title:"заумная поэзия",
               elements:[
                  "тексты",
                  "справка об авторах",
                  "историческая справка",
                  "вопросы и задания к текстам",
                  "иллюстрации к текстам"
               ]
            },
            {
               title:"скороговорки",
               elements:[
                  "тексты",
                  "аудиотексты"
               ]
            }
         ]
      },
      {
         title:"О СУДЬБЕ",
         elements:[
            {
               title:"заумная поэзия",
               elements:[
                  "тексты",
                  "справка об авторах",
                  "историческая справка",
                  "вопросы и задания к текстам",
                  "иллюстрации к текстам"
               ]
            },
            {
               title:"скороговорки",
               elements:[
                  "тексты",
                  "аудиотексты"
               ]
            }
         ]
      },
      {
         title:"О МЕЛОЧАХ ЖИЗНИ",
         elements:[
            {
               title:"заумная поэзия",
               elements:[
                  "тексты",
                  "справка об авторах",
                  "историческая справка",
                  "вопросы и задания к текстам",
                  "иллюстрации к текстам"
               ]
            },
            {
               title:"скороговорки",
               elements:[
                  "тексты",
                  "аудиотексты"
               ]
            }
         ]
      },
      {
         title:"О РУССКОЙ ИСТОРИИ",
         elements:[
            {
               title:"заумная поэзия",
               elements:[
                  "тексты",
                  "справка об авторах",
                  "историческая справка",
                  "вопросы и задания к текстам",
                  "иллюстрации к текстам"
               ]
            },
            {
               title:"скороговорки",
               elements:[
                  "тексты",
                  "аудиотексты"
               ]
            }
         ]
      }
   ]
},
{
   title:"РУССКИЙ<br>АЛФАВИТ",
   elements:[
      {
         title:"о русском алфавите",
         url:"alphabet-about.html"
      },
      {
         title:"алфавит",
         url:"alphabet.html"
      },
      {
         title:"образы",
         url:"alphabet-imagery.html"
      },
      {
         title:"Прописи",
         url:"cursive.pdf"
      }
   ]
},
"ГРАММАТИКА И<br>ОРФОГРАФИЯ",
"СТИЛИСТИКА",
"СЛОВАРЬ",
"СПРАВОЧНОЕ<br>БЮРО"
];

window.addEventListener("load", function() {
  var div = createDiv(menu);
  div.style.setProperty("position", "fixed");
  div.style.setProperty("border","1px solid black");
  div.style.left = "0px";
  div.style.top = "0px";
  div.style.setProperty("margin-top", "20px");
  document.body.appendChild(div);
});
