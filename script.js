function HelloName(){
  let result = prompt('prénom:');
    if(isNaN(result) || result != empty){
      alert('Bonjour' + result);
    } else {
      alert('vérifier votre saisie!')
    }
}
HelloName();
