import "./styles.css";

const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c";
const container = document.querySelector("#app");
const imagePath = `https://image.tmdb.org/t/p/w500/`;
const func = async () => {
  const response = await fetch(url);
  const res = await response.json();

  res.results.forEach((element) => {
    const ele = document.createElement("img");

    ele.classList.add("images");
    ele.src =
      "https://images.unsplash.com/photo-1521315807607-8220d719f0e4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=558cae1f662f20ea31f3ffda21a766f8";
    ele.dataset.src = imagePath + element.poster_path;
    container.appendChild(ele);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio) {
        console.log(entry);
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  });
  console.log("hey");
  const imgsToBeObserved = document.querySelectorAll(".images");
  imgsToBeObserved.forEach((img) => {
    observer.observe(img);
  });
};
func();
/*fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res.results[0].poster_path);
    res.results.forEach((element) => {
      const ele = document.createElement("img");
      ele.classList.add("images")
      ele.src =
        "https://images.unsplash.com/photo-1521315807607-8220d719f0e4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=558cae1f662f20ea31f3ffda21a766f8";
      ele.dataset.src = imagePath + element.poster_path;
      container.appendChild(ele);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
           console.log(entry);
           observer.unobserve(entry.target)
        }
      });
    });
    
    const imgsToBeObserved=document.querySelectorAll("images");
    console.log(imgsToBeObserved)
    observer.observe(container);

  });*/
