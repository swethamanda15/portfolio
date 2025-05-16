var typed = new Typed(".text", {
  strings: ["UI/UX Developer","FrontDeveloper"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true

});

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwNoMtJeVv-burz4KU7nfI25_ooFOrnkvqL_Bm_SmpB0dMdSuvtPMDAANM3EVqy_ONo/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML="Message Sent Succesfully"
        setTimeout(function(){
          msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
