export default function(isStringExist, string,selector){
  const errorDiv = document.querySelector(selector);
    if(!isStringExist){
        return errorDiv.innerText = '';
    }
    return errorDiv.innerText = `${string} exists`;
}