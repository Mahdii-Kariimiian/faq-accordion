
document.querySelectorAll('.Accordion').forEach( question => {
    question.addEventListener ( 'click' , ()=> {
        const accordionContent = question.nextElementSibling;
        accordionContent.classList.toggle("toggle-answer");

    })
});

document.querySelectorAll('.QSVG').forEach( line => {
    line.addEventListener ( "click" , ()=> {
        line.classList.toggle("question-after")
    })
})
     
