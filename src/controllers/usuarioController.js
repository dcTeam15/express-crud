let usuarios = [
    {
        id: 0,
        email: 'gleidsondeveloper@gmail.com',
        senha: '123456',
        token: ''
    }
]

function listarUsuarios(){
    return usuarios;
}

function login(usuario){

    let user;

    usuarios.forEach(u => {
        if(u.email === usuario.email){
            user = u;
        }
    })
    
    if(!user){
        return {message: 'usuario não existe'};
    }

    if(user.senha === usuario.senha){
        let token = '123';
        usuarios[user.id].token = token;
        return {token: token};
    }else{
        return {message: 'usuario ou senha incorretos'};
    }

}

module.exports = {
    login,
    listarUsuarios
}