document.addEventListener('DOMContentLoaded',()=>{
    const htmlText =document.querySelector('#html-text');
    const cssText = document.querySelector('#css-text');
    const jsText = document.querySelector('#js-text');
    const runCode = document.querySelector('.run-code');
      
    const htmlLink = document.getElementById('html-editor');
    const cssLink = document.getElementById('css-editor');
    const jsLink = document.getElementById('js-editor');


    htmlLink.addEventListener('click',(e)=>{
         e.preventDefault();
         htmlText.focus();
    });
    cssLink.addEventListener('click',(e)=>{
        e.preventDefault();
        cssText.focus();
    });
    jsLink.addEventListener('click',(e)=>{
         e.preventDefault();
        jsText.focus();
    });

    const outputFrame = document.querySelector('.iframe');
    runCode.addEventListener('click',()=>{
         const htmlCode=htmlText.value;
         const cssCode =`<style>${cssText.value}</style>`;
         const jsCode = `<script>${jsText.value}</script>`; 
         const fullCode = `
             <!DOCTYPE html>
             <html lang="en">
             <head>
               <meta charset="UTF-8">
               <meta name="viewport"              content="width=device-width,              initial-scale=1.0">
               <title>Output</title>
               ${cssCode}
             </head>
             <body>
                ${htmlCode}
                ${jsCode}
             </body>
             </html>
          
          `;
          console.log(fullCode);
          outputFrame.srcdoc = fullCode;
    });
  

});