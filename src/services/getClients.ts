import { readableStream } from './readableStream';

export async function getClients() {
  const _token = localStorage.getItem('authorization');
  let options = {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json;charset=utf-8',
      'Authorization': 'Bearer ' + _token
    },
  }

  const req = await fetch('http://186.237.58.167:65129/api/user/getusers', options)

  if (req.status === 200) {
    const response = await readableStream(req);
    return JSON.parse(response);
  } else {
    alert('Falha na requisição!')
  }
}