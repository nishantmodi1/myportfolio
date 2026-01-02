
// (function (){
  // emailjs.init('G_uWZ1wjjvMGKArdY')
// })()

const form = document.getElementById("contact-form")
const button = form.querySelector("input[type='submit']");

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  button.disabled = true;
  button.value="Sending..."

  const formdata=new FormData(form)
  const data={
    from_name: formdata.get('from_name'),
    from_email: formdata.get('from_email'),
    subject: formdata.get('subject'),
    message: formdata.get('message'),
  };

  try {
    const response=await fetch('https://portfolio-backend-fnyq.onrender.com/send-mail', {
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const result=await response.json();
    if(result.success){
      alert('message sent successfully!')
      form.reset()
    }else{
      alert('failed to send message')
    }
  } catch (error) {
    alert('Server error, Try again later.')
    console.error(error)
  }finally{
    button.disabled=false
    button.value='Send Email'
  }

  // using emailjs
  // emailjs
  //   .sendForm("service_o3jma8r", "template_fm59k22", this)
  //   .then(()=> {
  //     alert("Message sent successfully!");
  //     form.reset();
  //        button.disabled=false;
  //        button.value='Send Email'
  //   }, (error) => {
  //     alert("failed to send message. Try again.")
  //     console.error(error)
  //     button.disabled=false
  //     button.value='Send Email'
  //   }
  // )
})

const toggle = document.querySelector(".nav__wrapper__toggle");
const ul = document.querySelector(".nav__wrapper__ul");
// console.log(toggle);
// add click event on toggle
toggle.addEventListener("click", () => {
  // alert("Hello toggle");
  ul.classList.toggle("nav__active");
});

// name typewrite effect
const nameElement = document.querySelector(".header__data__contents__heading");
const nameText = "Nishant Modi";
let start = 0;

//// console.log(nameText.charAt(0));

const typewrite = () => {
  if (start < nameText.length) {
    // console.log(nameText.charAt(start));
    nameElement.innerHTML += nameText.charAt(start);
    start++;
    setTimeout(typewrite, 300);
  }
};
typewrite();

//open close modal
const modelBtn = document.querySelector(".model-btn");
const model = document.querySelector(".model");
const modelClose = document.querySelector(".model__wrapper__close");

//open model
modelBtn.addEventListener("click", () => {
  model.style.display = "flex";
});

// close model
modelClose.addEventListener("click", () => {
  model.style.display = "none";
});

// get current year

const year = document.querySelector(".yrs");
year.innerHTML = new Date().getFullYear();


// import React, { useState, useEffect } from 'react';

// const Typewriter = ({ text }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [index, setIndex] = useState(0);
//   const [underscorePosition, setUnderscorePosition] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (index < text.length) {
//         setDisplayText(prevText => prevText + text.charAt(index));
//         setIndex(prevIndex => prevIndex + 1);
//         setUnderscorePosition(prevPos => prevPos + 0); // Move underscore by 10px
//       }
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [index, text]);

// //   const underscore = ''

//   return (
//     <div style={{marginLeft: "350px"}}>
//       {displayText}
//       {/* <span style={{ fontSize: '10px', marginLeft: `${underscorePosition}px` }}>_</span> */}
//       <span style={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '2px', marginLeft: `${underscorePosition}px` }}>_</span>

//     </div>
//   );
// };

// // Example usage:
// export const Spinner = () => {
//   return <Typewriter text="response..." />;
// };
