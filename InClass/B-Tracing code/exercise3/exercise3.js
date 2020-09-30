const getRepos = (repo) => {
   fetch(`https://api.github.com/users/${repo}/repos`)  
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.map(function(rep) {
		    console.log(rep.name);
        var myElement = document.querySelector("#main");
        var paragraph = document.createElement("p");
        paragraph.innerHTML = rep.name 
        myElement.appendChild(paragraph);
      });
    });
};

const migracodeRepos = getRepos('Raminkeshavarzi');
console.log("Loading...");

var myElement = document.querySelector("#main");
   var paragraph = document.createElement("p"); 
   myElement.appendChild(paragraph);

//Task1. Fix the code
//Task2. Create a <p> for each repository
