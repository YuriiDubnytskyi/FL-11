let login , password,newPasswording,newPasword,oldPassword,newPassAgain;
const five=5;
const six=6;
login = prompt('Enter your name : ','');
if (login === null){
    alert('Canceled')
}else if ( login === 'user@gmail.com') {
    password = prompt('Enter password : ', '');
    if (password === null) {
        alert('Canceled')
    } else if (password === 'UserPass') {
        newPasswording = confirm('Do you want to change your password');
        if(newPasswording === true){
            oldPassword = prompt('Write your old password','');
            if(oldPassword === null){
                alert('Canceled')
            }else if(oldPassword === password){
                newPasword = prompt('Write new password');
                if(newPasword === null){
                    alert('Canceled')
                }else if(newPasword.length > 0 && newPasword.length < five){
                    alert('too short password. Sorry.')
                }else {
                    newPassAgain = prompt('Enter again new password');
                    if(newPassAgain === newPasword){
                        alert('have successfully changed your password.')
                    }else if(newPassAgain === null){
                        alert('Canceled')
                    }else{
                        alert('You wrote the wrong password.')
                    }
                }
            }else{
                alert('Wrong password')
            }
        }else{
            alert('You have failed the change')
        }
    } else {
        alert('Wrong password')
    }
}else if ( login === 'admin@gmail.com'){
    password = prompt('Enter password : ','');
    if (password === null){
        alert('Canceled')
    }else if ( password === 'AdminPass'){
        newPasswording = confirm('Do you want to change your password');
        if(newPasswording === true){
            oldPassword = prompt('Write your old password','');
            if(oldPassword === null){
                alert('Canceled')
            }else if(oldPassword === password){
                newPasword = prompt('Write new password');
                if(newPasword === null){
                    alert('Canceled')
                }else if(newPasword.length > 0 && newPasword.length < five){
                    alert('It is too short password. Sorry.')
                }else {
                    newPassAgain = prompt('Enter again new password');
                    if(newPassAgain === newPasword){
                        alert('You have successfully changed your password.')
                    }else if(newPassAgain === null){
                        alert('Canceled')
                    }else{
                        alert('You wrote the wrong password.')
                    }
                }
            }else{
                alert('Wrong password')
            }
        }else{
            alert('You have failed the change')
        }
    }else {
        alert('Wrong password')
    }
}else if ( login.length > 0 && login.length < six){
    alert('I do not know any users having name length less than 6 symbols')
}else {
    alert('I do not know you')
}