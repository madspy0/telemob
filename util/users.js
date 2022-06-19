import {getUser} from "./auth";

export const getUsers = () => {
    const url = 'http://192.168.1.138:8000/api/users';
    getUser()
      //  .then(response => JSON.parse(response))
        .then(user => {
                fetch(url,
                    {
                        method: 'GET',
                        headers: new Headers({
                            'Authorization': 'Bearer ' + user.token,
                        })
                    })
                    .then(response => response.json())
                    .then(users => {
                            if (typeof users.error === 'undefined') {
                                console.log('юзеры', users)
                            } else {
                                alert(users.error.message)
                            }
                        }
                    )
                    .catch(e => console.log('error fetch ', e))
            }
        )
        .catch(e => console.log(e))
    /*    fetch(url,
            {
                method: 'GET',
                headers: new Headers({
                    'Authorization': 'Bearer ' + user.token,
                })
            }
            )*/

    /*    try {
            let user = JSON.parse(await getUser())
            if(user===undefined) {
                alert('undifined')
                return false
            }
            const response = await fetch(url,
                {
                    method: 'GET',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + user.token,
                    })
                }
            );
            if (!response.ok) {
                console.log('promise is not ok', response)
                await Promise.reject(response);
            }

            return await response.json();
        } catch (error) {
            console.error('Ошибка:', error);
        }*/
}
