import { getClients } from './getClients';

export async function postNewClient(form) {
    const _token = localStorage.getItem('authorization');

    var passwordMd5Base64 = btoa(CryptoJS.MD5(form.UserPassword));
    let options = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + _token
      },
      body: JSON.stringify({
        ...form,
        UserPassword: passwordMd5Base64,
      })
    }

    const req = await fetch('http://186.237.58.167:65129/api/user/saveuser', options)

    if (req.status === 200) {
        alert('Alterações salvas!');
        return await getClients();
    } else {
        alert('Falha na requisição!');
    }
}