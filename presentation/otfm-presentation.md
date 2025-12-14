
# Our Travel Footprint Magazine



---

## A Web Communication project 

### by Claudia Santamaria 

---

![](./images/front-page.jpg)

---

## Introductory description

“Our Travel Footprint Magazine” represents a fictional digital magazine brand designed to create a space where people can relate shared values and experiences of sustainable tourism.

---

### Focus  
The project provides content for travelers exploring different types of destinations with an emphasis on minimizing environmental impact and promoting sustainable and responsible tourism.

---

### Purpose  
Its main purpose is to inform and inspire travelers about ways to explore the world while reducing environmental harm. 
The site seeks to inform and update travelers who are environmentally sensible and caring.

---

### Target Audience  
The website is suitable for all ages, from younger to older students and travelers, families, professionals.
Its primary audience includes travelers who value sustainability and want to make a positive environmental impact while exploring new places.

---

## General structure description  

Design: eco-friendly and natural atmosphere through colors images and layouts

#### Sections:  

  - Our Inspiration
  - About us
  - Sustainable tips, subdivided into: 
  - Mountain
  - Sea 
  - City  
  - Accommodation  
  
  
---

### Then:

  - Workshops
  - Meet our team
  - Subscription


These sections help users navigate easily and find relevant information on different aspects of sustainable travel.  

---

### Deeper in detail: Technology Used and Lessons Learnt

The website is created by the combination of HTML, CSS, and JavaScript files.

As we have learned during this course, each one plays a specific role: 

- HTML structures the content
- CSS defines the design and layout
- JavaScript adds interactivity 

---

### HTML - Main structure:
 
```html
<!DOCTYPE html>
<head> 
<body>
```

```html
<header>
<nav>
<main> 
<form>  
<footer>
```

```html
</body>
</html>
```

---

## Inside HTML

'head' section - CSS styles links:

```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/
  css/bootstrap.min.css" rel="stylesheet">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons
  @1.10.5/font/bootstrap-icons.css" rel="stylesheet">

  <link rel="stylesheet" href="./mystyle.css"> 
```

---

Same with Javascript:

```html
<script src="https://cdn.jsdelivr.net/npm/
bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script src="./myjava.js"></script>
```

---

Nav bar: 
  
```html
 <nav class="navbar navbar-expand-lg" 
 style="background-color: rgb(6, 83, 6)">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" 
    id="navbarTogglerDemo02">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" 
          href="#about-us-text">About us</a>
        </li>
        ...
      </ul>
      </div>
</nav>
```

---

Carousel:

```html
<div id="carouselExampleCaptions" class="carousel slide"
data-bs-ride="carousel">
<div class="carousel-item">
<img src="./images/3 slide.jpg" class="d-block-w-100" 
alt="Eco-Tourism">
<div class="carousel-caption d-none d-md-block">
<h5> <a class="nav-link" href="#test-your-travel-footprint-text">
Test Your Travel Footprint! </a> </h5>
<p>Find out how much your adventures impact the planet</p>
...
</div>
</div>
</div>
```

---

Menu boxes:

```html
<h3 id="sustainable-tips-text" class="menu-box">Sustainable 
tips </h3> 

<h3 id="about-us-text" class="menu-box">About us</h3>
<h3 id="workshops-text" class="menu-box">Workshops</h3>
<h3 id="meet-our-team-text" class="menu-box">Meet our team</h3>
<h3 id="subscription-text" class="menu-box">Subscription</h3>
<h3 id="test-your-travel-footprint-text" class="menu-box">
Test your travel footprint</h3>

```

---

Video:

```html
<video class="d-block w-100" autoplay muted loop playsinline>
  <source src="./subfolder-av/tourism-un-video.mp4" 
  type="video/mp4">
</video>
```
---



Grid:

```html
  <main>
    <div class="image-thumbnail">
    <img src="https://sustainabletravel.org/wp-content/uploads/
    Mountain-recreation-1200x800-1-1.webp">
      <div class="image-caption">
        <h4 id="mountainTitle" class="caption-title">
        Mountain</h4>
        <h5 id="readMoreMountain">Click <em style=
        "text-decoration: underline;">here</em> to read.</h5>
      <div id="mountainText" class="d-none">
        <p> text ... </p>
    </div>
  </main>
```

---

Sustainability test "Test your Travel Footprint":

```html
<form id="test-form">
 <div class="mb-3">
            <label class="form-label">1 question</label>
              <select class="form-select" id="q1">
                <option value="0">Plane</option>
                <option value="1">Car</option>
                <option value="3">Train/Bus</option>
                <option value="5">Bike/Walk</option>
              </select>
  </div>
  ...
</form>
```

---

![](./images/test.jpg)

---

Subscription:

```html
<form id="contact-form" class="row gx-3 gy-2 align-items" 
style="display: flex; justify-content: center;">
  <div class="col-sm-3">
    <label class="visually-hidden" 
    for="specificSizeInputName">Name</label>
      <input type="text" class="form-control" 
      id="specificSizeInputName" placeholder="Name"></div>

  <div class="col-auto">
    <button type="submit" class="btn btn-primary" 
    id="submit-btn" style="background-color: rgb(6, 83, 6);"
    >Submit</button>
    </div>
    </div>
</form>
```
---

Footer: 

```html
<footer class="bi-bi-social">
    <i class="bi bi-person-circle">otfmagazine@gmail.com</i>
    <i class="bi bi-telephone">+39 3569127356</i>
    <i class="bi bi-facebook">otf magazine</i>
    <i class="bi bi-instagram">otf_magazine</i>
    <i class="bi bi-linkedin">otf magazine</i>
</footer>
```

![](./images/footer.jpg)

---


## CSS

CSS defines the design and layout 

## Inside CSS

```html
 <link rel="stylesheet" href="./mystyle.css"> 
```

---

### Main elements

A 2x2 grid:
  
```css
main {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(2, 1fr);    
    gap: 0;                                
    height: 150vh;  
  }
```

---

### Very relevant! Fluid images and text sizes:

For the images:

```css
@media (max-width: 1024px) {
  .carousel-item img {
    height: 50vh;
  }
}

@media (max-width: 500px) {
  .carousel-item img {
    height: 40vh;
  }
}
```

---

For the text:

```css
@media (max-width: 1024px) {
  .image-caption p,
  .image-caption h5 {
    font-size: 0.8rem;
  }
}


@media (max-width: 500px) {
  .image-caption p,
  .image-caption h5 {
    font-size: 0.6rem;
  }
}
```
---

![](./images/fluid%20images.jpg)

---

![](./images/fluid%20text.jpg)

---

### The fade-in effect:

```css
.image-caption {
opacity: 0;  
transition: opacity 1s ease;
}

.image-caption:hover {
opacity: 1;
}
```

This gives the impression that the image gets darker and focuses on the text.

---

![](./images/text.jpg)


---

## Javascript

JavaScript adds interactivity 

## Inside Javascript

```html
<script src="https://cdn.jsdelivr.net/npm/
bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script src="./myjava.js"></script>
```

---

Text in each grid:


```js
document.addEventListener("DOMContentLoaded", function () {

 function showSection(textId, titleId, clickId) {

  document.getElementById(textId).classList.remove("d-none");

  document.getElementById(titleId).style.display = "none";
  document.getElementById(clickId).style.display = "none";
    }
```

---

Examples: 

```js
    // Mountain
    document.getElementById("readMoreMountain")
    .addEventListener("click", function () {
      showSection("mountainText", "mountainTitle", 
        "readMoreMountain");
    });

    // Sea
    document.getElementById("readMoreSea")
    .addEventListener("click", function () {
      showSection("seaText", "seaTitle", "readMoreSea");
    });
```


---



Interactive sustainability test "Test your Travel Footprint"

```js
function scoreToPercentage(score) {

    let converted = (score / 30) * 100;

    let pc = Math.round(converted);

    return pc;
}

```
---

```js
function reactToTest() {

    let score = 0;

    score += Number(document.getElementById("q1").value);
    score += Number(document.getElementById("q2").value);
    score += Number(document.getElementById("q3").value);
    score += Number(document.getElementById("q4").value);
    score += Number(document.getElementById("q5").value);
    score += Number(document.getElementById("q6").value);

    let pc = scoreToPercentage(score);

 ```
---

```js
console.log("Percentage = " + pc);

if (pc <= 40) {
  console.log('Unaware Traveler')
    alert(
'You will get there! You can find how to do better on our magazine!');
    document.body.style.background = "lightpink";


} else if (pc <= 75) {
  console.log('Conscious Traveler')
    alert(
'You are on your way, check out our magazine to get even better!');
    document.body.style.background = "lightgoldenrodyellow";
 ```
---

```js
} else {
  console.log('Sustainability Professional')
    alert(
'Congratulations, keep getting updating through our magazine!');
    document.body.style.background = "honeydew";
    }
}
```
---

This function:

- Gathers 6 numeric answers and sums them
- Converts them to a percentage
- Classifies the user into the 3 categories created
- Changes the page background and shows an alert based on the category

---

![](./images/result.jpg) 


---


![](./images/color%20change.jpg)


---

Cookies for subscription: 

```js

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const nameInput = 
  document.getElementById("specificSizeInputName");
  const thankYouMessage = 
  document.getElementById("thank-you-message");

    form.addEventListener("submit", function (event) {
         event.preventDefault();

          const name = nameInput.value.trim();
```
---

```js
if (name === "") {
  thankYouMessage.textContent = 
  "Please enter your name before submitting.";
  thankYouMessage.style.color = "red";
  nameInput.focus();
  } else {
  thankYouMessage.textContent = "Thank you, " + name + "!" + 
  "We just sent you a confirmation email";
  thankYouMessage.style.color = "green";
        }
    });

});
```

---

![](./images/subscription.jpg)

---

![](./images/subscription%202.jpg)

## Future considerations 
Long-term goals include expanding destination categories based on the different continents and countries, and on potentially developing an exclusive daily news format for the subscribers both on the website and on a mobile app.

---

## Conclusion

Thank you very much for your attention!
