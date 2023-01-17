export async function getClientsTest() {
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
      const reader = req.body.getReader();
      const stream = new ReadableStream({
        start(controller) {
          return pump();

          function pump() {
            return reader.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }

              controller.enqueue(value);
              return pump();
            });
          }
        }
      });
      const blob = await new Response(stream).blob();
      const text = await blob.text();
      return JSON.parse(text);
    //   return this.listClients;
    } else {
      alert('Falha na requisição!')
    }
  }