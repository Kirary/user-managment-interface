/**
 * Created by Kirary on 25.08.2017.
 */
import axios from 'axios';


// Функции интерфейса:
// 1. Просмотр списка пользователей
// 2. Создание пользователя
// 3. Редактирование данных пользователя
// 4. Просмотр операций пользователя
// 5. Изменение баланса пользователя

/*
*
* список пользователей - карточка пользователя
* окно создания пользователя / редактирования пользователя.
* Окно просмотра операций пользователя.
*
* */


// Create a new user.
//
// HTTP REQUEST
// POST https://livedemo.xsolla.com/fe/test-task/baev/users



// Get a user
//
// Retrieve a user data.
//
//     HTTP REQUEST
// GET https://livedemo.xsolla.com/fe/test-task/baev/users/{user_id}



// Update an user
//
// Update user's information.
//
// HTTP REQUEST
// PUT https://livedemo.xsolla.com/fe/test-task/baev/users/{user_id}



// List all users
//
//     HTTP REQUEST
// GET https://livedemo.xsolla.com/fe/test-task/baev/users
export const getUserList = (offset, limit) =>{
    return axios.get('https://livedemo.xsolla.com/fe/test-task/baev/users', {
        params: {
            offset: offset,
            limit: limit
        }
    })
};


// List all operations.
//
//     HTTP REQUEST
// GET https://livedemo.xsolla.com/fe/test-task/baev/users/{user_id}/transactions
export const getUserOperations = (user_id, datetime_from='1990-10-02T15:00:00Z', datetime_to='2017-08-29T15:00:00Z' ) =>{
    return axios.get(`https://livedemo.xsolla.com/fe/test-task/baev/users/${user_id}/transactions`, {
        params: {
            datetime_from: datetime_from,
            datetime_to: datetime_to
        }
    })
};


//
// Change a balance.
//
//     HTTP REQUEST
// POST https://livedemo.xsolla.com/fe/test-task/baev/recharge



