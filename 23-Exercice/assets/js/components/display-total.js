export default function (list, total) { 
  total.innerHTML = '';
  total.innerHTML = `Total: ${list.total()} €`;
  total.setAttribute('class', 'total');
}; //pour le total

