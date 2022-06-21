import {getSecureUser} from "./auth";

export const getUsers = () => {
    const url = 'http://192.168.33.102/api/users';
    getSecureUser()
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
                    .catch(e => console.log('error fetch ', JSON.stringify(e)))
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
