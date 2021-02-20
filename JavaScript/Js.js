let userName = prompt('', 'Username');

if (userName == 'Admin'){
  let pass = prompt('Enter password', '');

  if (pass == 'Boss'){
    alert('Good morning !');
  } else if (pass !== 'Boss'){
    alert ('Incorrect password');
  } else {
    alert ('ESC');
  }
} else if (userName == '' || userName == null){
  alert('Declined');
} else {
  alert ('Who are you ?');
}
