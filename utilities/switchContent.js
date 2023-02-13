export function switchContent(from,to){
    //0 -> loginForm
    // 1 -> registerForm
    document.getElementsByClassName('form')[to].classList.remove('hide-content')
    document.getElementsByClassName('form')[from].classList.add('hide-content')

}