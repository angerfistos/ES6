export default function(ressource, selector, input){
  const errorDiv = document.querySelector(selector);
  if (!ressource) {
    errorDiv.innerText = `a ${input} was mandatory`;
    return;
  }
  errorDiv.innerText = '';
  return ressource;
};
